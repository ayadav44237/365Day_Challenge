import "./App.css";

const SingleSpanToggle=()=>{
  return(
    <>
    <label className="flex justify-between items-center p-2 text-xl">
    SingleSpan Toggle
  <input type="checkbox" className="hidden peer" />
  <span className="w-20 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-10"></span>
</label>
    </>
  )
}

const SimpleToggle = () => {
  return (
    <label className="flex items-center justify-between p-2 text-xl">
      Toggle
      <input type="checkbox" className="hidden peer" />
      <span className="w-20 h-10 ml-4 bg-gray-300 rounded-full relative peer-checked:bg-green-400 duration-300">
        <span className="absolute w-8 h-8 bg-white rounded-full top-1 left-1 transition-transform duration-300 peer-checked:translate-x-10">
        <span className="text-xs font-bold peer-checked:hidden">NO</span>
        <span className="text-xs font-bold hidden peer-checked:inline">Yes</span>
        </span>
      </span>
    </label>
  );
};





function App() {
  return (
    <>
      <h1 className="text-2xl bg-pink-200 text-center">Toggle</h1>
      <div className="flex justify-center items-center">
        <div className="h-[550px] w-[650px] bg-pink-200 my-10 ">
          <SingleSpanToggle/>
          <SimpleToggle />
        </div>
      </div>
    </>
  );
}

export default App;
