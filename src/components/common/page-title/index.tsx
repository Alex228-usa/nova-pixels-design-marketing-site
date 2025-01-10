import Image from "next/image";
import worksSvg from "@/assets/titles/works.svg";
import aboutSvg from "@/assets/titles/about-us.svg";
import ourPeople from "@/assets/titles/our-people.svg";
import contacts from "@/assets/titles/contacts.svg";
import { Props } from "./type";

const PageTitle = ({ title }: Props) => {
  let result = null;
  switch (title) {
    case "works":
      result = worksSvg;
      break;
    case "about-us":
      result = aboutSvg;
      break;
    case "contact":
      result = "";
      break;
    case "our-people":
      result = ourPeople;
      break;
    case "contacts":
      result = contacts;
      break;
    default:
      result = "";
      break;
  }
  return <Image src={result} alt={`title ${title}`} className="w-full" />;
};

export default PageTitle;
