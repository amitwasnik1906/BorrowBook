import React from 'react'
import "./_home.scss"
import BorrowBook from "/BorrowBook.svg"
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/transactions")
  }

  return (
    <div className='homeContainer'>
      <div className="homeContainer__hero">
        <h2>Keep Track of Your Borrowed and Lent Money Effortlessly!</h2>

        <div className="card">
          <div className='logo'>
            <img src={BorrowBook} alt="" />
          </div>
        </div>

        <h1><a  className="btn-shine">BorrowBook</a>
        </h1>

        <div className='homeContainer__hero__description'>
          <p>It is designed to help you keep track of borrowed and lent money. Whether you frequently lend money to friends or borrow from them, BorrowBook ensures that you never lose track of your transactions.</p>
          <p>Track, Manage, and Settle Your Financial Transactions Seamlessly</p>
        </div>
      </div>

      <div className="homeContainer__button">
        <div className="container">
          <button className="button" onClick={handleClick}>Go to the Transactions</button>
        </div>
      </div>

      <div className='homeContainer__info d-flex'>

        <div className="e-card playing ">
          <div className="image"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="homeContainer__info__features">
            <h3>Features</h3>
            <div>
              <li>Track borrowing and lending.</li>
              <li>Easy transaction management.</li>
              <li>Detailed transaction history.</li>
              <li>User-friendly interface.</li>
            </div>
          </div>
        </div>

        <div className="e-card playing">
          <div className="image"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="homeContainer__info__how">
            <h3>How It Works</h3>

            <div >
              <li>Create an account.</li>
              <li>Add your transactions.</li>
              <li>Monitor and manage your money flow.</li>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home
