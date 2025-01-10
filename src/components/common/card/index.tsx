import Image from "next/image";
import { Props } from "./type";
import clsx from "clsx";

const Card = ({
  src,
  alt,
  title,
  className,
  imgClassName,
  titleClassName,
  fields,
  titleBoxClassName,
}: Props) => {
  return (
    <div className={clsx("relative", className)}>
      <Image
        src={src}
        alt={alt}
        className={clsx("object-cover rounded-[21px]", imgClassName)}
      />

      <div
        className={clsx("overflow-hidden mt-5 items-start", titleBoxClassName)}
      >
        <p
          className={clsx(
            "whitespace-nowrap font-superior overflow-hidden text-ellipsis text-black text-base not-italic font-[450] leading-[100%] tracking-[-0.64px] uppercase",
            titleClassName
          )}
        >
          {title}
        </p>
        <p className={clsx(titleClassName, "t-[5px]")}>
          {fields?.map((item: string, i) => (
            <span
              key={`field_cards_${i}`}
              className={clsx(
                "text-[#7F7F7F] text-xs font-superior font-medium leading-[normal] tracking-[-0.48px] ml-[5px] first:ml-0",
                ""
              )}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
