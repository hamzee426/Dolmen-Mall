import React from 'react'
import LoginForm from '../../Widgets/LoginForm'
import Navbar from '../../Widgets/Navbar'
import '../../Widgets/LoginForm'
import image from '../../graphics/Admin.svg'


export default function admin() {
    const titleadmin="DEPARTMENT ADMIN";
    const subimagealt="AdminImage"

  return (
    <>
      <Navbar/>
      <LoginForm title={titleadmin} imagesrc={image} imagealt={subimagealt} />
    </>
  )
}
