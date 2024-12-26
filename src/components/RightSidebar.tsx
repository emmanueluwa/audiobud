"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  const { user } = useUser();
  return (
    <section className="right_sidebar text-white-1">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1">
              human
              <ChevronsRight
                aria-details="link taking you to profile page"
                color="#b92727"
              />
            </h1>
          </div>
        </Link>
      </SignedIn>
    </section>
  );
};

export default RightSidebar;
