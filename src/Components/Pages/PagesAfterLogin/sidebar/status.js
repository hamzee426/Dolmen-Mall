import React from 'react'
import css from './status.module.css'

export default function status() {
  return (
    <>
    <h1 className={css.heading}>Status</h1>
    <div className={css.container}>
    <h5 className={css.heading} style={{textAlign:"center"}}>APPROVED BY</h5>
    <ul className={css.ul}>
      <li><h5 className={css.heading1} style={{marginTop:"80px", marginLeft:"80px",userSelect:"none"}}>Department Admin</h5></li>
      <li><div className={css.cont}><p style={{color:"rgb(78, 78, 78)",marginLeft:"5px",marginTop:"5.7px",userSelect:"none"}}>Pending</p></div></li>
    </ul>
    <ul>
      <h5 className={css.heading1} style={{marginTop:"70px", marginLeft:"80px",userSelect:"none"}}>Super Admin</h5>
      <li><div className={css.cont1}><p style={{color:"rgb(78, 78, 78)",marginLeft:"5px",marginTop:"5.7px",userSelect:"none"}}>Pending</p></div></li>
      </ul>
    </div>
    </>
  )
}
