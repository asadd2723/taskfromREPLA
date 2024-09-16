import { useState } from 'react';
import Child from './components/Child'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleClick = (index) => {
      setSelectedIndex(index);
      console.log(index )
      console.log(`Child Component ${index + 1} is rendered`);
    };
    
  // const [activeIndex, setActiveIndex] = useState(null);
  // const data = [1, 2, 3, 4, 5, 6];
  // const handleClick = (index) => {
  //   setActiveIndex(index);
  //   console.log(index)
  // };

  return (
    // <div>
    //   {data.map((item, index) => (
    //     <div key={index}>
    //       <button onClick={() => handleClick(index)}>
    //         Show Item {item}
    //       </button>
    //       {activeIndex === index && <Child num={item} />}
    //     </div>
    //   ))}
    // </div>
    <div className='flex bg-slate-950'>
      <div className='w-1/5 h-screen flex flex-col items-start gap-2 border-r-2 border-gray-500 p-2'>
      {/* make empty array which have length 6 ...and use map on this array */}
        {Array.from({ length: 6 }).map((_, index) => (
            <button 
            className='bg-slate-700 text-gray-50 w-full font-bold py-3 px-6 rounded' 
            key={index} 
            onClick={() => handleClick(index)}
            >
              Render Child {index + 1}
            </button>
        ))}
      </div>
      <div 
      className='bg-slate-950 w-full text-gray-50 text-3xl text-center'
      >
        {selectedIndex !== null && <Child num={selectedIndex + 1} />}
      </div>
    </div>
  )
}

export default App
