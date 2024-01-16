"use client";

import { Link, usePathname } from "@/navigation";

export const Menu: React.FC<{}> = () => {
  const pathname = usePathname();

  return (
    <ul className="w-32">
      <li>
        <Link
          href="/docs/components/welcome"
          className={
            pathname === "/docs/components/welcome" ? "text-sky-500" : ""
          }
        >
          Welcome
        </Link>
      </li>
      <li>
        <Link
          href="/docs/components/button"
          className={
            pathname === "/docs/components/button" ? "text-sky-500" : ""
          }
        >
          Button
        </Link>
      </li>
    </ul>
  );
};
