import React from "react";
import { BiCategory } from "react-icons/bi";
import categories from "../../../Data/categoryData";
import MobileCategoryItems from "./MobileCategoryItems";

const MobileCategory = ({ mobileCategoryToggle, setMobileCategoryToggle }) => {
  return (
    <>
      <div
        onClick={() => setMobileCategoryToggle(false)}
        className={`${
          !mobileCategoryToggle && "hidden"
        } w-full bg-[#11111151] fixed top-0 right-0 h-[100vh] z-40`}
      ></div>

      <div
        className={` ${
          mobileCategoryToggle
            ? "right-0 duration-300"
            : "-right-full duration-700"
        } z-40 p-4 fixed w-72 bg-base-100 top-0 h-full`}
      >
        <div className="flex gap-1 items-center border-b pb-3 mb-2">
          <BiCategory className="text-primary text-xl" />
          <h1 className="font-semibold">Product categories</h1>
        </div>

        <ul>
          {categories.map((category, i) => (
            <MobileCategoryItems
              key={i}
              category={category}
              setMobileCategoryToggle={setMobileCategoryToggle}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileCategory;
