"use client";

import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/assets/content/services";
import { useSearchParams } from "next/navigation";

export default function ServicesAccordion() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const data = services;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const handleAccordionChange = (value: string) => {
    const selectedService = data.find((service) => service.id === value);
    if (selectedService && bannerRef.current) {
      bannerRef.current.style.backgroundImage = `url(${selectedService.bannerImage.src})`;
    }
  };

  return (
    <div className="relative w-screen left-[50%] right-[50%] -mx-[50vw] ">
      <div className="grid lg:grid-cols-2 items-start">
        <div
          ref={bannerRef}
          className="relative aspect-square bg-cover bg-center transition-all duration-300 ease-in-out h-full w-[-webkit-fill-available]"
          style={{ backgroundImage: `url(${data[0].bannerImage.src})` }}
        />
        <div>
          <h2 className="text-center text-[clamp(3.125rem,-0.5102rem_+_17.2589vw,7.375rem)] md:text-[clamp(7.875rem,12.5625rem_+_-9.7656vw,6.3125rem)] lg:text-[clamp(5.3125rem,1.5625rem_+_5.8594vw,6.25rem)] xl:text-[clamp(6.25rem,-3.75rem_+_12.5vw,7.5rem)] 2xl:text-[clamp(7.5rem,-1.5rem_+_10vw,8.125rem)] font-unbounded font-normal lg:-my-1">
            SERVICES
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue={id ?? data[0].id}
            className="w-full"
            onValueChange={handleAccordionChange}
          >
            {data.map((service) => (
              <AccordionItem
                key={`services-accordion-${service.id}`}
                value={service.id}
                className="border-bd-gray first:border-t"
              >
                <AccordionTrigger className="flex justify-between hover:no-underline gap-[15px] items-start shrink-0 px-4 md:px-5 2xl:px-8 mx-auto">
                  <div className="flex justify-between w-full h-[70px]">
                    <span className="font-unbounded text-black text-lg lg:text-2xl not-italic font-normal leading-[100%] tracking-[-0.96px] uppercase">
                      {service.title}
                    </span>
                    <span className="font-unbounded text-black text-lg lg:text-2xl not-italic font-normal leading-[100%] tracking-[-0.96px] uppercase">
                      {service.id}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-6 px-4 md:px-5 2xl:px-8 mx-auto">
                  {Array.isArray(service.subServices) ? (
                    service.subServices.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-black text-lg not-italic font-semibold leading-[normal] tracking-[-0.72px]">
                          {item.title}
                        </h3>
                        <p className="text-black text-base not-italic font-normal leading-[normal] tracking-[-0.64px]">
                          {item.description}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-black text-base not-italic font-normal leading-[normal] tracking-[-0.64px]">
                      No sub-services available
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
