import React from "react";
import { administrativeAllCardData } from "../../data/administrationData";
import Classes from "../../utils/styles/Global.module.css";

const AdministrationAll: React.FC = () => {
  return (
    <div className={`${Classes.container} py-7 md:py-10 lg:py-14`}>
      {administrativeAllCardData.map((item: any) => {
        return (
          <div key={item.id}>
            <h1 className="text-3xl lg:text-4xl font-bold text-center mx-auto">{item.heading}</h1>
            <div className="administration_card my-[3.5rem]">
              {item.cardsContent.map((ele: any) => {
                return (
                  <div key={ele.id} className="w-full relative">
                    <img
                      className="w-full border border-gray-200 hover:border-yellow-500 rounded-2xl transition-all duration-200 max-h-[244px] object-cover object-top"
                      src={ele.img}
                      alt="img"
                    />
                    <div className="flex flex-col items-center justify-center rounded-xl bg-[#233e6fa4] text-white absolute bottom-0 left-0 w-full py-1">
                      <h1 className="text-center">{ele.name}</h1>
                      <p className="text-center">{ele.designation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdministrationAll;
