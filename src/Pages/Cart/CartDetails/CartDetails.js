import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartDetails = ({ cart }) => {
  const subTotal = cart?.reduce(
    (price, item) => price + item.quantity * parseInt(item.price),
    0
  );

  const totalDiscountPrice = cart?.reduce(
    (price, item) =>
      price +
      item.quantity *
        parseInt(item.price - (item.price * item.discountPercentage) / 100),
    0
  );

  const shipping = 50;
  const tax = 0;
  let discount = subTotal - totalDiscountPrice;
  const grandTotal = subTotal + tax + parseInt(shipping) - discount;

  const couponCode = "pmall100";
  const [couponDiscount, setCouponDiscount] = useState(false);

  const handelCouponCode = () => {
    const couponValue = document.getElementById("couponBox").value;
    const value = couponValue.toLowerCase();

    if (value === couponCode.toLowerCase()) {
      setCouponDiscount(true);
      document.getElementById("couponBox").value = "";
      toast.success("Coupon Add Success", {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.error("wrong Coupon Code", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="mt-8 lg:mt-0 px-4 pt-8 pb-5 shadow-lg text-neutral">
      {/* voucher */}
      <div className="border-b pb-4 mb-4">
        <h1 className="font-medium mb-2">Discounts Coupon</h1>
        <div className="flex gap-2 items-center text-sm">
          <input
            type="text"
            placeholder="Type Code"
            className="w-full border rounded px-3 py-1.5 outline-none font-normal placeholder:opacity-60"
            id="couponBox"
          />
          <button
            onClick={() => handelCouponCode(discount)}
            className="w-40 py-1.5 bg-primary text-base-100 rounded"
            disabled={couponDiscount && true}
          >
            Apply
          </button>
        </div>
      </div>

      {/* Cart Details */}
      <div className="flex justify-between items-center border-b border-neutral text-lg mb-4">
        <h1 className="font-medium">SubTotal</h1>
        <p>
          ৳<span> {subTotal}</span>
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
          <p>Tax</p>
          <p>
            ৳<span> 00</span>
          </p>
        </div>

        <div className="flex justify-between items-center border-b py-1">
          <p>Discount</p>
          <p className="text-primary">
            - ৳<span> {couponDiscount ? discount + 100 : discount}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-lg mt-2 font-semibold">
        <h1>Grand Total</h1>
        <p>
          ৳<span> {grandTotal}</span>
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
