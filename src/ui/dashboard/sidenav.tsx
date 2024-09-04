"use client";

import Link from "next/link";
import NavLinks from "@/ui/dashboard/nav-links";
import ThusoLogo from "@/ui/Thuso-logo";
import LogoutForm from "@/ui/dashboard/logout-form";
import clsx from "clsx";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white dark:bg-gray-900">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 dark:bg-blue-700 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <ThusoLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 dark:bg-gray-800 md:block"></div>
        <Link
          href="/dashboard/profile"
          className={clsx(
            "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-00 p-3 text-sm font-medium hover:bg-sky-600 hover:text-blue-600 hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3 ",
            {
              "bg-gray-100 dark:bg-gray-800 text-blue-600 ": pathname === "/dashboard/profile",
            }
          )}
        >
          <UserCircleIcon className="w-6 text-gray-500 dark:text-gray-300" />
          <p className="hidden md:block text-gray-900 dark:text-gray-100">Profile</p>
        </Link>
        <LogoutForm />
      </div>
    </div>
  );
}
