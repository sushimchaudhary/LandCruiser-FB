import { NextResponse } from "next/server";
import tourList from "@/app/(user)/toursdetails/tourData"; 

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const tourId = parseInt(params.id);
  const tour = tourList.find((t) => t.id === tourId);

  if (!tour) {
    return NextResponse.json(
      { message: "Tour not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(tour);
}
