import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";

const MyAddress = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl">Address Book</h1>

        {/* The button to open modal */}
        <label
          htmlFor="newAddress"
          className="hover:text-primary duration-300 cursor-pointer text-sm flex items-center"
        >
          <AiOutlinePlus className="text-primary" />
          <h1 className="mt-px font-medium">Add New Address</h1>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="newAddress" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-10/12 max-w-4xl relative">
            <div className="flex justify-between items-center border-b pb-1 mb-4">
              <h1 className="font-semibold text-lg">Edit Address</h1>
              <label
                htmlFor="newAddress"
                className="cursor-pointer p-4 text-lg absolute right-2 top-2"
              >
                ✕
              </label>
            </div>

            <AddressForm />
          </div>
        </div>
      </div>

      <div className="bg-base-100 p-4 shadow-lg rounded mt-3 min-h-[370px]">
        <div className="grid lg:grid-cols-2 gap-6">
          <AddressCard />
          <AddressCard />
        </div>
      </div>
    </div>
  );
};

export default MyAddress;
