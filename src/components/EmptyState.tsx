import { EmptyStateProps } from "@/app/types";
import { Bird, FileSearch, Telescope, Turtle } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyState = ({
  title,
  buttonLink,
  buttonText,
  search,
}: EmptyStateProps) => {
  return (
    <section className="flex-center size-full flex-col gap-3">
      <Bird
        color="#b13535"
        width={100}
        height={100}
        aria-details="Empty state"
      />
      <div className="flex-center w-full max-w-[254px] flex-col gap-3">
        <h1 className="text-16 text-center font-medium text-white-1">
          {title}
        </h1>
        {search && (
          <p className="text-16 text-center font-medium text-white-2">
            Try adjusting your search to find what you are looking for
          </p>
        )}
        {buttonLink && (
          <Button className="bg-red-1">
            <Link
              href={buttonLink}
              className="gap-1 flex items-center justify-center"
            >
              <Telescope
                color="#f4f0f0"
                width={20}
                height={20}
                aria-details="discover"
              />
              <h1 className="text-16 font-extrabold text-white-1">
                {buttonText}
              </h1>
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default EmptyState;
