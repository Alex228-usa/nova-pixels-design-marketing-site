import PageTitle from "@/components/common/page-title";
import { WelcomeTextSection } from "./_components/WelcomeTextSection";
import { OurPeopleSection } from "./_components/OurPeopleSection";
import { FounderSayingSection } from "./_components/FounderSayingSection";
import { MissionsSection } from "./_components/MissionsSection";

export default function About() {
  return (
    <>
      <PageTitle title="about-us" />
      <WelcomeTextSection className={"mt-7 md:mt-14 2xl:mt-24"} />
      <OurPeopleSection />
      <FounderSayingSection className={"mt-24"} />
      <MissionsSection />
    </>
  );
}
