import { useState } from "react";
import data from "./dataGlasses.json";

export default function Glasses() {
  const [activeGlasses, setActiveGlasses] = useState(null);

  const handleActiveGlasses = (item) => {
    setActiveGlasses(item);
  };

  return (
    <div className="p-5 md:p-10">
      <h1 className="text-center text-3xl mb-5 font-bold md:text-4xl">
        Try Glasses App Online
      </h1>
      <div className="flex flex-col items-center w-[1000px] max-w-[100%] m-auto">
        <div className="w-[480px] max-w-[100%] relative mb-20 bg-white pt-5">
          <img src="./glassesImage/model.jpg" alt="avatar" className="avatar" />
          {activeGlasses && (
            <img
              src={`./${activeGlasses.url}`}
              alt={activeGlasses.name}
              className="absolute left-0 right-0 m-auto"
              style={{
                top: "min(calc(90/320*100vw), 154px)",
                width: "min(calc(180/320*100vw) , 300px)",
              }}
            />
          )}

          {activeGlasses && (
            <div
              className="bg-[white] text-[#000] p-3 absolute -bottom-10 md:p-5"
              key={activeGlasses.id}
            >
              <h3 className="text-2xl font-bold">{activeGlasses.name}</h3>
              <p className="text-xl font-medium">
                <span>{activeGlasses.price}</span>$
              </p>
              <p className="desc">{activeGlasses.desc}</p>
            </div>
          )}
        </div>
        <ul className="grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-5  w-full ">
          {data.map((item) => {
            const isActive = item.id === activeGlasses?.id ? "bg-white" : "";
            return (
              <li
                key={item.id}
                className={`border p-5 cursor-pointer ${isActive}`}
                onClick={() => handleActiveGlasses(item)}
              >
                <img src={`./${item.url}`} alt={item.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}