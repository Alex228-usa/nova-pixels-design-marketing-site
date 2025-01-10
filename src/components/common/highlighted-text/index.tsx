import clsx from "clsx";
import { Props } from "./type";

const HighlightedText = ({
  children,
  className,
  childClassName,
  cornerClassName,
}: Props) => {
  return (
    <span
      className={clsx(
        "p-1 inline-flex items-center justify-center w-fit mx-auto border border-cyan-300 relative",
        className
      )}
    >
      {/* Corner Elements */}
      <span
        className={clsx(
          "absolute -top-[2px] -left-[2px] w-1 h-1 bg-cyan-300",
          cornerClassName
        )}
      />
      <span
        className={clsx(
          "corner-element absolute -top-[2px] -right-[2px] w-1 h-1 bg-cyan-300 ",
          cornerClassName
        )}
      />
      <span
        className={clsx(
          "corner-element absolute -bottom-[2px] -left-[2px] w-1 h-1 bg-cyan-300",
          cornerClassName
        )}
      />
      <span
        className={clsx(
          "corner-element absolute -bottom-[2px] -right-[2px] w-1 h-1 bg-cyan-300",
          cornerClassName
        )}
      />

      {/* Main Border */}
      <span
        className={clsx(
          "text-black text-center text-xs md:text-sm lg:text-lg 2xl:text-[22px] not-italic",
          childClassName
        )}
      >
        {children}
      </span>
    </span>
  );
};

export default HighlightedText;
