"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/svg/logo.svg";
import UnderlineText from "../common/underline-text";
import { usePathname } from "next/navigation";

import MobileMenu from "../common/mobile-menu";
import { DrawerTrigger } from "../ui/drawer";
import menuIcon from "@/assets/svg/menu-icon.svg";
import { MENU } from "@/assets/content/menu";
import Logo from "../common/logo";

// fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm
const Header = () => {
  return (
    <header className="z-[2]">
      <nav className="flex items-center justify-between px-4 pt-1 pb-7 max-w-1920 mx-auto">
        <Logo imgClassName="h-[25px] w-auto lg:h-8" />

        {MENU.map((item) => (
          <MenuItem key={item.href} href={item.href} label={item.label} />
        ))}

        <DrawerTrigger>
          <Image
            src={menuIcon}
            alt={"menu icon"}
            className="flex md:hidden pt-3"
          />
        </DrawerTrigger>

        <MobileMenu />
      </nav>
    </header>
  );
};

export const MenuItem = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className="hidden md:flex group pt-3 uppercase font-lt-superior font-semibold text-base"
    >
      <UnderlineText isActive={isActive}>{label}</UnderlineText>
    </Link>
  );
};

export default Header;
