import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/svg/logo.svg";

const Logo = ({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) => {
  return (
    <Link href="/" aria-label="Nova Pixels Homepage" className={className}>
      <Image
        src={logo}
        width={120}
        height={40}
        alt="Nova Pixels Logo"
        className={clsx("h-[15px] md:h-6 w-auto", imgClassName)}
      />
    </Link>
  );
};

export default Logo;
