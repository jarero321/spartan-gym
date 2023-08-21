import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function PATCH(req: NextApiRequest) {
  try {

    console.log(req.query)

    return NextResponse.json({
      message: "hello world"
    })
   
  } catch (err: Error | any) {
    console.log(err)
  }

}
