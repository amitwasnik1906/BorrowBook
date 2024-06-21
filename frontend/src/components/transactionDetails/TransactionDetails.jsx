import React, { useEffect } from 'react'
import "./_transactionDetails.scss"
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionDetails } from '../../redux/actions/transaction.action';
import { useParams } from 'react-router';
import moment from 'moment';

function TransactionDetails() {
    const dispatch = useDispatch()
    const {id} = useParams()

    const { transaction, loading } = useSelector(state => state.transactionDetails)

    const {amount, name, description, status, type, date} = transaction

    useEffect(() => {
        dispatch(getTransactionDetails(id))
    },[dispatch, id])

    return (
        <div className='details'>
            <div className='details__top'>
                <span>{moment(date).fromNow()}</span>
                <div className='details__top__btn'>
                    <button >
                        <GrUpdate size={17} />
                        <span className='ms-2'>Update</span>
                    </button>
                    <button className='ms-4'>
                        <MdDelete size={22} />
                        <span className='ms-1'>Delete</span>
                    </button>
                </div>
            </div>

            <div className='details__money'>
                {type}
            </div>

            <div className='details__main'>
                <h1>
                    {<FaIndianRupeeSign size={42} />} <span>{amount}</span>
                </h1>
                <h2>Name: {name}</h2>
                <h3>Description:</h3>
                <p>{description}</p>

                <div>Date: {moment(date).format("D MMMM YYYY")}</div>

                <div className='d-flex'>
                    <span className="me-2">Status: </span>
                    <span className={status? "text-success": "text-danger" }>{status? "Paid": "Unpaid"}</span>
                </div>
            </div>

        </div>
    )
}

export default TransactionDetails
