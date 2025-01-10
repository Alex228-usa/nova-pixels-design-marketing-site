import ServicesAccordion from "./_components/ServicesAccordion";
import { Suspense } from "react";

const Services = () => {
  return (
    <Suspense>
      <ServicesAccordion />
    </Suspense>
  );
};

export default Services;
