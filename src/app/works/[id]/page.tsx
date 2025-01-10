import { Metadata } from "next";

import { works } from "@/assets/content/works";
import { WorkType } from "@/types/type.works";
import SubTitleSection from "./_components/sub-title-section";
import AboutProjectSection from "./_components/about-project-section";
import ProcessSection from "./_components/process-section";
import ResultSection from "./_components/result-section";
import MoreProductsSection from "./_components/more-products-section";
import OtherResultsSection from "./_components/other-section";

interface Params {
  id: string;
}

interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Portfolio Item ${id}`,
  };
}

export const runtime = "edge";

const title = "More works";
export default async function SinglePortfolioPage({ params }: Props) {
  const { id } = await params;
  const portfolio = works.find((item) => item.id === id) ?? {};
  const project = (portfolio as WorkType)?.project ?? {};

  return (
    <div>
      <SubTitleSection url={project.hero.url} alt={project.hero.alt} />
      <AboutProjectSection {...project.about} />
      <ProcessSection {...project.process} />
      <ResultSection {...project.result} />
      <OtherResultsSection
        url={project.lastHero.url}
        alt={project.lastHero.alt}
      />
      <MoreProductsSection title={title} />
    </div>
  );
}
