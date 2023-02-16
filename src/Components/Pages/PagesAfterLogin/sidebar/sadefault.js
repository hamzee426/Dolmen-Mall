import css from "./sadefault.module.css";
import Data from './carddetails.json'
import React, { useState, useEffect } from 'react';

export default function sadefault() {
  return (
    <div>
      <Req />
    </div>
  );
}

function Req() {
  return (
    <>
      <div>
        <h3 className={css.headings}>Requests</h3>
      </div>
      <div>
      <p className={css.admcss} >From Department Admin</p>
        <Card data={Data} />
      </div>
      <div className={css.tean}>
      <p className={css.admcss} >From Teanut Admin</p>
        <Card data={Data} />
      </div>
    </>

  );
}


function Card({ data },props) {
  const [displayedData, setDisplayedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedData(data.slice(currentIndex, currentIndex + 3));
  }, [currentIndex, data]);

  if (!data.length) {
    return <div className={css.cardContainer}><h6 style={{color:"#000"}} className={css.nr}>No requests</h6></div>;
  }

  const handleRightArrowClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleLeftArrowClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
    
    <div className={css.cardContainer} >
      {currentIndex > 0 && (
        <div className={css.circ1}>
        <button onClick={handleLeftArrowClick}  className={css.button2}>&lt;</button>
        
        </div>
      )}
      {displayedData.map(item => (
        <div key={item.title} className={css.card}>
          <img src={item.image} alt={item.title} className={css.image} />
          <h3 className={css.title}>{item.title}</h3>
          <p className={css.description}>{item.description}</p>
          <div className={css.buttonsContainer}>
            <button className={`${css.acceptButton} ${css.button}`}>Accept</button>
            <button className={`${css.rejectButton} ${css.button}`}>Reject</button>
          </div>
        </div>
      ))}
      
      {currentIndex + 3 < data.length && (
         <div className={css.circ}>
        <button onClick={handleRightArrowClick}  className={css.button1}>&gt;</button>
         </div>
      )}
    </div>
    </>
  );
}


