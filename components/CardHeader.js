import React from 'react'
import profilePic from "../assets/profile-pic.jpg"
import logo from "../assets/logo.png"
import {IoIosNotifications } from 'react-icons/io'
import Image from 'next/image'

const style = {
    wrapper: `flex items-center bg-white w-full h-20 p-8 justify-evenly`,
    profileImage: `object-cover rounded-full`,
    logo: `object-contain`,
    notificationIcon: `text-3xl cursor-pointer text-gray-400 absolute`,
    notifications: `h-2 w-2 flex rounded-full relative bg-red-500 -top-3 -right-5`,
  }

const CardHeader = () => {
  return (
    <div className={style.wrapper}>
        <Image
        src={profilePic}
        
        width={40}
        height={40}
        alt='profile-pic'
        className={style.profileImage}
        />
        
        <Image
        src={logo}
        width={150}
        height={200}
        alt='logo-pic'
        className={style.logo}
        />

    <div  className='flex item-center'>
    <IoIosNotifications className={style.notificationIcon} />
        <div className={style.notifications} />
    </div>
    </div>
  )
}

export default CardHeader