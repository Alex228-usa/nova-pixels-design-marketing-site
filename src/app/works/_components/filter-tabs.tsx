"use client";

import React, { useMemo, useCallback, useState } from "react";
import { CategoryType } from "@/types/type.category";
import {
  TabsContentCustom,
  TabsCustom,
  TabsListCustom,
  TabsTriggerCustom,
} from "@/components/common/tabs-custom";

interface FilterTabsProps {
  categories: CategoryType[];
  defaultTab: string;
  children: (props: { selectedTab: string }) => React.ReactNode;
}

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  defaultTab,
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleValueChange = useCallback((value: string) => {
    setSelectedTab(value);
  }, []);

  const totalCount = useMemo(() => {
    return categories.reduce((sum, item) => sum + item.count, 0);
  }, [categories]);

  const tabsList = useMemo(() => {
    const allTab = (
      <TabsTriggerCustom
        key="all"
        value="all"
        count={totalCount}
        label="All"
        className="uppercase"
      />
    );

    const categoryTabs = categories.map((category) => (
      <TabsTriggerCustom
        key={category.value}
        value={category.value}
        count={category.count}
        label={category.label}
        className="uppercase"
      />
    ));

    return [allTab, ...categoryTabs];
  }, [categories, totalCount]);

  return (
    <TabsCustom defaultTab={defaultTab} onValueChange={handleValueChange}>
      <TabsListCustom>{tabsList}</TabsListCustom>
      <TabsContentCustom value={selectedTab}>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:flex lg:flex-wrap w-full lg:gap-y-20">
          {children({ selectedTab })}
        </div>
      </TabsContentCustom>
    </TabsCustom>
  );
};

export default React.memo(FilterTabs);
