"use client";

import clsx from "clsx";
import { photos } from "@/assets/content/photos";
import PeopleCard from "./PeopleCard";
import WaveAnimation from "@/components/common/wave-animation";

export const OurPeopleSection = ({ className }: { className?: string }) => {
    return (
        <section className={clsx(className)}>
            <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] py-16">
                <h2 className="text-center font-unbounded uppercase text-[clamp(2.6875rem,0.0144rem_+_13vw,5.9375rem)] whitespace-nowrap md:text-[clamp(5.9375rem,-0.0576rem_+_13.1579vw,7.8125rem)] lg:text-[clamp(7.8125rem,-0.0164rem_+_13.089vw,12.5rem)] max-2xl:text-[clamp(12.5rem,0.2332rem_+_12.828vw,15.25rem)] font-normal !leading-[0.8]">
                    Our People
                </h2>
                <WaveAnimation baseSpeed={0.5} width={100} />
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-16 items-center justify-center w-full h-full">
                {photos.map((photo, index) => {
                    return (
                        <PeopleCard
                            key={`human-being-${index}`}
                            photo={photo}
                            index={index}
                        />
                    );
                })}
            </div>
        </section>
    );
};
