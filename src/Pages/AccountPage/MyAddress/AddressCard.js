import React from "react";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddressForm from "./AddressForm";

const AddressCard = () => {
  return (
    <div className="border rounded p-2 pb-4">
      {/* Head */}
      <div className="flex justify-between border-b">
        <div className="flex items-center gap-1">
          <span className="bg-primary/80 w-2.5 h-2.5 rounded-full"></span>
          <h1 className="font-medium text-primary">HOME</h1>
        </div>

        <div className="flex gap-2 items-center">
          {/* Edit Address */}
          <div>
            {/* The button to open modal */}
            <label
              htmlFor="editAddress"
              className="text-neutral/90 hover:text-primary duration-300 cursor-pointer text-lg"
            >
              <TbEdit />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="editAddress" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-10/12 max-w-4xl relative">
                <div className="flex justify-between items-center border-b pb-1 mb-4">
                  <h1 className="font-semibold text-lg">Edit Address</h1>
                  <label
                    htmlFor="editAddress"
                    className="cursor-pointer p-4 text-lg absolute right-2 top-2"
                  >
                    ✕
                  </label>
                </div>

                <AddressForm />
              </div>
            </div>
          </div>
          {/* Delete address */}
          <button className="hover:text-primary duration-300 text-neutral/90">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>

      <div className="mt-3 text-sm">
        <div className="flex gap-3">
          <h1 className="font-semibold w-1/5">Name:</h1>
          <h1 className="font-medium w-4/5">Jack Ma</h1>
        </div>
        <div className="flex gap-3 mt-1">
          <h1 className="font-semibold w-1/5">Number:</h1>
          <h1 className="font-medium w-4/5">0175486565</h1>
        </div>
        <div className="flex gap-3 mt-1 ">
          <h1 className="font-semibold w-1/5">Full Address:</h1>
          <h1 className="font-medium w-4/5">
            Barishal,Barishal - Agailjhara,Agailjhara Bazar,dr. goli, boro
            mogbazar, dhaka 1217
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
