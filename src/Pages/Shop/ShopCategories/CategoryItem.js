import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <li>
      <Link className="hover:text-primary duration-300 py-2">{item.title}</Link>
    </li>
  );
};

export default CategoryItem;
