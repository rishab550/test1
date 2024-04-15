import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const searchRef = useRef();

  const handleSearch = async () => {
    const api_key = "2cabaef970b3727a73e55994821f868d";
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchRef.current.value}&units=Metric&appid=${api_key}`
      )
      .then((res) => setWeatherData(res));

    console.log(weatherData);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-600">
      <div className="rounded h-1/2  bg-white flex justify-center p-2 border-b-slate-100 flex-col gap-2">
        <div className="p-4 h-12 w-full flex rounded justify-center items-center bg-blue-600">
          <input
            type="text"
            className="grow h-8 bg-transparent w-36 p-2 text-white"
            placeholder="Search"
            ref={searchRef}
          />
          <CiSearch
            className="h-18 w-14 cursor-pointer text-white"
            onClick={handleSearch}
          />
        </div>
        <div className="h-80 rounded bg-gray-800 w-full flex justify-center flex-col items-center">
          <label>
            <TiWeatherPartlySunny className="h-36 size-28" />
            <span className="ml-2 text-white size-32">
              {weatherData?.data?.main?.temp} Degrees
            </span>
          </label>
          <div className="flex gap-32 flex-row ">
            <label>
              <FaWind className="h-24 size-20" />
              <span className="ml-2 text-white size-32">
                {weatherData?.data?.wind?.speed}Km/h
              </span>
            </label>
            <label>
              <WiHumidity className="h-24 size-20" />
              <span className="ml-2 text-white size-32">
                {weatherData?.data?.main?.humidity}%
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
