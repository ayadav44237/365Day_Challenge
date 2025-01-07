import { useState } from "react";
import { Link } from "react-router";
const App = () => {
  const [isMenuOpen,setMenuOpen]=useState(false)
  return (
    <>
      <h1 className="bg-pink-200 font-bold text-2xl text-center">
        Responsive Navbar
      </h1>
      <nav className="mt-4 flex justify-between bg-gray-300">
        <div className="m-2 p-2">Logo</div>
        <div>
          <ul className={`${isMenuOpen?"block":"hidden"} sm:flex`}>
           <li className="m-2 p-2 hover:cursor-pointer">Home</li>
            <li className="m-2 p-2 hover:cursor-pointer">Contact</li>
            <li className="m-2 p-2 hover:cursor-pointer">About</li>
            <button onClick={()=>setMenuOpen(false)}  className="m-2 p-2 hover:cursor-pointer">close</button>
          </ul>
          {!isMenuOpen &&<button onClick={()=>setMenuOpen(!isMenuOpen)} className=" p-2 m-2 block sm:hidden"> ☰</button>}
        </div>
      </nav>
    </>
  );
};
export default App;
