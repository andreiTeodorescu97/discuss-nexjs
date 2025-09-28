"use client";
import { Button } from "@nextui-org/react";
import { signOut } from 'next-auth/react';

export default function ClientSignOutButton() {
  return (
    <div className="p-4">
      {/* <form action={auth.signOut}> */}
        <Button onClick={() => signOut()}>
          Sign Out
        </Button>
      {/* </form> */}
    </div>
  );
}
