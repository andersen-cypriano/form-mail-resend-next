import { EmailTemplate } from "../components/email-tempplate";
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';
import { NextApiRequest, NextApiResponse } from "next";

const resend = new Resend("re_jZMZbyZH_55yRjmSNxZeac9v5a43bqksR");

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['acypriano@mtsolucoes.com.br'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Andersen" }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}