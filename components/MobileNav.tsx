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
        <SheetContent side="left"
        className="border-none bg-white"
        >
          <Link className="mb-12 crusor-pointer items-center gap-1 px-4" href="/">
            <Image
             
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="horizon"
            />
            <h1 className="text-26 font-inm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
              {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <SheetClose asChild key={item.route}>
             <Link
                className={cn("mobilenav-sheet_close w-full ", { "bg-bank-gradient": isActive })}
                href={item.route}
                key={item.label}
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
          User
              </nav>
            </SheetClose>
          </div>

          Footer
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
