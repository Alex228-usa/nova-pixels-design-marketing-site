"use client";

import PageTitle from "@/components/common/page-title";
import useCategories from "@/hooks/use-categories";
import FilterTabs from "./_components/filter-tabs";
import PortfolioCard from "./_components/portfolio-card";
import SubTitle from "./_components/sub-title";
import { works } from "@/assets/content/works";
import WorksBanner from "@/components/common/banners/works-banner";

const WorksPage = () => {
  const { categories } = useCategories();
  return (
    <div>
      <PageTitle title="works" />
      <WorksBanner />

      <div className="py-10 md:py-20 2xl:py-32">
        <SubTitle />
      </div>

      <FilterTabs categories={categories} defaultTab="all">
        {({ selectedTab }) =>
          works
            .filter(
              (work) => work.categoryId === selectedTab || selectedTab === "all"
            )
            .map((item, index) => (
              <PortfolioCard
                key={`portfolio-card-${index}`}
                index={index}
                item={item}
              />
            ))
        }
      </FilterTabs>
    </div>
  );
};

export default WorksPage;
