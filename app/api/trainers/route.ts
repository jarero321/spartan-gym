import { NextResponse } from "next/server";
import { SessionUser } from "@/types";
import { getSession } from "../users/route";
import prisma from "@/app/libs/prismadb";

export async function GET() {
  const session = await getSession()

  const sessionUser = session?.user as SessionUser;

  if (!sessionUser?.email) {
    return NextResponse.json(
      {
        error: "Not authenticated",
      },
      { status: 401 }
    );
  }


  const users = await prisma.user.findMany({
    where: {
      role: "trainer",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      age: true,
      gender: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({
    status: 200,
    data: users,
  });
}
