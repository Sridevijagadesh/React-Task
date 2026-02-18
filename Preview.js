import react from "react";
import { useState } from "react";
const TabSwitch = () => {
  const [activeBtn, setActivebtn] = useState("home");
  const Btndata = [
    {
      id: "home",
      name: "Home",
      content: "i am home page",
    },
    {
      id: "about",
      name: "About",
      content: "i am about page",
    },
    {
      id: "setting",
      name: "Setting ",
      content: "i am setting page",
    },
  ];
  return (
    <>
      <h1>Tab Switch</h1>\
      <div className="btn">
        {Btndata.map((data) => (
          <button
            key={data.id}
            className={data.id === activeBtn ? " active " : ""}
            onClick={() => {
              setActivebtn(data.id);
            }}
          >
            {data.name}
          </button>
        ))}
      </div>
      <div className="content">
        {Btndata.find((tab) => tab.id === activeBtn).content}
      </div>
    </>
  );
};

export default TabSwitch;
