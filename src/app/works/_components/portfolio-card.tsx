import Card from "@/components/common/card";
import clsx from "clsx";
import { x, xClsH, xClsW, yClsH, yClsW } from "./constant";
import Link from "next/link";
import { WorkType } from "@/types/type.works";

const PortfolioCard = ({ index, item }: { index: number; item: WorkType }) => {
  const remains = index % 4;
  const imgClassName = x.includes(remains)
    ? `${xClsW} ${xClsH}`
    : `${yClsW} ${yClsH}`;
  return (
    <Link
      href={`/works/${item.id}`}
      className={index % 2 === 0 ? "lg:mr-auto" : ""}
      data-observe="true"
    >
      <Card
        src={item.image}
        alt={item.title}
        title={item?.title}
        fields={item?.tags}
        imgClassName={clsx("transition-all duration-300", imgClassName)}
        titleClassName={x.includes(remains) ? xClsW : yClsW}
      />
    </Link>
  );
};

export default PortfolioCard;
