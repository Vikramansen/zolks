import { Resend } from "resend";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/**
 * Sends an admin notification when someone joins the waitlist.
 * Optionally sends a short confirmation to the subscriber.
 */
export async function sendWaitlistEmails(subscriberEmail: string): Promise<void> {
  const resend = getResend();
  const from = process.env.EMAIL_FROM ?? "Zolks <onboarding@resend.dev>";
  const notifyTo = process.env.WAITLIST_TO_EMAIL;

  if (!resend) {
    throw new Error("Email is not configured (missing RESEND_API_KEY).");
  }
  if (!notifyTo) {
    throw new Error("WAITLIST_TO_EMAIL is not set.");
  }

  const safe = escapeHtml(subscriberEmail);

  await resend.emails.send({
    from,
    to: [notifyTo],
    subject: `New Zolks waitlist signup`,
    text: `New signup:\n${subscriberEmail}\n`,
    html: `<p>New Zolks waitlist signup:</p><p><strong>${safe}</strong></p>`,
  });

  const sendConfirmation = process.env.SEND_WAITLIST_CONFIRMATION === "true";
  if (sendConfirmation) {
    await resend.emails.send({
      from,
      to: [subscriberEmail],
      subject: "You're on the Zolks list",
      text: [
        "Thanks for your interest.",
        "",
        "We'll only email when there's something worth your time.",
        "",
        "— Zolks",
      ].join("\n"),
      html: `<p>Thanks for your interest.</p><p>We'll only email when there's something worth your time.</p><p>— Zolks</p>`,
    });
  }
}
