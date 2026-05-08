import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NewTube",
  description: "Signin or Signup to continue to NewTube",
};
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        {children}
    </div>
  );
};

export default Layout;