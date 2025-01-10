import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { encodedUnderlineSvg } from "../svg";
import clsx from "clsx";

export const TabsCustom = ({
  children,
  defaultTab,
  onValueChange,
}: {
  children: any;
  defaultTab: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <Tabs
      defaultValue={defaultTab}
      onValueChange={onValueChange}
      className="w-full"
    >
      {children}
    </Tabs>
  );
};

export const TabsListCustom = ({ children }: { children: React.ReactNode }) => {
  return (
    <TabsList className="flex h-auto justify-start gap-14 lg:gap-24 max-2xl:gap-36 overflow-x-auto scrollbar-none border-none bg-transparent mb-7">
      {children}
    </TabsList>
  );
};

export const TabsTriggerCustom = ({
  value,
  count,
  label,
  className,
}: {
  value: string;
  count: number;
  label: string;
  className?: string;
}) => {
  return (
    <TabsTrigger
      key={value}
      value={value}
      className={clsx(
        "group font-superior border-none bg-transparent px-0 py-2 text-base font-normal text-black data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:shadow-none relative",
        className
      )}
      style={
        {
          "--underline-svg": `url("data:image/svg+xml,${encodedUnderlineSvg}")`,
        } as React.CSSProperties
      }
    >
      {label} <span className="ml-1 text-gray-500">[{count}]</span>
      <span
        className={`absolute bottom-[0] left-0 w-full h-[8px] bg-no-repeat bg-left bg-[length:100%] opacity-0 group-data-[state=active]:opacity-100`}
        style={{ backgroundImage: "var(--underline-svg)" }}
      ></span>
    </TabsTrigger>
  );
};

export const TabsContentCustom = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  return (
    <TabsContent key={value} value={value} className="mt-0 p-0 w-full">
      {children}
    </TabsContent>
  );
};
