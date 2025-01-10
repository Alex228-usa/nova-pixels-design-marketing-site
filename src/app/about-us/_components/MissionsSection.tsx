import ListItem from "@/components/common/list-item";
import clsx from "clsx";

const missions = [
  {
    id: "01",
    title: "CREATIVITY AND INNOVATION",
    description:
      "We are committed to delivering unique and impactful designs that push creative boundaries",
  },
  {
    id: "02",
    title: "COLLABORATION AND COMMUNICATION",
    description:
      "We believe great design is achieved by listening, understanding, and partnering closely with our clients",
  },
  {
    id: "03",
    title: "USER-CENTRIC DESIGN",
    description:
      "Our work prioritizes seamless user experiences, ensuring that every project is as functional as it is beautiful",
  },
  {
    id: "04",
    title: "DATA-DRIVEN DESIGN",
    description:
      "We specialize in data-driven design, diving deep into historical data analysis to guide our creative decisions and ensure impactful, results-oriented outcomes",
  },
];

export const MissionsSection = ({ className }: { className?: string }) => {
  return (
    <section className={clsx("w-full", className)}>
      <h2 className="text-black text-2xl text-[50px] not-italic font-normal leading-[normal] uppercase">
        OUR MISSION
      </h2>
      <div className="mt-[50px]">
        {missions.map((mission) => (
          <ListItem
            key={mission.id}
            order={mission.id}
            title={mission.title}
            description={mission.description}
          />
        ))}
      </div>
    </section>
  );
};
