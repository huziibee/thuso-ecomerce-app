"use client";

import useAuthUser from "@/app/hooks/use-auth-user";
import {
  ViewfinderCircleIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const user = useAuthUser();
  const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
      name: "Invoices",
      href: "/dashboard/invoices",
      icon: DocumentDuplicateIcon,
    },
    
    { name: "Track Order", href: "/dashboard/tester", icon: ViewfinderCircleIcon },
  ];

  const pathname = usePathname();

  if (user && user.isAdmin) {
    links.push({
      name: "Admin Area",
      href: "/dashboard/admins",
      icon: BuildingOfficeIcon,
    });
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-600 hover:text-blue-600 dark:hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 dark:bg-sky-700 text-blue-600 dark:text-blue-300": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6 text-gray-500 dark:text-gray-400" />
            <p className="hidden md:block text-gray-900 dark:text-gray-100">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
