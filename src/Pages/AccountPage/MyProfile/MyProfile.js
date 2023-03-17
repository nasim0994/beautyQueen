import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

const MyProfile = () => {
  const [profileImage, setProfileImage] = useState("");

  return (
    <div>
      <h1 className="font-semibold text-2xl">My Profile</h1>

      <div className="mt-3">
        {/* Output Profile */}
        <div className="bg-secondary/50 rounded-md lg:grid grid-cols-3 gap-6">
          <div className="bg-secondary rounded-md flex flex-col justify-center items-center py-2 text-base-100 font-medium">
            <div className="w-full flex justify-end pr-4">
              {/* The button to open modal */}
              <label htmlFor="my-modal-3" className="cursor-pointer">
                {/* <button>
                  <TbEdit className="text-xl" />
                </button> */}
                <TbEdit className="text-xl" />
              </label>

              {/* Photo Upload modal */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box p-0 relative text-neutral">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-outline btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h1 className="text-lg font-bold text-center bg-secondary/50 p-4">
                    Update Profile Photo
                  </h1>
                  <div className="p-4">
                    <ImageUploader
                      onFileAdded={(img) => setProfileImage(img)}
                      uploadIcon={
                        <MdOutlineFileUpload className="text-4xl text-neutral/80" />
                      }
                      style={{ border: "1px dashed #ddd" }}
                    />
                    <button className="w-28 py-1.5 text-base-100 bg-primary scale-[.98] hover:scale-[1] duration-300 mt-2 rounded">
                      <h1>Upload</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="https://www.gannett-cdn.com/presto/2018/09/10/USAT/8ac92bec-3802-41a7-aa7a-39c3fec5d79c-EPA_FILE_BELGIUM_ALIBABA_GROUP_COMPANY_INFORMATION_PEOPLE.JPG"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <h1 className="mt-2 font-semibold text-xl">Jack Ma</h1>
          </div>

          <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center text-center text-neutral py-5">
            <div className="border-r border-neutral/50">
              <h1 className="text-lg font-semibold">Balance</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div className="lg:border-r border-neutral/50">
              <h1 className="text-lg font-semibold">Point</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div className="border-r border-neutral/50">
              <h1 className="text-lg font-semibold">Voucher</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Followed Store</h1>
              <p className="font-medium">৳00</p>
            </div>
          </div>
        </div>

        {/* Input Profile */}

        <div className="grid lg:grid-cols-3 gap-4 bg-base-100 mt-6 p-4 rounded-md">
          <div className="border rounded-md p-4 col-span-2">
            <form action="">
              <div>
                <input
                  type="text"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4 "
                  defaultValue="Jack Ma"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4 bg-gray-100"
                  defaultValue="01618004406"
                  disabled
                />
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4"
                  defaultValue="jackma@gmail.com"
                  placeholder="Email"
                />
              </div>
              <div>
                <button className="text-center w-full bg-primary text-base-100 py-2 rounded scale-[1] hover:scale-[.99] duration-300">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
