"use client";

import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import ClientSignOutButton from "./client-signout-button";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;

  if(session.status === "loading"){
    authContent = <div>Loading...</div>;
  }
  else if (session.data?.user) {
    authContent = (
      <div>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""}></Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <ClientSignOutButton />
          </PopoverContent>
        </Popover>
      </div>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
