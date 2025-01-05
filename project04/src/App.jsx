import { useState } from "react";
import "./App.css";

const Acordian = ({ about, description,isVisible,setIsvisible }) => {

  return (
    <>
      <div className="flex justify-between space-y-2  border-2 m-4 border-black w-[800px] ">
        <div>
          <h1 className="font-bold">{about}</h1>

          {isVisible && <p>{description}</p>}
        </div>
        <div>
          {isVisible ? (
            <button
              onClick={() => setIsvisible(false)}
              className="bg-pink-500 m-2 p-1 rounded-md"
            >
              Hide
            </button>
          ) : (
            <button
              onClick={() => setIsvisible(true)}
              className="bg-pink-500 m-2 p-1 rounded-md"
            >
              show
            </button>
          )}
        </div>
      </div>
    </>
  );
};

function App() {
  const [config,setConfig]=useState("");
  return (
    <>
      <h1 className="bg-purple-200 text-center text-2xl p-2">Accordion</h1>
      <div className="flex justify-center items-center">
        <div className="mt-4 bg-pink-100  ">
          <Acordian
            about={"What is an accordion in web development?"}
            description={"An accordion is a UI component that allows users to expand and collapse sections of content, providing a compact way to display information."}
            isVisible={config==="About"}
            setIsvisible={()=>setConfig("About")}
          />
          <Acordian
            about={"What are the key parts of an accordion?"}
            description={"This is description of AboutusThe main parts are the header (toggle button) and the panel (content section) that expands or collapses when the header is clicked.fig"}
            isVisible={config==="team"}
            setIsvisible={()=>setConfig("team")}
          />
          <Acordian
            about={"How do you create an accessible accordion?"}
            description={"Use semantic HTML, ARIA roles ( aria-expanded), and keyboard navigation (e.g., Tab, Enter, and Space keys) to ensure accessibility"}
            isVisible={config==="career"}
            setIsvisible={()=>setConfig("career")}
          />
          <Acordian
            about={"What are the common use cases for an accordion?"}
            description={"Accordions are often used in FAQs, navigation menus, and content-heavy layouts to save space and improve user experience."}
            isVisible={config==="contact"}
            setIsvisible={()=>setConfig("contact")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
