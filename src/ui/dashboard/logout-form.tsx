"use client";

import { PowerIcon } from "@heroicons/react/24/outline";
import { handleSignOut } from "@/lib/cognitoActions";

export default function LogoutForm() {
  return (
    <form action={handleSignOut}>
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-600 hover:text-blue-600 dark:hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6 text-gray-500 dark:text-gray-400" />
        <div className="hidden md:block text-gray-900 dark:text-gray-100">Sign Out</div>
      </button>
    </form>
  );
}
