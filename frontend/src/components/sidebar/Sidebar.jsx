import React, { useState } from 'react'
import "./_sidebar.scss"
import { Link } from "react-router-dom"
import { IoHomeOutline, IoReturnDownBackOutline } from "react-icons/io5";
import { RiFolderInfoLine } from "react-icons/ri";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth.action';
import { IoReorderThreeOutline } from "react-icons/io5";

function Sidebar({sidebar}) {
  
  const [activeElement, setActiveElement] = useState('')

  const { accessToken } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return (
    <nav className={sidebar ? "sidebar open" : "sidebar "}>
      <div className="sidebar__up">
        <Link to="/" onClick={(e)=>handleClick("Home")} className={activeElement === "Home" ? 'active' : ""}>
          <div>
            <IoHomeOutline size={28} />
            <span>Home</span>
          </div>
        </Link >

        <Link to="/about" onClick={(e)=>handleClick("About")} className={activeElement === "About" ? 'active' : ""}>
          <div>
            <RiFolderInfoLine size={28} />
            <span>About us</span>
          </div>
        </Link>

        <Link to={`/transactions`} onClick={(e)=>handleClick("Transactions")} className={activeElement === "Transactions" ? 'active' : ""}>
          <div>
            <RiMoneyRupeeCircleFill size={28} />
            <span>Transactions</span>
          </div>
        </Link>
        <Link to="/dashbord" onClick={(e)=>handleClick("Dashbord")} className={activeElement === "Dashbord" ? 'active' : ""}>
          <div>
            <MdDashboard size={28} />
            <span>Dashbord</span>
          </div>
        </Link>
      </div>

      <div className='sidebar__down'>
        <div className={accessToken ? "" : 'hide'}>
          <button className="Btn" onClick={handleLogout}>
            <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>

            <div className="text">Logout</div>
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Sidebar
