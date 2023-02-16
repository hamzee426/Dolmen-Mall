import React from 'react'
import css from './Navdash.module.css'
import logo from '../../../Widgets/Logo/dmlogob.png'
import admin from './utils/admin.png'
export default function Navdash(props) {
  return (
    <>
    <div className={css.shape}>

        <img className={css.logo} src={logo} alt="logoicon"/>
        <a href='/dashboard/defaultpage'><button className={css.titlenav}>{props.title}</button></a>

        <div className={css.margin}>
        <img className={css.admin} src={admin} alt="admincon"/>
        <ul className={css.ul}>
        <p className={css.usrname}>Name</p>
        <p className={css.acctitle}>{props.title}</p>
        </ul>
        </div>
    </div>
    </>
  )
}

