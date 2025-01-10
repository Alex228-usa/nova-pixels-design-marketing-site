import { MENU } from "@/assets/content/menu";
import closeIcon from "@/assets/svg/close-icon.svg";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import Image from "next/image";
import { EMAIL } from "@/assets/content/common";
import Logo from "../logo";
import NoiseAnimation from "../noise-animation";

const MenuItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link href={href}>
      <DrawerClose className="text-black text-[26px] not-italic font-semibold leading-[90%] uppercase">
        [ {label} ]
      </DrawerClose>
    </Link>
  );
};

const MobileMenu = () => {
  return (
    <DrawerContent className="h-full border-none px-6 mt-0">
      <DrawerHeader className="flex justify-between items-center">
        <Logo imgClassName="h-[25px] w-auto lg:h-8" className="-mt-1" />
        <DrawerClose>
          <Image src={closeIcon} alt={"Close icon"} />
        </DrawerClose>
        <VisuallyHidden>
          <DialogTitle>Mobile Menu</DialogTitle>
        </VisuallyHidden>
        <VisuallyHidden>
          <DrawerDescription>Mobile Menu</DrawerDescription>
        </VisuallyHidden>
      </DrawerHeader>

      <nav className="flex mt-auto flex-col items-center justify-center space-y-10">
        {MENU.map((item) => (
          <MenuItem key={item.href} label={item.label} href={item.href} />
        ))}
      </nav>
      <DrawerFooter>
        <Link
          href={`mailto:${EMAIL}`}
          className="text-black text-center text-base not-italic font-[450] leading-[140%] tracking-[-0.32px]"
        >
          [ {EMAIL}]
        </Link>
      </DrawerFooter>
      <NoiseAnimation />
    </DrawerContent>
  );
};

export default MobileMenu;
