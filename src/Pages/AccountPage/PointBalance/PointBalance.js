import React from "react";
import { BiHistory } from "react-icons/bi";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";

const PointBalance = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">My Point/Balance</h1>

      <div className="mt-3 ">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="rounded-md shadow-lg overflow-hidden">
            <div className="rounded-md bg-secondary/20 py-4">
              <div className="border-b border-secondary pb-3">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src="https://jachai.com/_next/image?url=%2Fwallet.png&w=32&q=75"
                    alt=""
                    className="w-5"
                  />
                  <h1 className="font-bold text-xl text-title mt-1">Balance</h1>
                </div>
              </div>

              <div className="mt-2 text-center">
                <h1 className="text-xl font-bold text-primary">BDT 0</h1>
                <div className="flex gap-1 items-center justify-center border rounded-full px-4 py-1.5 mt-2 border-secondary w-max mx-auto">
                  <BiHistory className="text-secondary text-2xl" />
                  <h1 className="font-semibold">History</h1>
                </div>
              </div>
            </div>
            <div className="bg-base-100 p-4">
              <Tabs activeTab="1" className="text-sm">
                <Tab title="ALL">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="+ Incoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="- Outcoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="rounded-md shadow-lg overflow-hidden">
            <div className="rounded-md bg-gray-200 py-4">
              <div className="border-b border-secondary pb-3">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src="https://jachai.com/_next/image?url=%2Fcoin-dissabled.png&w=32&q=75"
                    alt=""
                    className="w-5"
                  />
                  <h1 className="font-bold text-xl text-title mt-1">
                    Inactive Point
                  </h1>
                </div>
              </div>

              <div className="mt-2 text-center">
                <h1 className="text-xl font-bold text-gray-500">Point 0</h1>
                <div className="flex gap-1 items-center justify-center border rounded-full px-4 py-1.5 mt-2 border-gray-500 w-max mx-auto">
                  <BiHistory className="text-gray-500 text-2xl" />
                  <h1 className="font-semibold">History</h1>
                </div>
              </div>
            </div>
            <div className="bg-base-100 p-4">
              <Tabs activeTab="1" className="text-sm">
                <Tab title="ALL">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="+ Incoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="- Outcoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>

          <div className="rounded-md shadow-lg overflow-hidden">
            <div className="rounded-md bg-secondary/20 py-4">
              <div className="border-b border-secondary pb-3">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src="https://jachai.com/_next/image?url=%2Fcoin.png&w=32&q=75"
                    alt=""
                    className="w-5"
                  />
                  <h1 className="font-bold text-xl text-title mt-1">
                    Active Point
                  </h1>
                </div>
              </div>

              <div className="mt-2 text-center">
                <h1 className="text-xl font-bold text-primary">Point 0</h1>
                <div className="flex gap-1 items-center justify-center border rounded-full px-4 py-1.5 mt-2 border-secondary w-max mx-auto">
                  <BiHistory className="text-secondary text-2xl" />
                  <h1 className="font-semibold">History</h1>
                </div>
              </div>
            </div>
            <div className="bg-base-100 p-4">
              <Tabs activeTab="1" className="text-sm">
                <Tab title="ALL">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="+ Incoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
                <Tab title="- Outcoming" className="ml-4">
                  <div className="mt-4">
                    <div className="flex justify-between items-center font-medium text-neutral/80">
                      <p>Balance History</p>
                      <p>BDT</p>
                    </div>
                    <div className="flex justify-center py-10">
                      <p>No Data</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointBalance;
