import { useState } from "react";
import "./App.css";
const NormalCheck = () => {
  return (
    <>
     
      <div className="flex">
      
        <input type="checkbox" className="h-4 w-4 p-3 m-3" />
        <span className=" m-2">Normal checkbox</span>
      </div>
    </>
  );
};
const DefaultChecked = () => {
  return (
    <>
      <div className="flex ">
        <input
          type="checkbox"
          defaultChecked={true}
          className="h-4 w-4 p-3 m-3"
        />

        <div className=" m-2">Default check</div>
      </div>
    </>
  );
};
const CheckShowMessage = () => {
  const [isChecked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      {" "}
      <div>
        <input
          checked={isChecked}
          onChange={handleChecked}
          type="checkbox"
          defaultChecked={false}
          className="h-4 w-4 p-3 m-3"
        />
        {isChecked && <span>checked</span>}
      </div>
    </>
  );
};

const Disabled = () => {
  return (
    <>
  
      <div className="flex">
        <input checked={Disabled} type="checkbox" className="h-4 w-4 p-3 m-3 hover:cursor-not-allowed" />
        <span className="m-2">Disabled Checkbox</span>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <h1 className="bg-pink-200 text-3xl p-2 text-center">Custom CheckBox</h1>
      <div className="flex justify-center items-center">
        <div className="flex flex-col  my-4 bg-pink-200 h-[550px] w-[550px]">
          <NormalCheck />
          <DefaultChecked />
          <CheckShowMessage />
          <Disabled />
        </div>
      </div>
    </>
  );
}

export default App;
