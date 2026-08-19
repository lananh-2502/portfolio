import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json({ ok: false, fallback: "mailto" }, { status: 503 });
  }
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ access_key: accessKey, name: data.name, email: data.email, subject: data.subject, message: data.message }),
  });
  return NextResponse.json({ ok: response.ok }, { status: response.ok ? 200 : 502 });
}
