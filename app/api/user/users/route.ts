import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { SessionUser } from "@/types";
import primsa from "@/app/libs/prismadb";

export async function getSession() {
  try {
    return await getServerSession(options);
  } catch (error) {
    // If there's an error, log it and return null to indicate no active session
    console.error("Error while fetching session:", error);
    return null;
  }
}

export async function GET(request: Request) {
  const session = await getSession();

  const sessionUser = session!?.user as SessionUser;

  if (!sessionUser?.email) {
    // If there's no active session or user email, return a response indicating unauthenticated access
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

  const users = await primsa.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      age: true,
      gender: true,
      height: true,
      weight: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({
    status: 200,
    data: users,
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    message: "Hello from the POST API",
  });
}
