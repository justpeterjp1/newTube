import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "NewTube studio",
  description: "Design and upload your own videos with responsive thumbnails and gifs",
};
interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StudioLayout>
      {children}
    </StudioLayout>
  );
};

export default Layout;
