"use client";

import { works } from "@/assets/content/works";
import Card from "@/components/common/card";
import CarouselBase, {
  CarouselItemBase,
} from "@/components/common/carousel-base";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MoreProductsSection = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <section>
      <Link
        href="/works"
        className="text-black font-unbounded block text-4xl 2xl:text-[50px] mt-14 2xl:mt-[120px] mb-6 2xl:mb-12 not-italic font-normal leading-[normal] uppercase"
      >
        {title}
      </Link>
      <div className="relative lg:w-screen lg:left-[50%] lg:right-[50%] lg:-mx-[50vw] lg:pl-6">
        <CarouselBase>
          {works.map((item, i) => {
            return (
              <CarouselItemBase
                key={"more_product" + i}
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/works/${item.id}`);
                }}
              >
                <Card
                  key={"more_product" + i}
                  src={item.image}
                  alt={item.title}
                  title={item?.title}
                  fields={item?.tags}
                  imgClassName={
                    "transition-all duration-300 w-[500px] h-[513px] lg:h-[593px]"
                  }
                />
              </CarouselItemBase>
            );
          })}
        </CarouselBase>
      </div>
    </section>
  );
};

export default MoreProductsSection;
