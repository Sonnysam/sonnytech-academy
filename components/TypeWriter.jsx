import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <div className="mt-2 text-gray-300 text-sm flex">
      <h3 className="mr-1">Learn to be a master of</h3>
      <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'web development',
    1000,
    'mobile development',
    1000,
    'designs',
    1000
    ]}
    speed={50} 
    style={{ fontSize: '1em' }}
    wrapper="span" 
    repeat={Infinity} 
    className="text-yellow-300 font-semibold"
  />
    </div>
  );
};

export default TypeWriter;
