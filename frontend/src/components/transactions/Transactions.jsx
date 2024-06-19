import React from 'react'
import "./_transactions.scss"
import { Container } from 'react-bootstrap'
import TransactionCard from '../transactionCard/TransactionCard'
import Footer from '../footer/Footer'

function Transactions() {
    return (
        <div className='transactions'>
            <div className='transactions__container '>
                {
                    [...Array(40)].map(() => (
                        <TransactionCard />
                    ))
                }
            </div>
            <footer className='transactions__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Transactions
