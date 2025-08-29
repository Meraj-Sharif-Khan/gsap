import PanelAnimation from "@/components/PanelAnimation/PanelAnimation";
import WhatWeDoAnimation from "./Animation/WhatWeDoAnimation";
import AboutOta from "./components/AboutOta/AboutOta";

const WhatWeDo = () => {
  return (
    <>
      <div
        id="what-panel"
        className="panel w-full h-[2000px] bg-green-800 flex items-center flex-col"
      >

        <p className="whatWeDo-text text-5xl py-10">What We Do Section</p>
        <AboutOta />
      </div>

      <WhatWeDoAnimation />
    </>
  );
};

export default WhatWeDo;
