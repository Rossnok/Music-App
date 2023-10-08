import { EmailTemplate } from '../../components/EmailTemplate/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Zt24xxXs_P6j4vmEnsPgjpefbGf3o358m');

export default async function POST() {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['SergioRMWorkMail@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({userName:'rossnok'}),
      text:''
    });
  } catch (error) {
    return  await console.log(NextResponse.json({ error }));
  }
}
