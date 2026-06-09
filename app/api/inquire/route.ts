import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize the delivery engine with your secure system token
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, message } = body;

    // Strict validation check to guard against bot spam
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Required fields missing.' }, { status: 400 });
    }

    // Map out budget values to readable client tiers
    const budgetMap: Record<string, string> = {
      sme: 'Premium Business Hub (KES 100k — 250k)',
      enterprise: 'Custom Enterprise System (KES 250k — 500k+)',
      retainer: 'Dedicated Engineering Retainer'
    };

    const selectedBudget = budgetMap[budget] || budget;

    // Execute the secure email dispatch
    const emailTransmission = await resend.emails.send({
      from: 'Acquisition Engine <onboarding@resend.dev>',
      to: ['otieno.collins@gmail.com'], // <-- REPLACE THIS with your actual inbox email
      subject: `[High-Value Lead] Project Brief from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background-color: #F9F8F6; color: #2C2C2C; max-width: 600px; border: 1px solid #2C2C2C/10;">
          <h2 style="font-size: 20px; font-weight: normal; border-b: 1px solid #2C2C2C; padding-bottom: 12px; margin-bottom: 24px; text-transform: uppercase; tracking: 1px;">
            New Engagement Specification Received
          </h2>
          
          <div style="margin-bottom: 16px;">
            <strong style="font-size: 11px; text-transform: uppercase; color: #9C6B53; display: block; margin-bottom: 4px;">Identity</strong>
            <span style="font-size: 15px;">${name}</span>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="font-size: 11px; text-transform: uppercase; color: #9C6B53; display: block; margin-bottom: 4px;">Secure Contact</strong>
            <span style="font-size: 15px;"><a href="mailto:${email}" style="color: #2C2C2C;">${email}</a></span>
          </div>

          <div style="margin-bottom: 16px;">
            <strong style="font-size: 11px; text-transform: uppercase; color: #9C6B53; display: block; margin-bottom: 4px;">Allocated Budget Matrix</strong>
            <span style="font-size: 15px; font-weight: bold; color: #9C6B53;">${selectedBudget}</span>
          </div>

          <div style="margin-bottom: 24px; padding-top: 16px; border-top: 1px dashed #2C2C2C/20;">
            <strong style="font-size: 11px; text-transform: uppercase; color: #9C6B53; display: block; margin-bottom: 8px;">Strategic Intent Brief</strong>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic; white-space: pre-wrap; margin: 0; background-color: #FFF; padding: 16px; border-left: 3px solid #9C6B53;">
              "${message}"
            </p>
          </div>

          <footer style="font-size: 10px; color: #2C2C2C/40; text-align: center; margin-top: 4px; padding-top: 16px; border-top: 1px solid #2C2C2C/10;">
            North & Knot Acquisition Pipeline System &bull; Core Router
          </footer>
        </div>
      `
    });

    if (emailTransmission.error) {
      console.error('Resend API Delivery Fault:', emailTransmission.error);
      return NextResponse.json({ error: 'Delivery transmission failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Internal Crash:', error);
    return NextResponse.json({ error: 'Internal Server Fault.' }, { status: 500 });
  }
}