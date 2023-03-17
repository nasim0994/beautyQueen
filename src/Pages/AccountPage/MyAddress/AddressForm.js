import React from "react";

const AddressForm = () => {
  return (
    <form action="">
      <div className="grid sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">Full name</h1>
          </label>
          <div>
            <input
              type="text"
              name=""
              defaultValue="Jack Ma"
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">Phone Number</h1>
          </label>
          <div>
            <input
              type="text"
              name=""
              defaultValue="0176466495"
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">City</h1>
          </label>
          <div>
            <select
              name=""
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Dhaka">Rajshahi</option>
              <option value="Dhaka">Khulna</option>
              <option value="Dhaka">Chattogram</option>
              <option value="Dhaka">Rangpur</option>
              <option value="Dhaka">Sylhet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">Region</h1>
          </label>
          <div>
            <select
              name=""
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Dhaka">Rajshahi</option>
              <option value="Dhaka">Khulna</option>
              <option value="Dhaka">Chattogram</option>
              <option value="Dhaka">Rangpur</option>
              <option value="Dhaka">Sylhet</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">Area</h1>
          </label>
          <div>
            <select
              name=""
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Dhaka">Rajshahi</option>
              <option value="Dhaka">Khulna</option>
              <option value="Dhaka">Chattogram</option>
              <option value="Dhaka">Rangpur</option>
              <option value="Dhaka">Sylhet</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">Address</h1>
          </label>
          <div>
            <input
              type="text"
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-4">
        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">
              Building / House No / Floor / Street
            </h1>
          </label>
          <div>
            <input
              type="text"
              name=""
              defaultValue="Jack Ma"
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="" className="text-sm">
            <h1 className="font-medium">
              Colony / Suburb / Locality / Landmark
            </h1>
          </label>
          <div>
            <input
              type="text"
              name=""
              defaultValue="0176466495"
              className="w-full border rounded px-3 py-1.5 outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-center font-medium">
          Select a label for effective delivery:
        </h1>

        <div className="flex items-center gap-4 uppercase w-max mx-auto mt-2">
          <div>
            <button className="border rounded px-6 py-1.5 font-medium hover:border-primary hover:text-primary duration-300">
              Home
            </button>
          </div>
          <button className="border rounded px-6 py-1.5 font-medium hover:border-primary hover:text-primary duration-300">
            Office
          </button>
          <button className="border rounded px-6 py-1.5 font-medium hover:border-primary hover:text-primary duration-300">
            Others
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <button
          type="submit"
          className="px-10 py-1.5 bg-primary text-base-100 rounded scale-[.97] hover:scale-[1] duration-500"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
