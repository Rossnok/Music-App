import { EmailTemplate } from '../../../components/EmailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_APIKEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await resend.emails.send({
      from: 'RossMusic <onboarding@resend.dev>',
      to: ['sergiormworkmail@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: ''
    });

    return res.status(200).json(data);
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}