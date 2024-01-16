import type { Pathnames } from "next-intl/navigation";

export const locales: ReadonlyArray<string> = ["en", "zh_cn"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

// Use the default: `as-needed`
export const localePrefix = "as-needed";

export type AppPathnames = keyof typeof pathnames;
