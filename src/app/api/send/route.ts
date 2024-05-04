import Submission from "@/app/components/submission/Submission";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEYS);
export async function POST(request: NextRequest) {
  let success = false;
  try {
    const param = request.nextUrl.searchParams;
    const name = param.get("name");
    const email = param.get("email");
    const message = param.get("message");

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["officialelysiamedia@gmail.com"],
      subject: "New Email Submission from Elysia Media Website",
      react: Submission({
        name: name ?? "(Not Filled)",
        email: email ?? "(Not Filled)",
        message: message ?? "(Not Provided)",
      }),
      tags: [
        {
          name: "category",
          value: "form_submission",
        },
      ],
    });
    success = true;
  } catch (error) {
    return Response.json({ error });
  }
  return Response.json({
    success: success,
  });
  // redirect(`/contact/submit?result=${success}`);
}
