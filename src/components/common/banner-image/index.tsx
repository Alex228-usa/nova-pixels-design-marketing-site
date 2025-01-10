import Image from "next/image";
import { Props } from "./type";
import clsx from "clsx";

const BannerImage = ({ src, alt, srcVersions, className }: Props) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={800}
        className={clsx("object-cover h-full w-full", className)}
      />
      {srcVersions &&
        srcVersions.map((version) => (
          <Image
            key={version.alt}
            src={version.src}
            alt={version.alt}
            width={1400}
            height={800}
            className={clsx("object-cover w-full", version.className)}
          />
        ))}
    </>
  );
};

export default BannerImage;
