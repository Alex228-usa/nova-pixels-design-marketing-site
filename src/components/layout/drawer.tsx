import { Drawer } from "@/components/ui/drawer";

const DrawerLayout = ({ children }: { children: React.ReactNode }) => {
  return <Drawer>{children}</Drawer>;
};

export default DrawerLayout;
