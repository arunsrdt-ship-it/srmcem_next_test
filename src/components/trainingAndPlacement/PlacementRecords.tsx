import React, { useState } from "react";
import bgImg1 from "../../assets/images/trainingPlacement/PlacementRecords/bg-placementTraining1.jpg";
import Classes from "../../utils/styles/Global.module.css";
import { PlacementData } from "../../data/placementData";
import { FiUser } from "react-icons/fi";

type PlacementData = typeof PlacementData; // This infers the correct type for placementData

const PlacementRecords: React.FC = () => {
  // Define the initial selected year
  const [selectedYear, setSelectedYear] = useState<string>("2025-26");

  // Find the records for the selected year
  const selectedYearData = PlacementData.find((item) => item.year === selectedYear);

  // If no data is found for the selected year, default to an empty array
  const records = selectedYearData ? selectedYearData.students : [];

  return (
    <div className="relative bg-cover bg-center py-[50px] md:py-[80px] lg:py-[120px] min-h-[780px]" style={{ backgroundImage: `url(${bgImg1})` }}>
      <div className={`${Classes["container"]}`}>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Section */}
          <div className="left md:w-1/3">
            <h2 className="text-3xl lg:text-4xl text-white font-bold text-center mb-6 sm:mb-10">Placement Records</h2>
            <ul className="w-full flex sm:flex-col  text-center sm:max-w-[200px] mx-auto sm:space-y-4">
              {/* Loop through the years in the placementData */}

              {PlacementData.map((data) => (
                <li
                  key={data.year}
                  className={`py-2 sm:py-4 w-full cursor-pointer border-2  hover:border-[#ffb703]    ${data.year === selectedYear ? "bg-[#ffb703] border-[#ffb703] text-[#233E6F]" : "border-[#fff] text-white"
                    }
                     font-bold sm:text-[1.5rem] `}
                  onClick={() => setSelectedYear(data.year)}
                >
                  {data.year}
                </li>
              ))}
            </ul>
            {/* <div className="text-center mt-10">
              <button className="px-6 py-2 bg-[#ffb703] border-2 border-[#ffb703] text-[#233E6F] font-semibold rounded-lg hover:bg-transparent hover:text-[#ffb703] transition">
                View All
              </button>
            </div> */}
          </div>

          {/* Right Section */}
          <div className="right md:w-2/3">
            <div className="flex flex-wrap gap-6 justify-between">
              {/* Loop through students of the selected year */}
              {records.map((record, index) => (
                <div
                  key={index}
                  className="px-6 py-10 w-full md:w-[48%] border-2 border-white group hover:border-[#ffb703] bg-[#131C30] inset-0 bg-opacity-50 text-white rounded-lg text-center shadow-lg"
                >
                  {/* <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-gray-600">
                     
                    
                    </span>
                  </div> */}
                  {
                    // @ts-ignore
                    record.img ? <div className="w-20 h-20 mx-auto mb-4 overflow-hidden bg-white rounded-full border-2  group-hover:bg-transparent border-[#ffb703]">
                      {/* @ts-ignore */}
                      <img src={record.img} className="w-20 h-20 object-cover " alt="" />
                    </div> : <div className="flex  justify-center pb-4 font-normal ">
                      <span className="bg-white  w-20 h-20 min-w-20 min-h-20  flex justify-center items-center text-[#ffb703]  rounded-full border-2  group-hover:bg-transparent border-[#ffb703]">
                        <FiUser size={24} />
                      </span>
                    </div>
                  }

                  <h4 className="font-bold text-lg text-white uppercase">{record.name}</h4>
                  <p className="text-sm text-white text-center ">{record.degree}</p>
                  <p className="text-sm text-white text-center  ">{record.company}</p>
                  <p className="font-bold text-white text-center">{record.package}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementRecords;
