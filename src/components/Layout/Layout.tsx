import { cn } from "../../lib/utils";

export default function Layout({ children, classes }: any) {
  return (
    <div className={cn("h-full px-4 pb-10 pt-28 lg:px-20 lg:pt-48", classes)}>
      {children}
    </div>
  );
}
