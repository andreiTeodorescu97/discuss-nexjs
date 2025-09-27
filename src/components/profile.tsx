"use client";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div>
        From client: user is signed is as: {JSON.stringify(session.user)}
      </div>
    );
  }
  return <div>From client: not signed in</div>;
}
