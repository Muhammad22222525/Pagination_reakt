import React from 'react';

function Header({ svg, pagin, page, pSpan, setlimit }) {
  return (
    <div>
      <div className="shadow-lg bg-gray-100 mb-[10px] p-4 rounded-b-lg fixed z-100 top-0 left-0 w-full">
        <div className="flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            {svg}
            <span className="text-xl font-bold text-gray-800 cursor-pointer">{pagin}</span>
          </div>
          <div className="flex items-center bg-gray-100 gap-[40px] px-6 py-3 rounded-lg">
            <select onChange={(e) => setlimit(Number(e.target.value))} className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md shadow">
              <option value="10">limit 10</option>
              <option value="25">limit 25</option>
              <option value="50">limit 50</option>
              <option value="100">limit 100</option>
            </select>
            <p className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md shadow">
              {page}<span>{pSpan}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
