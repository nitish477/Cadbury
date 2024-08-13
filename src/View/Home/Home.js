import React, { useEffect, useState } from 'react';
import './Home.css'; // Ensure to create this CSS file
import Chocolatedata from "./../../assect/Chocolate.json"
import ChocolateCard from "./../../component/ChocolateCard/ChocolateCard"
import toast, { Toaster } from 'react-hot-toast';
function Home() {
  const [chocolates, setChocolates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    if (loading) {
      toast.loading("Wait..🤑")
   }
    setTimeout(()=>{
     setChocolates(Chocolatedata.chocolates) 
      setLoading(false)
      toast.dismiss()
      toast.success("Fetch")
    },3000)
  },[])
 

 

  return (
    <div className="home-container">
      <div className="content">
        <h1 className='h1'>Welcome to Cadbury</h1>
        <p className='p'>Your favorite chocolate destination!</p>
        <div className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 200"
            width="200"
            height="auto"
          >
            <path
              d="M100 20 L150 70 L100 120 L50 70 Z"
              fill="#6d28d9"
            />
            <path
              d="M200 20 L250 70 L200 120 L150 70 Z"
              fill="#a855f7"
            />
            <path
              d="M300 20 L350 70 L300 120 L250 70 Z"
              fill="#8b5cf6"
            />
          </svg>
        </div>
        <div className="chocolate-cards">
          {chocolates.map((chocolate)=>{
            return <ChocolateCard key={chocolate.id} chocolate={chocolate}/>
          })}
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default Home;
