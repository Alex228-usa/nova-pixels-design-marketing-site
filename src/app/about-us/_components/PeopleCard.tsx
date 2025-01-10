import { PersonType } from "@/types/types.people";
import Card from "@/components/common/card";

interface PeopleCardProps {
  photo: PersonType;
  index: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ photo, index }) => {
  const row = Math.ceil((index + 1) / 2); // Each row has 2 numbers

  return (
    <div className={`flex relative ${row % 2 === 0 ? "lg:justify-end" : ""} `}>
      <div className={`flex relative w-full lg:w-fit`}>
        <div
          className={`flex lg:even:rotate-6 ${
            index % 2 === 0 ? "lg:-rotate-6" : "lg:ml-4 lg:rotate-6"
          } w-full h-[400px] md:h-[430px] lg:w-[280px] lg:h-[370px] 2xl:h-[400px] 2xl:w-[320px] max-2xl:h-[442px] max-2xl:w-[354px] rounded-lg overflow-hidden`}
        >
          <Card
            src={photo.src}
            alt={photo.alt}
            imgClassName="h-full w-full"
            className={"h-full w-full"}
          />
        </div>
        <span className="absolute font-lt-superior top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-[45.877px] not-italic font-normal leading-[normal] uppercase">
          {photo.name}
        </span>
      </div>
    </div>
  );
};

export default PeopleCard;
