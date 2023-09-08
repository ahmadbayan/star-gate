import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="flex min-h-full flex-col">
      <Outlet />
    </div>
  );
}
