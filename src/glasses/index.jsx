import { useState } from "react";
import data from "./dataGlasses.json";

export default function Glasses() {
  const [glasses, setGlasses] = useState(data);
  const [imgPath, setImgPath] = useState("");

  const renderGlasses = () => {
    return glasses.map((item, index) => {
      return <li>asd</li>;
    });
  };

  return (
    <div className="py-10">
      <h1 className="text-center text-4xl mb-5 font-bold">Try Glasses App Online</h1>
      <div className="flex flex-col items-center w-[1000px] m-auto">
        <div className="w-[480px] relative mb-20 bg-white pt-5">
          <img src="./glassesImage/model.jpg" alt="avatar" className="avatar" />
          <img src="./glassesImage/v1.png" alt="glasses" className="absolute top-[154px] left-0 right-0 m-auto w-[300px]" />
          <div className="bg-[white] text-[#000] p-5 absolute -bottom-10">
            <h3 className="text-2xl font-bold">GUCCI G8850U</h3>
            <p className="text-xl font-medium"><span>30</span>$</p>
            <p className="desc">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-5 w-full">
          <li className="border p-5 cursor-pointer bg-white"><img src="./glassesImage/v1.png" alt="" /></li>
          <li className="border p-5 cursor-pointer"><img src="./glassesImage/v1.png" alt="" /></li>
          <li className="border p-5 cursor-pointer"><img src="./glassesImage/v1.png" alt="" /></li>
          <li className="border p-5 cursor-pointer"><img src="./glassesImage/v1.png" alt="" /></li>
          <li className="border p-5 cursor-pointer"><img src="./glassesImage/v1.png" alt="" /></li>
          <li className="border p-5 cursor-pointer"><img src="./glassesImage/v1.png" alt="" /></li>
        </ul>
      </div>
    </div>
  );
}
