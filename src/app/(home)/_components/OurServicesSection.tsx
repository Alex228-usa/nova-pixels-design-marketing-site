import ServiceCard from "./ServiceCard";
import { services } from "@/assets/content/services";

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div>
        <h2 className="text-4xl font-bold mb-16 font-unbounded">
          OUR SERVICES
        </h2>
        <div className="space-y-10 2xl:space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={`home-services-${index}`} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
