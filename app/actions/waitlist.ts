"use server";

import { z } from "zod";
import { sendWaitlistEmails } from "@/lib/email";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter an email.")
    .email("Please enter a valid email address.")
    .max(320),
});

export type WaitlistState = {
  ok: boolean;
  message: string;
};

const initial: WaitlistState = { ok: false, message: "" };

export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const raw = formData.get("email");
  const parsed = schema.safeParse({ email: raw });

  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors.email?.[0];
    return { ok: false, message: first ?? "Something went wrong." };
  }

  try {
    await sendWaitlistEmails(parsed.data.email);
    return {
      ok: true,
      message: "You're on the list. We'll be in touch.",
    };
  } catch (err) {
    console.error("[waitlist]", err);
    return {
      ok: false,
      message: "We couldn't send that just now. Try again in a moment.",
    };
  }
}

export const waitlistInitialState: WaitlistState = initial;
