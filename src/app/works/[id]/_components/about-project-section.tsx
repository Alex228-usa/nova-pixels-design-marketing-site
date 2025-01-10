import { WorkAboutType } from "@/types/type.works";
import { xClsH, xClsW, y, yClsH, yClsW } from "./constant";
import Card from "@/components/common/card";
import clsx from "clsx";

const AboutProjectSection = (data: WorkAboutType) => {
  const { description, details, featuredImage } = data;
  return (
    <section>
      <div
        className={
          "flex flex-col md:flex-row justify-evenly items-start gap-8 mt-8"
        }
      >
        <div>
          <div className="prose prose-gray max-w-96">
            <p className=" font-lt-superior text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="text-end space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              LINE OF BUSINESS
            </h3>
            <p className="text-gray-900">{details.lineOfBusiness}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">PHOTOS</h3>
            <p className="text-gray-900">{details.photos}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">WE DELIVERED</h3>
            <p className="text-gray-900">
              {details.deliveredServices.join(" / ")}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-[120px] gap-[18px] sm:grid-cols-2 md:flex md:flex-wrap w-full lg:gap-y-20">
        {featuredImage.map((item, i) => {
          const remains = i % 2;
          const imgClassName = y.includes(remains)
            ? `${xClsW} ${xClsH}`
            : `${yClsW} ${yClsH}`;

          return (
            <>
              {i === 2 ? (
                <div className=" mx-auto w-full" key={`about_the_project_${i}`}>
                  <Card
                    src={item.url}
                    alt={item.alt}
                    imgClassName={
                      "transition-all duration-300 w-full md:max-w-[400px] lg:max-w-[565px] 2xl:max-w-[840px]  max-2xl:max-w-[1160px] h-[350px] md:h-[239px] lg:h-[336px] 2xl:h-[500px] max-2xl:h-[691px]"
                    }
                    className={"w-full flex justify-center"}
                  />
                </div>
              ) : (
                <Card
                  key={`about_the_project_odd_${i}`}
                  src={item.url}
                  alt={item.alt}
                  imgClassName={clsx(
                    "transition-all duration-300",
                    imgClassName
                  )}
                  className={[0, 3].includes(i) ? "sm:mr-auto" : ""}
                />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default AboutProjectSection;
