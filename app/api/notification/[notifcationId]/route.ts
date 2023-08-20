import { NextApiRequest } from "next";

export async function PATCH(req: NextApiRequest) {
  const data = req.query;

  return {
    status: 200,
    data: {
      data,
    },
  };
}
