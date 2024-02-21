/* Core */
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  // const body = await req.json();
  // const { amount = 1 } = body;

  // simulate IO latency
  // await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: [1, 2, 3, 4, 5] });
}

