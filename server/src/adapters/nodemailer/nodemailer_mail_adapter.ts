import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail_adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3b2cb9ee9952b7",
    pass: "8aa3b8851e9b95"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Aline Capoani <aline_capoani@hotmail.com>',
      subject,
      html: body
    });
  }
}