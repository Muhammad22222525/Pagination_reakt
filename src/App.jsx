import React, { useState, useEffect } from "react";
import Header from "./components/header";

function App() {
  const [data, setData] = useState();
  let [page, setPage] = useState(1);  
  const [limit, setLimit] = useState(10);
  const totPages = 20

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [page, limit]);

  return (
    <div>
      <Header 
        svg={<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="12" r="2" fill="#3B82F6"/>
                  <circle cx="12" cy="12" r="2" fill="#3B82F6"/>
                  <circle cx="20" cy="12" r="2" fill="#3B82F6"/>
              </svg>}
        pagin="Pagination" 
        page="Page:" 
        pSpan={page} 
        setlimit={setLimit}
      />
      <div className="mt-25">
      {data?.map((item) => (
        <div key={item.id} className="border border-green-500 p-2 m-2 hover:border-blue-500  rounded-md">
          <p>{item.title}</p>
        </div>
      ))}
      <div className="shadow-lg bg-gray-100   rounded-b-lg fixed z-100 bottom-0 w-full h-[90px] flex justify-center items-center ">
        <button onClick={() => setPage((prev) => prev > 1 ? prev - 1 : prev)} className="px-4 py-2 bg-gray-300 rounded mr-2 hover:bg-gray-400">prev</button>
        {Array.from({ length: totPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`px-4 py-2 bg-blue-500  text-white rounded hover:bg-blue-600 mr-[10px] focus:bg-blue-600 ${index + 1 === page ? "bg-blue-700" : "hover:bg-blue-600"}`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setPage((prev) => prev + 1)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">next</button>
      </div>
      </div>
    </div>
  );
}

export default App;
