'use client';

import useAuthUser from "@/app/hooks/use-auth-user";

export default function Dashboard() {

  const user = useAuthUser();

  return <div className="flex"><h1>
Welcome back, {user?.name ? user.name  : "User"}
    </h1>
    <p></p>
    </div>;
}
