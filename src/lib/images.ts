import { existsSync } from "fs";
import { join } from "path";

/**
 * Checks whether a file exists under public/, so components can render the
 * real image the moment it's dropped in and fall back gracefully until
 * then. `publicPath` is site-root-relative, e.g. "/images/logo.png".
 */
export function publicImageExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), "public", publicPath));
}
