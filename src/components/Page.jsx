import { useLocation } from "react-router-dom";
import { BG_COLOR_PAGES } from "../config";

const Page = ({children}) => {

  const { pathname } = useLocation();
  const bgColor = BG_COLOR_PAGES.includes(pathname);

  return (
    <div className={`w-full min-h-full overflow-hidden ${bgColor ? "bg-gradient-to-b from-pink to-orange" : "bg-white"}`}>
      <div className="w-full max-w-5xl sm:px-20 max-sm:px-10 pt-40 sm:pb-80 max-sm:pb-[400px] mx-auto">
        {children}
      </div>
    </div>
  );
}

export default Page;
