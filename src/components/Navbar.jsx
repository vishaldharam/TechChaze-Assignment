import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [sidePopUp, setSidePopUp] = useState(false) 
    const handleToggle = () => {
        setSidePopUp(!sidePopUp)
    }
  return (
    <div className='max-w-screen-2xl top-[57px]  flex justify-between  py-[29px]  container mx-auto medium:px-16 tab:px-10 px-1 '>
        <div>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H9.11917C14.8423 0 19.4819 4.63953 19.4819 10.3627V15.3368C19.4819 17.6261 17.6261 19.4819 15.3368 19.4819H10.3627C4.63953 19.4819 0 14.8423 0 9.11917V0Z" fill="#FDC138"/>
            <path d="M40 0H30.8808C25.1577 0 20.5181 4.63953 20.5181 10.3627V15.3368C20.5181 17.6261 22.3739 19.4819 24.6632 19.4819H29.6373C35.3605 19.4819 40 14.8423 40 9.11917V0Z" fill="#399866"/>
            <path d="M0 40H9.11917C14.8423 40 19.4819 35.3605 19.4819 29.6373V24.6632C19.4819 22.3739 17.6261 20.5181 15.3368 20.5181H10.3627C4.63953 20.5181 0 25.1577 0 30.8808V40Z" fill="#399866"/>
            <path d="M40 40H30.8808C25.1577 40 20.5181 35.3605 20.5181 29.6373V24.6632C20.5181 22.3739 22.3739 20.5181 24.6632 20.5181H29.6373C35.3605 20.5181 40 25.1577 40 30.8808V40Z" fill="#FDC138"/>
            </svg>
        </div>
        <div className='hidden md:flex items-center'>
            <ul className='montserrat-font medium:gap-[40px] gap-[20px] text-black  flex font-bold items-center  '>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>About Us</li>
                <li className='hover:underline'>Our Products</li>
                <li className='hover:underline'>Contact Us</li>
                <li className='hover:underline'>Blogs</li>
            </ul>
        </div>
        <div>
            <button className='bg-secondary hidden tab:flex border-y-[1.5px] border-[#16442c] border-opacity-[1px] px-4 py-1.5 rounded-[30px] montserrat-font text-white '>
                Donate
            </button>
            <button className='tab:hidden ' onClick={handleToggle} >
                <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.29177 13.4152C0.949174 13.4152 0.620607 13.2791 0.378352 13.0368C0.136097 12.7946 0 12.466 0 12.1234V1.79177C0 1.44917 0.136097 1.12061 0.378352 0.878352C0.620607 0.636098 0.949174 0.5 1.29177 0.5H11.626C11.9686 0.5 12.2971 0.636098 12.5394 0.878352C12.7816 1.12061 12.9177 1.44917 12.9177 1.79177V12.1234C12.9177 12.466 12.7816 12.7946 12.5394 13.0368C12.2971 13.2791 11.9686 13.4152 11.626 13.4152H1.29177ZM19.3766 13.4152C19.034 13.4152 18.7054 13.2791 18.4632 13.0368C18.2209 12.7946 18.0848 12.466 18.0848 12.1234V1.79177C18.0848 1.44917 18.2209 1.12061 18.4632 0.878352C18.7054 0.636098 19.034 0.5 19.3766 0.5H29.7082C30.0508 0.5 30.3794 0.636098 30.6216 0.878352C30.8639 1.12061 31 1.44917 31 1.79177V12.1234C31 12.466 30.8639 12.7946 30.6216 13.0368C30.3794 13.2791 30.0508 13.4152 29.7082 13.4152H19.3766ZM1.29177 31.5C0.949174 31.5 0.620607 31.3639 0.378352 31.1216C0.136097 30.8794 0 30.5508 0 30.2082V19.874C0 19.5314 0.136097 19.2029 0.378352 18.9606C0.620607 18.7184 0.949174 18.5823 1.29177 18.5823H11.626C11.9686 18.5823 12.2971 18.7184 12.5394 18.9606C12.7816 19.2029 12.9177 19.5314 12.9177 19.874V30.2082C12.9177 30.5508 12.7816 30.8794 12.5394 31.1216C12.2971 31.3639 11.9686 31.5 11.626 31.5H1.29177ZM19.3766 31.5C19.034 31.5 18.7054 31.3639 18.4632 31.1216C18.2209 30.8794 18.0848 30.5508 18.0848 30.2082V19.874C18.0848 19.5314 18.2209 19.2029 18.4632 18.9606C18.7054 18.7184 19.034 18.5823 19.3766 18.5823H29.7082C30.0508 18.5823 30.3794 18.7184 30.6216 18.9606C30.8639 19.2029 31 19.5314 31 19.874V30.2082C31 30.5508 30.8639 30.8794 30.6216 31.1216C30.3794 31.3639 30.0508 31.5 29.7082 31.5H19.3766Z" fill="#399866"/>
                </svg>
            </button>
        </div>
        {
            sidePopUp && 
            <div className={` ${sidePopUp ? " w-screen top-[100px] left-0 border py-12 absolute bg-secondary text-white  text-lg  rounded-sm tab:hidden  " : "hidden"}`}>
                <div className='flex justify-end absolute right-2 top-4'>
                    <button className='px-6 ' onClick={handleToggle} >
                        <IoClose className='text-2xl'/>
                    </button>
                </div>
                <ul className='montserrat-font medium:gap-[40px] gap-[20px]  flex flex-col font-semibold items-center  '>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>Donate</li>
                <li className='hover:underline'>About Us</li>
                <li className='hover:underline'>Our Products</li>
                <li className='hover:underline'>Contact Us</li>
                <li className='hover:underline'>Blogs</li>
            </ul>

                
            </div>
        }
        
    </div>
  )
}

export default Navbar