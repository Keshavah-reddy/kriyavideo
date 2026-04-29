import { NextResponse } from "next/server";

export async function POST() {
  // Generate random mock data
  const randomId = Math.floor(100000 + Math.random() * 900000).toString();
  const passcode = Math.floor(1000 + Math.random() * 9000).toString();
  const meetingId = `KM-${randomId}`;

  // In the future, this will be replaced with real JioMeet API call:
  // const response = await fetch("https://jiomeet.api.endpoint/create", { ... })

  return NextResponse.json({
    success: true,
    meeting: {
      meetingId,
      title: "Instant Meeting",
      hostUrl: `/meeting/${meetingId}`,
      joinUrl: `/meeting/${meetingId}`,
      passcode,
      createdAt: new Date().toISOString()
    }
  });
}
