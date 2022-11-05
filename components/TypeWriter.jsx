import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <div className="mt-2 text-gray-500 text-base font-bold lg:text-xl flex justify-center items-center">
      <h3 className="mr-1 text-base font-extrabold">Learn to be a master of</h3>
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[
          "web development",
          1000,
          "mobile development",
          1000,
          "designs",
          1000,
          "wordpress",
          1000,
        ]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
        className="text-yellow-300 font-extrabold text-base"
      />
    </div>
  );
};

export default TypeWriter;
