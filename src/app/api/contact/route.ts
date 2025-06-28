import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const nationality = formData.get("nationality") as string;
  const contact = formData.get("contact") as string;
  const email = formData.get("email") as string;
  const nic = formData.get("nic") as string;
  const nicValue = formData.get("nicValue") as string;
  const branch = formData.get("branch") as string;
  const programme = formData.get("programme") as string;
  const message = formData.get("message") as string;
  const files = formData.getAll("documents") as File[];

  const attachments = await Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type,
    }))
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.MAIL_TO,
    subject: `New Contact Form Submission from ${firstName}`,
    text: `
        You have received a new contact form submission:

        Name: ${firstName} ${lastName}
        Nationality: ${nationality}
        Contact: ${contact}
        Email: ${email}
        Type (NIC/Passport): ${nic}
        NIC/Passport Number: ${nicValue}
        Branch: ${branch}
        Programme: ${programme}
        Message: ${message}
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Email failed to send" },
      { status: 500 }
    );
  }
}
