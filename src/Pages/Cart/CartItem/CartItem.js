import React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UseContext } from "../../../ContextApi/ContextProvider";

const cartItem = ({ product }) => {
  const { handelDeleteCart, handelDecreaseCart, handelIncreaseCart } =
    UseContext();

  const total = parseInt(product.price) * parseInt(product.quantity);

  return (
    <tr key={product.id} className="border-b text-neutral/80">
      <td className="p-4 ">
        <div className="w-max flex gap-2 items-center">
          <img
            src={product.thumbnail}
            alt="Apple Watch"
            className="w-14 h-14 rounded-full"
          />
          <Link to={`/products/${product.title}`}>
            <h3 className="text-lg text-neutral">
              {product.title.length > 30
                ? `${product.title.slice(0, 30)}...`
                : product.title}
            </h3>
          </Link>
        </div>
      </td>

      <td className="px-6 py-4 font-medium">
        <p className="w-max">
          ৳<span> {product.price}</span>
        </p>
      </td>

      <td className="px-6 py-4">
        <div className="w-max flex items-center gap-3">
          <button
            onClick={() => handelDecreaseCart(product)}
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiMinusCircle />
          </button>
          <div>
            <p className="w-14 border-2 border-neutral/80 text-neutral font-medium text-center rounded-lg py-px">
              {product.quantity}
            </p>
          </div>
          <button
            onClick={() => handelIncreaseCart(product)}
            className="text-2xl hover:text-neutral duration-200"
          >
            <FiPlusCircle />
          </button>
        </div>
      </td>

      <td className="px-6 py-4 font-medium">
        <p className="w-max">
          ৳<span> {total}</span>
        </p>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => handelDeleteCart(product)}
          className="font-medium text-sm text-red-600 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default cartItem;
