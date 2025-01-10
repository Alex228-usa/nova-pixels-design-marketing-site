import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import arrowIcon from "@/assets/svg/arrow-icon.svg";

const ButtonBase = ({
  title = "Button",
  className,
  btnClassName,
  type,
  arrowClassName,
  disabled,
  onClick,
}: {
  title: string;
  className?: string;
  btnClassName?: string;
  arrowClassName?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  onClick?: any;
}) => {
  return (
    <div className="relative px-4">
      <div
        className={clsx(
          "flex items-center justify-center w-full p-2 bg-tiffany ",
          className
        )}
      >
        <Button
          type={type}
          className={clsx(
            "relative z-10 w-full py-4 px-6 text-black text-center text-base not-italic uppercase bg-transparent hover:bg-transparent",
            btnClassName
          )}
          disabled={disabled}
          onClick={onClick}
        >
          {title}
          <div className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ml-4">
            <Image
              src={arrowIcon}
              alt="arrow icon"
              className={clsx("h-4 w-4 ", arrowClassName)}
            />
          </div>
        </Button>
        <div className="absolute w-full flex justify-between h-full left-0">
          <div className="h-full py-2">
            <div className="border border-tiffany bg-tiffany w-2 py-2 h-full ml-2">
              <div className="border border-tiffany bg-tiffany w-2 h-full -ml-2"></div>
            </div>
          </div>
          <div className="h-full py-2">
            <div className="border border-tiffany bg-tiffany w-2 py-2 h-full mr-2">
              <div className="border border-tiffany bg-tiffany w-2 h-full ml-[7px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonBase;
