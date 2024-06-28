import React, { useEffect } from 'react'
import "./_transactions.scss"
import TransactionCard from '../transactionCard/TransactionCard'
import Footer from '../footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from '../../redux/actions/transaction.action'

function Transactions() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const { transactions, loading } = useSelector(state => state.transactions)
    const { activeType } = useSelector(state => state.activeElement)
    const { loading: newTransactionLoading } = useSelector(state => state.newTransaction)
    const { loading: deleteTransactionLoading } = useSelector(state => state.transactionDetails)

    useEffect(() => {
        dispatch(getTransactions(user.userId, activeType))
    }, [dispatch, activeType])

    return (
        <>
            {(loading || newTransactionLoading) ? <h1>loading...</h1> : <div className='transactions'>
                <div className='transactions__container '>
                    {
                        transactions.length === 0 ? <h4 className='ms-2 mt-2'>Transaction not Found</h4> :

                            transactions?.map((item) => (
                                <TransactionCard transaction={item} key={item._id} />
                            ))
                    }
                </div>
            </div>}
            <div className='transactions__footer' >
                <Footer />
            </div>
        </>
    )
}

export default Transactions
