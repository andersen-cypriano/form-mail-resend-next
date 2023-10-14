import { EmailTemplate } from "../components/email-tempplate";
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { NextApiRequest, NextApiResponse } from "next";
require('dotenv').config()
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['acypriano@mtsolucoes.com.br'],
      subject: reqBody.data.name,
      react: EmailTemplate(reqBody.data.name) as React.ReactElement,
    });
    console.log(reqBody);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}