import * as nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    // Check if Gmail credentials are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Gmail credentials not set in environment variables');
      return NextResponse.json(
        { 
          error: 'Email service is not configured. Please contact the administrator.',
          details: 'Gmail SMTP credentials missing'
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, business, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // s.cube.traders.info@gmail.com
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"S Cube Traders Contact Form" <${process.env.GMAIL_USER}>`,
      to: 's.cube.traders.info@gmail.com',
      replyTo: email,
      subject: `New Contact: ${name}${business ? ` - ${business}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #007bff, #0056b3); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">S Cube Traders</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px 20px;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #007bff;">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 12px 0; font-weight: bold; color: #495057; width: 120px;">Name:</td>
                  <td style="padding: 12px 0; color: #212529;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 12px 0; font-weight: bold; color: #495057;">Email:</td>
                  <td style="padding: 12px 0;">
                    <a href="mailto:${email}" style="color: #007bff; text-decoration: none; font-weight: 500;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr style="border-bottom: 1px solid #e9ecef;">
                  <td style="padding: 12px 0; font-weight: bold; color: #495057;">Phone:</td>
                  <td style="padding: 12px 0;">
                    <a href="tel:${phone}" style="color: #007bff; text-decoration: none; font-weight: 500;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${business ? `
                <tr>
                  <td style="padding: 12px 0; font-weight: bold; color: #495057;">Business:</td>
                  <td style="padding: 12px 0; color: #212529;">${business}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 10px; overflow: hidden;">
              <div style="background-color: #007bff; color: white; padding: 15px;">
                <h3 style="margin: 0; font-size: 16px;">💬 Message</h3>
              </div>
              <div style="padding: 20px; line-height: 1.6; color: #333;">
                ${message.split('\n').map((line: string) => line.trim()).join('<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 10px; text-align: center; border: 1px solid #e9ecef;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                📧 Sent from S Cube Traders website contact form<br>
                🕐 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : '';
    
    // Log more details for debugging in Vercel logs
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD
    });
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: errorMessage.includes('Invalid login') 
          ? 'Gmail authentication failed. Please check your credentials.' 
          : errorMessage.includes('ENOTFOUND')
          ? 'Network error. Unable to connect to email server.'
          : errorMessage
      },
      { status: 500 }
    );
  }
}