import React, { useEffect } from 'react'
import "./_transactions.scss"
import { Container } from 'react-bootstrap'
import TransactionCard from '../transactionCard/TransactionCard'
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../redux/actions/transaction.action'

function Transactions() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const transactions = useSelector(state => state.transactions.transactions)
    const { activeType } = useSelector(state => state.activeElement)

    useEffect(() => {
        dispatch(getTransactions(user.userId, activeType))
    }, [dispatch,activeType])

    return (
        <div className='transactions'>
            <div className='transactions__container '>
                {
                    transactions.map((item) => (
                        <TransactionCard transaction={item} key={item._id} />
                    ))
                }
            </div>
            <Container fluid className='transactions__footer' >
                <Footer />
            </Container>
        </div>
    )
}

export default Transactions
