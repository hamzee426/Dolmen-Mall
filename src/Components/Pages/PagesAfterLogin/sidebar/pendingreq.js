import React, { useState, useEffect } from "react";
import Data from './carddetails.json'
import css from './pendingreq.module.css'

export default function Pendingreq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(Data)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, []);

  return (
    <>
    <h5 className={css.heading}>Pending Requests</h5>
    {!Data.length ? 
    <>
    <h3 className={css.text1}>No Requests</h3>
    </>
    :
    <>
    
    <div className={css.container}>
        <ul className={css.ul}>
        <li></li>
        <li><button className={`${css.allButton} ${css.button}`}>Accept  All</button></li>
        </ul>
      <ul>
        {Data.map((item) => (
          <>
          <div key={item.title} className={css.cont}>
            <ul className={css.ul}>
                <li key={item.title}><img className={css.imagesize} src={item.image} alt="profilepic"/></li>
                <li key={item.title}><ul className={css.ul2}>
                    <li key={item.title}><p className={css.text1}>{item.title}</p></li>
                    <li key={item.title}><p className={css.text2}>{item.description}</p></li>
                </ul></li>
                <li key={item.title}><p className={css.source}>{item.source}</p></li>
                <li key={item.title}><div className={css.buttonsContainer}>
            <button className={`${css.acceptButton} ${css.button}`}>Accept</button>
            <button className={`${css.rejectButton} ${css.button}`}>Reject</button>
          </div></li>
            </ul>
          </div>
          </>
        ))}
      </ul>
      </div>
    
    
    </>
    }






    </>
  );
}
