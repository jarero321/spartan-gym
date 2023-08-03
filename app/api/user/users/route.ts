import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { options } from "../../auth/[...nextauth]/options";
import { SessionUser } from "@/types";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
  try {
    return await getServerSession(options);
  } catch (error) {
    // If there's an error, log it and return null to indicate no active session
    console.error("Error while fetching session:", error);
    return null;
  }
}

export async function GET(request: NextApiRequest) {
  const session = await getSession();

  const sessionUser = session?.user as SessionUser;

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

  const page = request?.query?.page || 1;
  const limit = request?.query?.limit || 10;

  const parsedPage =
    typeof page === "string" ? parseInt(page, 10) : (page as unknown as number);
  const parsedLimit =
    typeof limit === "string"
      ? parseInt(limit, 10)
      : (limit as unknown as number);

  const users = await prisma.user.findMany({
    skip: (parsedPage - 1) * parsedLimit,
    take: parsedLimit,
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

  const count = await prisma.user.count();

  const pages = Math.ceil(count / parsedLimit);

  const pagination = {
    page: parsedPage,
    limit: parsedLimit,
    next: parsedPage + 1,
    previous: parsedPage - 1,
    first: 1,
    last: pages,
  };

  return NextResponse.json({
    status: 200,
    data: users,
    count,
    pages,
    pagination,
  });
}

export async function POST(req: Request) {
  const session = await getSession();

  const sessionUser = session?.user as SessionUser;

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

  const body = await req.json();

  if (!body.email || !body.password) {
    return NextResponse.json(
      {
        error: "Missing email or password",
      },
      { status: 400 }
    );
  }

  const userExists = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (userExists) {
    return NextResponse.json(
      {
        error: "User already exists",
      },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 12);

  const adminAccount = await prisma.user.findFirst({
    where: { role: "admin" },
  });

  const user = await prisma.user.create({
    data: {
      name: body?.name,
      email: body?.email!,
      image: body?.image,
      role: body?.role,
      hashedPassword,
      gender: body?.gender,
      age: body?.age,
      goal: body?.goal && body.goal.split(" ").join("_"),
      level: body?.level,
      weight: body?.weight,
      height: body?.height,
      adminId: adminAccount?.id || null,
      trainerId: body?.trainerId || null,
    },
  });

  return NextResponse.json({
    status: 201,
    data: user,
  });
}
