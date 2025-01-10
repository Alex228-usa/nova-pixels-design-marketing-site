import ListItem from "@/components/common/list-item";
import clsx from "clsx";

const advantages = [
  {
    id: "01",
    title: "WEB & APP DESIGN",
    description:
      "We are committed to delivering unique and impactful designs that push creative boundaries",
  },
  {
    id: "02",
    title: "UNIFIED EXPERTISE",
    description:
      "We believe great design is achieved by listening, understanding, and partnering closely with our clients",
  },
  {
    id: "03",
    title: "TOTAL TRANSPARENCY",
    description:
      "Our work prioritizes seamless user experiences, ensuring that every project is as functional as it is beautiful",
  },
  {
    id: "04",
    title: "TAILORED CREATIVITY",
    description:
      "We specialize in data-driven design, diving deep into historical data analysis to guide our creative decisions and ensure impactful, results-oriented outcomes",
  },
  {
    id: "05",
    title: "AFFORDABLE EXCELLENCE",
    description:
      "We specialize in data-driven design, diving deep into historical data analysis to guide our creative decisions and ensure impactful, results-oriented outcomes",
  },
  {
    id: "06",
    title: "DATA-DRIVEN DESIGN",
    description:
      "We specialize in data-driven design, diving deep into historical data analysis to guide our creative decisions and ensure impactful, results-oriented outcomes",
  },
];

export const AdvantagesSection = ({ className }: { className?: string }) => {
  return (
    <section className={clsx("w-full", className)}>
      <h2 className="text-black text-2xl text-[50px] not-italic font-normal leading-[normal] uppercase">
        our advantages
      </h2>
      <div className="mt-[50px]">
        {advantages.map((advantage) => (
          <ListItem
            key={advantage.id}
            order={advantage.id}
            title={advantage.title}
            description={advantage.description}
          />
        ))}
      </div>
    </section>
  );
};
