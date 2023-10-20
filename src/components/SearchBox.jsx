// import React from "react";
// import { useState } from "react";
// import "../styles/searchBox.css";
// // import search from "../assets/search.png";
// const SearchBox = () => {
//   const itemList = [
//       "الفل",
//       "الكاردينيا",
//       "اكاسيا",
//       "العمود الفقري",
//       "ساق البامبو",
//       "عين القط",
//       "الجوري",
//       "اللبلاب",
//       "جهنمية",
//       "جلد النمر"
//     ];
//     const [filteredList, setFilteredList] = new useState(itemList);
//     const filterBySearch = (event) => {
//       const query = event.target.value;
//       var updatedList = [...itemList];
//       updatedList = updatedList.filter((item) =>
//         return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//       });
//       setFilteredList(updatedList);
//     };

//   // const handleChange = (e) => {
//   //   e.preventDefault();
//   //   setSearchInput(e.target.value);
//   // };

//   // if (searchInput.length > 0) {
//   //   countries.filter((country) => {
//   //     return country.name.match(searchInput);
//   //   });
//   // }

//   return (
//     <div className="search-container">
//       <div className="search-header">
//         <input id="search-box" className="search-style" onChange={filterBySearch} />
//       </div>
//       <div id="item-list">
//         <ol>
//           {filteredList.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
//   // return (
//   //   <div className="search-container">
//   //     <input
//   //       className="search-style"
//   //       type="search"
//   //       placeholder="..ابحث عن النبتة التي تريدها"
//   //       onChange={handleChange}
//   //       value={searchInput}
//   //     />
//   //       {/* <img className="search-container-search" src={search} height={30} alt="search" /> */}

//   //   </div>
//   // );
// };

// export default SearchBox;

import React, { useState } from "react";
import "../styles/searchBox.css";

export default function App() {
  const itemList = [
    "الفل",
    "الكاردينيا",
    "اكاسيا",
    "العمود الفقري",
    "ساق البامبو",
    "عين القط",
    "الجوري",
    "اللبلاب",
    "جهنمية",
    "جلد النمر",
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <input
          className="search-style"
          onChange={filterBySearch}
          placeholder=".. ابحث عن النبتة "
        />
      </div>
      <div id="item-list">
        {filteredList.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
