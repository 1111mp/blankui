"use client";

import { startTransition } from "react";
import { useTheme } from "next-themes";
import { useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";

type Props = {};

export const Header: React.FC<Props> = () => {
  const { theme, setTheme } = useTheme();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <nav className="flex h-16 justify-center border-b shadow-sm dark:border-gray-800 dark:shadow-gray-900">
      <header className="flex w-full max-w-7xl">
        <ul className="flex flex-1 ">
          <li className="flex items-center">
            <Link href="/docs/components/welcome">Components</Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li className="flex align-middle">
            <select
              name="theme"
              className="outline-none dark:bg-transparent"
              defaultValue={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option value="system">System</option>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </li>
          <li className="flex align-middle">
            <select
              name="locale"
              className="outline-none dark:bg-transparent"
              defaultValue={locale}
              onChange={onSelectChange}
            >
              <option value="en">English</option>
              <option value="zh_cn">简体中文</option>
            </select>
          </li>
        </ul>
      </header>
    </nav>
  );
};
