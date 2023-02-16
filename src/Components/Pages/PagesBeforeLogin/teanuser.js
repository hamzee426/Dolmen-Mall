import React from 'react'
import LoginForm from '../../Widgets/LoginForm'
import Navbar from '../../Widgets/Navbar'
import '../../Widgets/LoginForm'
import image from '../../graphics/Admin.svg'



export default function super_admin() {
  const titleusr="TEANUT USER";
  const subimagealt="UserImage"
 
  return (
    <>
      <Navbar/>
      <LoginForm title={titleusr} imagesrc={image} imagealt={subimagealt}/>
    </>
  )
}

