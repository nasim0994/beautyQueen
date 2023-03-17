import React from "react";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiOutlineGift } from "react-icons/ai";

const CouponsVoucher = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl"> Coupons Voucher</h1>

      <div className="bg-base-100 p-4 rounded mt-3 shadow-lg min-h-80">
        <Tabs activeTab="1" className="text-sm text-start mt-5 justify-start">
          <Tab title="VOUCHER" className="mr-4">
            <div className="mt-3 flex justify-center items-center h-60">
              <div className="text-center">
                <div className="border border-neutral border-dashed w-20 h-20 flex justify-center items-center rounded-full mx-auto">
                  <FaMoneyBillWave className="text-xl" />
                </div>
                <h2 className="text-xl font-medium mt-4">
                  There are no vouchers yet
                </h2>
              </div>
            </div>
          </Tab>
          <Tab title="FREE GIFT">
            <div className="mt-3 flex justify-center items-center h-60">
              <div className="text-center">
                <div className="border border-neutral border-dashed w-20 h-20 flex justify-center items-center rounded-full mx-auto">
                  <AiOutlineGift className="text-xl" />
                </div>
                <h2 className="text-xl font-medium mt-4">
                  Sorry! No Gift exits right now
                </h2>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default CouponsVoucher;
