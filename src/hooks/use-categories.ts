import { services } from "@/assets/content/services";
import { works } from "@/assets/content/works";
import { CategoryType } from "@/types/type.category";

const useCategories = () => {
  const categories: CategoryType[] = services.map((category) => {
    const count = works.filter(
      (work) => work.categoryId === category.categoryId
    ).length;
    const value = category.categoryId;
    const label = category.title;

    return {
      value,
      label,
      count,
    };
  });

  return { categories };
};

export default useCategories;
