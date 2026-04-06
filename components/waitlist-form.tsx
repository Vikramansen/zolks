"use client";

import { useActionState } from "react";
import {
  submitWaitlist,
  waitlistInitialState,
  type WaitlistState,
} from "@/app/actions/waitlist";

function Message({ state }: { state: WaitlistState }) {
  if (!state.message) return null;
  return (
    <p
      role="status"
      className={`mt-3 text-sm ${state.ok ? "text-sage" : "text-accent"}`}
    >
      {state.message}
    </p>
  );
}

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(submitWaitlist, waitlistInitialState);

  return (
    <form action={formAction} className="mt-8 flex max-w-md flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pending}
          placeholder="you@team.com"
          className="min-h-12 flex-1 rounded-md border border-ink/15 bg-paper px-4 text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={pending}
          className="min-h-12 shrink-0 rounded-md bg-accent px-6 font-semibold text-cream transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending…" : "Notify me"}
        </button>
      </div>
      <Message state={state} />
    </form>
  );
}
