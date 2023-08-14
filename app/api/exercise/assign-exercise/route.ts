import { SessionUser } from "@/types";
import { getSession } from "../../users/route";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { WorkOut } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const session = await getSession();

    const sessionUser = session?.user as SessionUser;

    if (!session) {
      return NextResponse.json(
        {
          error: "Not authenticated",
        },
        { status: 401 }
      );
    }

    if (sessionUser.role === "user") {
      return NextResponse.json(
        {
          error: "Not authorized",
        },
        { status: 403 }
      );
    }

    const { selectedStudents, workOutArray, fromDate, toDate } =
      await req.json();

    if (!selectedStudents || !workOutArray || !fromDate || !toDate) {
      return NextResponse.json(
        {
          error: "Missing fields",
        },
        { status: 400 }
      );
    }

    const students = await prisma.user.findMany({
      where: {
        id: {
          in: selectedStudents,
        },
      },
    });

    await Promise.all(
      students.map(async (student) => {
        const exercise = await prisma.exercise.findFirst({
          where: {
            studentId: student.id,
          },
        });

        if (exercise) {
          await prisma.exercise.update({
            where: {
              id: exercise.id,
            },
            data: {
              exercises: {
                deleteMany: {},
                create: workOutArray.map((workOut: any) => ({
                  exerciseId: workOut.id,
                  exerciseName: workOut.exerciseName,
                  sets: workOut.sets || 0,
                  steps: workOut.steps || 0,
                  kg: workOut.kg || 0,
                  rest: workOut.rest || 0,
                })),
              },
              fromDate: new Date(fromDate),
              toDate: new Date(toDate),
            },
          });
        } else {
          await prisma.exercise.create({
            data: {
              studentId: student.id,
              exercises: {
                create: workOutArray.map((workOut: any) => ({
                  exerciseId: workOut.id,
                  exerciseName: workOut.exerciseName,
                  sets: workOut.sets || 0,
                  steps: workOut.steps || 0,
                  kg: workOut.kg || 0,
                  rest: workOut.rest || 0,
                })),
              },
              fromDate: new Date(fromDate),
              toDate: new Date(toDate),
            },
          });
        }
      })
    );

    return NextResponse.json(
      {
        message: "Workout assigned successfully",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
