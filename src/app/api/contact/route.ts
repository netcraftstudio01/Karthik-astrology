/**
 * Next.js API route for handling contact form submissions
 * Uncomment and configure based on your email service
 */

import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email using SendGrid, Nodemailer, or similar
    // 3. Send confirmation email to user

    // Example with environment variables (uncomment when configured):
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'info@karthikastrology.com',
      from: 'noreply@karthikastrology.com',
      subject: `New Contact: ${subject}`,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Subject:</strong> ${subject}<br>
        <strong>Message:</strong><br>
        ${message}
      `,
    };

    await sgMail.send(msg);

    // Send confirmation email to user
    const userMsg = {
      to: email,
      from: 'noreply@karthikastrology.com',
      subject: 'We received your message',
      html: `
        <h2>Thank you for contacting Karthik Astrology</h2>
        <p>We have received your message and will get back to you soon.</p>
        <p>Your message: ${message}</p>
      `,
    };

    await sgMail.send(userMsg);
    */

    return NextResponse.json(
      { 
        message: 'Message received successfully! We will contact you soon.',
        data: { name, email, subject }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
