// import React, { useState } from 'react';
// function Filter({ onFilter }) {
//   const [title, setTitle] = useState('');
//   const [rating, setRating] = useState('');

//   const handleFilter = () => {
//     onFilter({ title, rating });
//   };

//   return (
//     <div className="filter flex flex-wrap gap-3">
//       <input
//         type="text"
//         placeholder="Search by title..."
//         className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-48"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Minimum rating..."
//         min="0"
//         max="10"
//         className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-48"
//         value={rating}
//         onChange={(e) => setRating(e.target.value)}
//       />
//       <button 
//         onClick={handleFilter}
//         className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
//       >
//         Filter
//       </button>
//       <button 
//         onClick={() => {
//           setTitle('');
//           setRating('');
//           onFilter({ title: '', rating: '' });
//         }}
//         className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
//       >
//         Clear
//       </button>
//     </div>
//   );
// }

// export default Filter;