import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: Response) {
    console.log(req);

    const x = req.nextUrl.searchParams.get("search") as string
     return NextResponse.json({name: "Anna", x})
}