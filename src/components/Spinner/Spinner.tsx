import { cn } from "../../lib/utils";
import LoaderSvg from "../../svg/LoaderSvg";

export const Spinner = ({ classes }: any) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-3xl bg-transparent backdrop-blur-md lg:rounded-none",
        classes,
      )}
    >
      <LoaderSvg />
    </div>
  );
};
