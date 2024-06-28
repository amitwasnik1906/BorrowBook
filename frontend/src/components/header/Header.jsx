import React, { useEffect, useState } from 'react'
import './_header.scss'
import BorrowBook from "/BorrowBook.svg"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getTransactions } from "../../redux/actions/transaction.action"

function Header({ handleToggleSidebar }) {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState("")
    const [sidebar, toggleSidebar] = useState(false)
    const [transactionPage, setTransactionPage] = useState(false)

    const { user, accessToken } = useSelector((state) => state.auth)
    const { activeType } = useSelector(state => state.activeElement)

    const navigte = useNavigate()
    const handleClick = () => {
        navigte("/login")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getTransactions(user.userId, activeType, keyword))
        // setKeyword("")
    }

    useEffect(()=>{
        const currentURL = window.location.href;
        const splitURL = currentURL.split('/')
        if(splitURL[3] === "transactions"){
            setTransactionPage(true)
        }
        else{
            setTransactionPage(false)
        }
    })

    return (
        <nav className='header'>
            <div className='header__left'>
                <img className="header__left " src={BorrowBook} alt="" />
            </div>

            <div className="background threeLine">
                <button className={sidebar ? "menu__icon open" : "menu__icon "} onClick={(e) => {
                    handleToggleSidebar()
                    toggleSidebar(value => !value);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {transactionPage ? <form className={accessToken ? "header__searchBar" : "hide"} onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Search...." type="text" name="text" className="input" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
            </form> : ""}

            <div className='header__right'>
                <button className={accessToken ? 'hide' : ""} onClick={handleClick}>
                    <span>Log In</span>
                </button>
                <img src={user?.photoURL} alt="" className={!accessToken ? 'hide' : ""} />
            </div>
        </nav>
    )
}

export default Header
