"use client";

import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="crusor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white flex flex-col h-full"
        >
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>

          <Link
            className="mb-12 cursor-pointer items-center gap-1 px-4"
            href="/"
          >
            <Image src="/icons/logo.svg" width={34} height={34} alt="horizon" />
            <h1 className="text-26 font-inm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="flex-1 overflow-y-auto">
            <nav className="flex flex-col gap-6 pt-16 text-black">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      className={cn("mobilenav-sheet_close w-full px-4 py-2", {
                        "bg-bank-gradient": isActive,
                      })}
                      href={item.route}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "!text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>

          <Footer user={user} type="mobile" />
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
