import { NextResponse } from "next/server";
import tourList from "@/app/(user)/toursdetails/tourData";

export async function GET() {
  return NextResponse.json(tourList);
}
