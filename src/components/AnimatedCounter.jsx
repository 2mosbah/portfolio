import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="mt-32 padding-x-lg xl:mt-0">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div key={item.id} className="flex flex-col justify-center p-10 rounded-lg bg-zinc-900">
            <div

              className="mb-2 text-5xl font-bold text-white counter-number"
            >
              <CountUp
                start={0}
                suffix={item.suffix}
                end={item.value}
                duration={2.5}
                className="text-5xl font-bold"
              />
            </div>
            <div className="text-xl text-white-50">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
