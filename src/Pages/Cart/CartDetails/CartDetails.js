import React from "react";
import { Link } from "react-router-dom";

const CartDetails = ({ cart }) => {
  const shipping = 50;
  const subTotal = cart?.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );
  const tax = 0;
  const discount = 0;
  const grandTotal = subTotal + discount + tax + parseInt(shipping);

  return (
    <div className="mt-8 lg:mt-0 px-4 pt-10 pb-5 shadow-lg text-neutral">
      <div className="flex justify-between items-center border-b border-neutral text-xl mb-4">
        <p>SubTotal</p>
        <p>
          ৳<span> {subTotal}.00</span>
        </p>
      </div>

      <div className="text-neutral/90">
        <div className="flex justify-between items-center border-b py-1">
          <p>Shipping</p>
          <p>
            ৳<span> {shipping}</span>
          </p>
        </div>

        <div className="flex justify-between items-center border-b py-1">
          <p>Discount</p>
          <p>
            ৳<span> 00</span>
          </p>
        </div>

        <div className="flex justify-between items-center border-b py-1">
          <p>Tax</p>
          <p>
            ৳<span> 00</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg mt-2">
        <p>Grand Total</p>
        <p>
          ৳<span> {grandTotal}.00</span>
        </p>
      </div>

      <div className="my-2 mt-8">
        <Link
          to="/checkout"
          className="block text-center bg-primary text-base-100 p-2 font-semibold text-sm rounded scale-[.98] hover:scale-[1] duration-300"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartDetails;
