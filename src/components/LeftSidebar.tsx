"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LeftSidebar = () => {
  const pathname = usePathname();
  const route = useRouter();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/images/audio_buddy.png"
            alt="logo"
            width={23}
            height={27}
          />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            AudioBud
          </h1>
        </Link>

        {sidebarLinks.map(({ route_name, label, image }) => {
          const isActive =
            pathname === route_name || pathname.startsWith(`${route}/`);

          return (
            <Link
              key={route_name}
              href={route_name}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                { "bg-nav-focus border-r-4 border-red-1": isActive }
              )}
            >
              {image}
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
