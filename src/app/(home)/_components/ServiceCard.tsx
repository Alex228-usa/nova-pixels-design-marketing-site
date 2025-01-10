"use client";

import Image from "next/image";
import Card from "@/components/common/card";
import arrowIcon from "@/assets/svg/arrow-icon.svg";
import ButtonBase from "@/components/common/button-base";
import { ServiceType } from "@/types/types.service";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
    service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const router = useRouter();
    const goToService = () => {
        router.push(`/services?id=${service.id}`);
    };
    return (
        <>
            <div className="flex lg:hidden flex-wrap gap-5 items-start group">
                <div className="contents flex-1 w-full">
                    <div className="flex-shrink-0 w-full lg:w-[555px] h-[350px]">
                        <Card
                            src={service.showcaseImage}
                            alt={service.title}
                            imgClassName="w-full h-full"
                            className="h-full"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-black text-3xl not-italic font-normal leading-[90%] tracking-[-1.2px]">
                        {service.description}
                    </h3>
                </div>
                <div className="flex-1 contents md:block">
                    <p className="text-gray-600 leading-relaxed">
                        {service.details}
                    </p>
                </div>
                <div className="flex-1">
                    <ButtonBase
                        title="Learn more"
                        type={"button"}
                        className="w-full"
                        onClick={goToService}
                    />
                </div>
            </div>
            <div className="hidden lg:flex justify-between flex-row gap-x-16 items-center">
                <div className="space-y-12 lg:space-x-0 flex flex-col justify-between basis-1/4">
                    <h3 className="text-black text-3xl not-italic font-normal leading-[90%] tracking-[-1.2px]">
                        {service.description}
                    </h3>

                    <div className="relative group w-fit" onClick={goToService}>
                        <div className="relative group cursor-pointer lg:w-[185px] lg:h-[185px] xl:w-[309px] xl:h-[309px] rounded-full overflow-hidden bg-gray-100">
                            <Image
                                src={service.thumbnail}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                <h2 className="text-white text-center text-xl not-italic font-semibold uppercase tracking-wider">
                                    {service.title}
                                </h2>
                                <p className="text-white text-center text-base not-italic font-semibold">
                                    Learn more
                                </p>
                            </div>
                        </div>
                        <button className="absolute right-0 md:-right-10 -top-10 bg-[#43D0D5] p-5 rounded-full transition-transform group-hover:scale-110">
                            <Image
                                src={arrowIcon}
                                alt="arrow icon"
                                className="h-4 w-4 2xl:h-8 2xl:w-8"
                            />
                        </button>
                        <div className="absolute bottom-0 left-0 w-[18px] h-[18px] bg-danger" />
                    </div>
                </div>
                <div className="flex flex-1 flex-col lg:flex-row gap-x-10 gap-y-6 xl:gap-y-0 2xl:gap-x-24 items-center lg:justify-end">
                    <div className="space-y-4 max-w-[300px]">
                        <div className="text-5xl font-light text-black">
                            {service.id}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {service.details}
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-[348px] lg:h-[276px] xl:w-[555px] xl:h-[440px]">
                        <Card
                            src={service.showcaseImage}
                            alt={service.title}
                            imgClassName="w-full h-full"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
