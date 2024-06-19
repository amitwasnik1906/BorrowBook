import React from 'react'
import "./_sidebar.scss"
import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { RiFolderInfoLine } from "react-icons/ri";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
  return (
    <nav className='sidebar'>
      <div className="sidebar__up">
        <Link to="/">
          <div>
            <IoHomeOutline size={28} />
            <span>Home</span>
          </div>
        </Link >
        <Link to="/">
          <div>
            <RiFolderInfoLine size={28} />
            <span>About us</span>
          </div>
        </Link>
        <Link to="/">
          <div>
            <RiMoneyRupeeCircleFill size={28} />
            <span>Transactions</span>
          </div>
        </Link>
        <Link to="/">
          <div>
            <MdDashboard size={28} />
            <span>Dashbord</span>
          </div>
        </Link>
      </div>

    </nav>
  )
}

export default Sidebar
