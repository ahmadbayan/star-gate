import CircleSolidSvg from "../../svg/CircleSolidSvg";
import CircleOutlineSvg from "../../svg/CircleOutlineSvg";
export const NavigationDot = ({ isActive, onClick }: any) => {
  return (
    <div className="mx-1" onClick={onClick}>
      {isActive ? (
        <CircleSolidSvg classes="w-3 h-3" />
      ) : (
        <CircleOutlineSvg classes="w-3 h-3" />
      )}
    </div>
  );
};
