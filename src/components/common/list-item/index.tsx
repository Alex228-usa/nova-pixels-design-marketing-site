import { Props } from "./type";

const ListItem = ({ order, title, description }: Props) => {
  return (
    <div className="grid md:grid-cols-[1fr,2fr,auto] min-h-[102px] 2xl:min-h-[120px] items-start border-t border-gray-200 pt-4 last:border-b pb-4">
      <h3 className="text-black text-base max-w-[350px] 2xl:text-2xl not-italic font-semibold leading-[100%] tracking-[-0.96px] uppercase">
        <span className="text-[#999] text-sm md:hidden not-italic font-[450] leading-[100%] uppercase mr-1">
          {order}
        </span>
        {title}
      </h3>
      <p className="text-black text-sm 2xl:text-base not-italic font-normal leading-[normal] mt-4 md:mt-0 max-w-[526px]">
        {description}
      </p>
      <span className="hidden md:inline-block text-black text-sm 2xl:text-xl not-italic font-[450] leading-[100%] uppercase">
        {order}
      </span>
    </div>
  );
};

export default ListItem;
