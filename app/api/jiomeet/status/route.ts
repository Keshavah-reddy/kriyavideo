import { NextResponse } from "next/server";

export async function GET() {
  const isConnected = !!(
    process.env.JIOMEET_APP_ID && 
    process.env.JIOMEET_SECRET_KEY && 
    process.env.JIOMEET_API_BASE_URL
  );

  return NextResponse.json({
    connected: isConnected,
    message: isConnected ? "JioMeet API credentials configured." : "JioMeet API credentials not configured yet.",
    requiredEnv: [
      "JIOMEET_APP_ID",
      "JIOMEET_SECRET_KEY",
      "JIOMEET_API_BASE_URL"
    ]
  });
}
