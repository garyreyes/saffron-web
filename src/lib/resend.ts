import { Resend } from "resend";

// Server-only: reads RESEND_API_KEY from the environment, never bundled to the client.
export const resend = new Resend(process.env.RESEND_API_KEY);
