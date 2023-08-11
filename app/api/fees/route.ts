import { getSession } from "@/app/api/user/users/route";
import { SessionUser } from "@/types";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const session = await getSession();
  const sessionUser = session?.user as SessionUser;

  if (!sessionUser?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  if (sessionUser.role === "user") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json();

  const { email, amount, month, year, message } = body;

  const feesExists = await prisma.fees.findFirst({
    where: {
      email,
      month,
      year,
    },
  });

  if (feesExists) {
    return NextResponse.json(
      {
        error: "Fees already exists",
      },
      {
        status: 400,
      }
    );
  }
  const fees = await prisma.fees.create({
    data: {
      email,
      month,
      year,
      message,
      amount,
    },
  });

  return NextResponse.json({
    status: 200,
    data: fees,
    message: `Fees for the month of ${month} ${year} added successfully`,
  });
}
