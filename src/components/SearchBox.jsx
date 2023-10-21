import React, { useEffect, useState } from "react";
import "../styles/searchBox.css";
import { Link } from "react-router-dom";
export default function App() {
  const [itemList, setItemList] = useState([
    {
      idPlant: 1,
      plantName: "زهرة القمر",
    },
    {
      idPlant: 2,
      plantName: "العمود الفقري",
    },
    {
      idPlant: 3,
      plantName: "ساق البامبو",
    },
    {
      idPlant: 4,
      plantName: "جلد النمر",
    },
    {
      idPlant: 5,
      plantName: "اللبلاب",
    },
    {
      idPlant: 6,
      plantName: "الدفنباخية",
    },
    {
      idPlant: 7,
      plantName: "زنبق السلام",
    },
    {
      idPlant: 8,
      plantName: "الفلانجيوم",
    },
    {
      idPlant: 11,
      plantName: "المفصصة الريشية",
    },
    {
      idPlant: 12,
      plantName: "الخنشار",
    },
    {
      idPlant: 17,
      plantName: "ورد الفل",
    },
    {
      idPlant: 18,
      plantName: "ورد الجوري",
    },  {
      idPlant: 19,
      plantName: "زهرة الشمس",
    },
    {
      idPlant: 20,
      plantName: "جهنمية",
    },
    {
      idPlant: 21,
      plantName: "عين القط",
    },
    {
      idPlant: 22,
      plantName: "اكاسيا",
    },
    {
      idPlant: 23,
      plantName: "لويزة",
    },
    {
      idPlant: 24,
      plantName: "بلومباجو",
    },
  ]);
  const [query, setQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (query !== "") {
      let newArray = itemList.filter((item) => item.plantName.includes(query));
      setFilteredList([...newArray]);
    } else {
      setFilteredList([]);
    }
  }, [query]);
  return (
    <div className="search-container">
      <div className="search-header">
        <input
          className="search-style"
          onChange={(e) => setQuery(e.target.value)}
          placeholder=".. ابحث عن النبتة "
        />
      </div>
      {filteredList ? (
        <div id="item-list" >

          {filteredList.map((item, index) => (
            <Link onClick={()=>setFilteredList([])} to={`/Details/${item?.idPlant}`} className="search-bar">
              <div key={index}>
                <p>{item?.plantName}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
      
      
    </div>
  );
}
