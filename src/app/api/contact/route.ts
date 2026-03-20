import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (per IP, max 3 requests per 10 minutes)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry) {
    if (now < entry.resetAt) {
      if (entry.count >= RATE_LIMIT) {
        return NextResponse.json({ error: "Too many requests" }, { status: 429 });
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    }
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
  }

  const { name, email, subject, message, _trap } = await req.json();

  if (_trap) return NextResponse.json({ success: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const safeMessage = String(message).replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
  const replySubject = encodeURIComponent(`Re: ${subject || "Deine Anfrage"}`);
  const replyBody = encodeURIComponent(`Hallo ${name}\n\n\n\n---\nIhre ursprüngliche Nachricht:\n\n${message}`);
  const mailtoHref = `mailto:${email}?subject=${replySubject}&body=${replyBody}`;

  const html = `<!DOCTYPE html>
<html lang="de" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>Neue Nachricht von ${name}</title>
<style>
  :root { color-scheme: dark; }
  body {
    margin: 0; padding: 0;
    background-color: #080C18;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a { color: #4F8EF7; text-decoration: none; }
</style>
</head>
<body style="background-color:#080C18;margin:0;padding:0;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#080C18;padding:40px 16px 60px;">
  <tr>
    <td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

        <!-- Wordmark -->
        <tr>
          <td style="padding-bottom:28px;padding-left:4px;">
            <span style="font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#4F8EF7;">JAN EGGENBERGER</span>
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background-color:#0D1120;border-radius:20px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;">

            <!-- Blue top bar -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="height:2px;background:linear-gradient(90deg,#3B82F6 0%,#6366F1 50%,rgba(99,102,241,0) 100%);border-radius:20px 20px 0 0;"></td>
              </tr>
            </table>

            <!-- Content -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:44px 44px 0;">

                  <!-- Tag -->
                  <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr>
                      <td style="background:rgba(79,142,247,0.12);border:1px solid rgba(79,142,247,0.2);border-radius:6px;padding:4px 10px;">
                        <span style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4F8EF7;">Neue Nachricht</span>
                      </td>
                    </tr>
                  </table>

                  <h1 style="margin:0 0 6px;font-size:28px;font-weight:700;color:#FFFFFF;letter-spacing:-0.03em;line-height:1.1;">${subject || "Neue Nachricht"}</h1>
                  <p style="margin:0 0 36px;font-size:14px;color:rgba(255,255,255,0.35);line-height:1.5;">von ${name} &middot; <a href="mailto:${email}" style="color:rgba(255,255,255,0.35);">${email}</a></p>

                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding:0 44px;">
                  <div style="height:1px;background:rgba(255,255,255,0.06);"></div>
                </td>
              </tr>

              <!-- Meta row -->
              <tr>
                <td style="padding:28px 44px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="50%" style="padding-right:12px;vertical-align:top;">
                        <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.2);">Von</p>
                        <p style="margin:0;font-size:14px;font-weight:600;color:rgba(255,255,255,0.85);">${name}</p>
                      </td>
                      <td width="50%" style="vertical-align:top;">
                        <p style="margin:0 0 4px;font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.2);">E-Mail</p>
                        <a href="mailto:${email}" style="font-size:14px;font-weight:500;color:#4F8EF7;">${email}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Message block -->
              <tr>
                <td style="padding:0 44px 44px;">
                  <p style="margin:0 0 10px;font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.2);">Nachricht</p>
                  <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:20px 22px;">
                    <p style="margin:0;font-size:15px;line-height:1.75;color:rgba(255,255,255,0.65);">${safeMessage}</p>
                  </div>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding:0 44px 44px;text-align:center;">
                  <a href="${mailtoHref}" style="display:inline-block;padding:14px 36px;background-color:#4F8EF7;color:#FFFFFF;font-size:14px;font-weight:600;border-radius:10px;letter-spacing:-0.01em;">
                    Antworten &rarr;
                  </a>
                </td>
              </tr>

            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding-top:28px;text-align:center;">
            <p style="margin:0 0 4px;font-size:12px;color:rgba(255,255,255,0.18);">Jan Eggenberger &middot; <a href="https://jan-eggenberger.com" style="color:rgba(255,255,255,0.28);">jan-eggenberger.com</a></p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>

</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Jan Eggenberger <jan@eggenberger.biz>",
    to: "jan@eggenberger.biz",
    subject: subject ? `${subject} — von ${name}` : `Neue Nachricht von ${name}`,
    html,
    replyTo: email,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
