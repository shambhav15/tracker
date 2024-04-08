"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
// import { ModeToggle } from "@/components/themeToggle";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { Button, DropdownMenu } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { user, isLoading } = useKindeBrowserClient();

  const links = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 justify-around w-full border-b mb-5 px-5 py-4 items-center">
      <div className="flex gap-6 items-center">
        <Link className="flex  p-2  items-center" href="/">
          <AiFillBug size={25} color="orange" />
        </Link>
        <ul className="flex space-x-5">
          {links.map((link) => (
            <li
              className={classnames({
                "text-zinc-900 dark:text-zinc-100": currentPath === link.href,
                "text-zinc-400": currentPath !== link.href,
                "hover:text-zinc-300 transition-colors duration-300 flex": true,
              })}
              key={link.href}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        {/* <ModeToggle /> */}
        {user ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              {user?.picture && (
                <Image
                  src={user?.picture}
                  alt="user profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>{user?.given_name}</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="violet">
                <Link href="/profile">Profile</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item color="violet">
                <LogoutLink>Sign out</LogoutLink>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        ) : (
          <>
            {isLoading ? (
              <Skeleton width="4rem" height="2.5rem" />
            ) : (
              <Button color="violet" className="">
                <LoginLink>Sign in</LoginLink>
              </Button>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
