// src/app/api/demo/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  
  // TODO: Save to database (Prisma)
  // TODO: Trigger email (Resend)
  // TODO: Send to CRM (HubSpot API)

  return NextResponse.json({ success: true });
}
