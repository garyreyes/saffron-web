import { Resend } from "resend";

// Server-only: reads RESEND_API_KEY from the environment, never bundled to
// the client. Constructed lazily so importing this module (e.g. during
// `next build`'s route data collection) doesn't require the key to be set —
// only actually sending an email does.
let client: Resend | null = null;

export function getResend(): Resend {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}
