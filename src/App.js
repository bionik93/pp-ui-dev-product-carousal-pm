import React, { useEffect, useState } from "react";
import Carousal from "./components/carousal";
import "./styles.css";

export default function App() {
  const [array] = useState([
    { pName: 'product 1', cost: 'Rs. 120', cat: 'food' },
    { pName: 'product 2', cost: 'Rs. 220', cat: 'housing' },
    { pName: 'product 3', cost: 'Rs. 10', cat: 'electronics' },
    { pName: 'product 4', cost: 'Rs. 12', cat: 'food' },
    { pName: 'product 5', cost: 'Rs. 320', cat: 'housing' },
    { pName: 'product 6', cost: 'Rs. 320', cat: 'electronics' },
    { pName: 'product 7', cost: 'Rs. 10', cat: 'food' },
    { pName: 'product 8', cost: 'Rs. 12', cat: 'food' },
    { pName: 'product 9', cost: 'Rs. 320', cat: 'electronics' },
    { pName: 'product 10', cost: 'Rs. 320', cat: 'electronics' }]);
  const categoryArray = [...new Set(array.map(item => item.cat))];
  const [selectedCat, setCat] = useState('All')

  useEffect(() => {

  }, [selectedCat]);

  return (
    <>
    <div className='header'>
      <img src='https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png' alt='logo'/>
      <h5>UI: Assignment - Product Carousal Component</h5>
    </div>
      <div className="wrapper">
        <div className='controls'>
          <label>Filter by Category</label>
          <select onChange={(e) => { console.log(e.target.value); setCat(e.target.value) }}>
            <option value='All'>Show All</option>
            {
              categoryArray.map(item => <option value={item}>{item}</option>)
            }
          </select>
        </div>
        <Carousal
          array={array.filter(item => {
            return item.cat === selectedCat || selectedCat === 'All'
          })}
        />
      </div>
    </>
  );
}
