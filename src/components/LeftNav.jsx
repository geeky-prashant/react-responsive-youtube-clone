import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectedCategories, setSelectedCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategories(name);
      case "home":
        return setSelectedCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-1" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories?.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item?.name}
                icon={item?.icon}
                action={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategories === item?.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">
          Made with ❤️ by{" "}
          <Link
            to="https://geekyprashant.com"
            target="_blank"
            className="text-white/[0.6]"
          >
            Geeky Prashant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
