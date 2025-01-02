
import './App.css'

const NormalButton=()=>{
  return(
    <>
    <button className="p-2 bg-purple-200 border-2 rounded-md hover:bg-gray-400 m-4 text-2xl">Normal Button</button>
    </>
  )
}

const BorderDraw=()=>{
  return(
    <>
    <button className=' p-2 bg-purple-200 border-2 text-2xl rounded-md hover:bg-transparent hover:border-pink-600 hover:text-pink-800 '>BorderDraw Button</button>
    </>
  )
}

const BorderShadow=()=>{
  return(
    <>
    <button className='p-2 m-4 bg-purple-200 border-2 text-2xl rounded-md hover:-translate-y-2 hover:bg-transparent duration-75 hover:shadow-lg hover:text-slate-600'>BorderShadow Button</button>
    </>
  )
}

const CenterFillButton=()=>{
  return(
    <>
    <button className='p-2 m-4 bg-purple-200 border-2 text-2xl rounded-md transition-all duration-700 relative overflow-hidden group'>
      <span className=' relative z-20'>CentreFill Button</span>
      <div className="absolute inset-0 bg-[#6eef95] scale-0 group-hover:scale-100 transition-transform duration-500 " />
      </button>
    </>
  )
}

const CornerDrawButton=()=>{
  return (
    <>
    <button className='p-2 m-4 bg-purple-200 border-2 text-2xl rounded-md transition-all duration-500 relative  group'>
      <span className=' relative z-20 '>CornerDraw Button</span>

      <div className='absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[red] opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700'/>
      <div className='absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[red] opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700'/>
      <div className='absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[red] opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700'/>
      <div className='absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[red] opacity-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700'/>
      </button>
  
    </>
  )

}

const SplitRevealButton=()=>{
  return(
    <>
    <button className='p-2 m-4 bg-purple-200 border-2 text-2xl rounded-md transition-all duration-500 relative overflow-hidden group'>
      <span className=' relative z-20'>SplitRevealButton Button</span>
      <div className='absolute top-0 left-0 w-full h-1/2 bg-[red] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 '/>
      <div className='absolute bottom-0 right-0 w-full h-1/2 bg-[red] cd translate-x-full group-hover:translate-x-0 transition-transform duration-300 '/>
      </button>
    </>
  )
}

const DaigonalButton=()=>{
  return(
    <>
    <button className='p-2 m-4 bg-purple-200 text-2xl rounded-md border-2  transition-all duration-500 overflow-hidden group relative  '>
      <span className='relative z-10  hover:text-white'>Daigonal Button</span>
      <div className='absolute '/>
      </button>
    </>
  )
}
 

function App() {


  return (
    <>
     <h1 className='text-center font-bold text-2xl bg-purple-500 p-5'>Hover Button </h1>
     <div className='flex justify-center items-center my-5' >
      <div className='w-[550px] h-[550px] bg-cyan-400 '>
         <NormalButton/>
         <BorderDraw/>
         <BorderShadow/>
         <CenterFillButton/>
         <CornerDrawButton/>
         <SplitRevealButton/>
         <DaigonalButton/>
      </div>

     </div>
      
    </>
  )
}

export default App
