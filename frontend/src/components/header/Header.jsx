import React, { useState } from 'react'
import './_header.scss'
import BorrowBook from "/BorrowBook.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getTransactions } from "../../redux/actions/transaction.action"

function Header({ handleToggleSidebar }) {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState("")

    const { user, accessToken } = useSelector((state) => state.auth)
    const { activeType } = useSelector(state => state.activeElement)

    const navigte = useNavigate()
    const handleClick = () => {
        navigte("/login")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getTransactions(user.userId, activeType, keyword))
        setKeyword("")
    }

    return (
        <nav className='header'>
            <div className='header__left'>
                <img className="header__left " src={BorrowBook} alt="" />
            </div>
            
            <div className="background threeLine">
                <button className="menu__icon threeLine" onClick={handleToggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <form className={accessToken ? "header__searchBar" : "hide"} onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Search...." type="text" name="text" className="input" onChange={(e) => setKeyword(e.target.value)} />
            </form>

            <div className='header__right'>
                <button className={accessToken ? 'hide' : ""} onClick={handleClick}>
                    <span>Log In</span>
                </button>
                <img src={user?.photoURL} alt="icon" className={!accessToken ? 'hide' : ""} />
            </div>
        </nav>
    )
}

export default Header
