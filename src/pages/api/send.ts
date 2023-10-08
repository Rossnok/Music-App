import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_APIKEY);

export default async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({userName:'rossnok'}),
      text:''
    });

    return console.log(NextResponse.json(data));
  } catch (error) {
    return console.log(NextResponse.json({ error }));
  }
}
