import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.json();
    console.log(formData);

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Server Error! " + error, { status: 500 });
  }
};
