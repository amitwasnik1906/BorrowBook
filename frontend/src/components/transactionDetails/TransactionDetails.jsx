import React, { useEffect, useState } from 'react'
import "./_transactionDetails.scss"
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction, getTransactionDetails, updateTransaction } from '../../redux/actions/transaction.action';
import { useNavigate, useParams } from 'react-router';
import moment from 'moment';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function TransactionDetails() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const { transaction, loading } = useSelector(state => state.transactionDetails)

    // const [name, setName] = useState(transaction?.name)
    // const [amount, setAmount] = useState(transaction?.amount)
    // const [description, setDescription] = useState(transaction?.description)
    // const [type, setType] = useState(transaction?.type)
    // const [status, setStatus] = useState(transaction?.status)
    // const [date, setDate] = useState(transaction?.date)

    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [type, setType] = useState("Borrow")
    const [status, setStatus] = useState(false)
    const [date, setDate] = useState(new Date)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateTransaction(id, { name, amount, description, type, status, date }))
        setName("")
        setAmount("")
    }

    const navigate = useNavigate()
    const handleDelete = () => {
        dispatch(deleteTransaction(id))
        navigate("/transactions")
    }

    useEffect(() => {
        dispatch(getTransactionDetails(id))
    }, [dispatch, id])

    return (
        <>
            {loading ? <h4>loading...</h4> : <div className='details'>
                <div className='details__top'>
                    <span><div>Created:</div>{moment(transaction?.createdAt).fromNow()}</span>
                    <div className='details__top__btn'>

                        <Popup trigger={<button >
                            <GrUpdate size={17} />
                            <span className='ms-2'>Update</span>
                        </button>} position="bottom">
                            <section className="add-card page newTransactionPopUp">
                                <form className="form" onSubmit={handleSubmit}>
                                    <label htmlFor="name" className="label">
                                        <span className="title">Name</span>
                                        <input
                                            className="input-field"
                                            type="text"
                                            name="input-name"
                                            title="Input title"
                                            placeholder="Enter name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label htmlFor="amount" className="label">
                                        <span className="title">Amount</span>
                                        <input
                                            id="amount"
                                            className="input-field"
                                            type="number"
                                            name="input-name"
                                            title="Input title"
                                            placeholder="Enter amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            required
                                        />
                                    </label>

                                    <label htmlFor="description" className="label">
                                        <span className="title">Description</span>
                                        <input
                                            type="text"
                                            name=""
                                            id="description"
                                            className="input-field"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </label>

                                    <div className="split">
                                        <label htmlFor="type" className="label">
                                            <span className="title">Type</span>
                                            <select id="type" className='input-field' onChange={(e) => { setType(e.target.value) }}>
                                                <option value="Borrow">Borrow</option>
                                                <option value="Lend">Lend</option>
                                            </select>
                                        </label>

                                        <label htmlFor="status" className="label">
                                            <span className="title">Status</span>
                                            <select id="status" className='input-field' onChange={(e) => { e.target.value === "Paid" ? setStatus(true) : setStatus(false) }}>
                                                <option value="Unpaid">Unpaid</option>
                                                <option value="Paid">Paid</option>
                                            </select>
                                        </label>
                                    </div>

                                    <label htmlFor="datePicker" className="label ">
                                        <span className="title">Date</span>
                                        <DatePicker selected={date} className="input-field datePicker" onChange={(e) => setDate(e)} />
                                    </label>

                                    <input className="checkout-btn" type="submit" value="Update" />
                                </form>
                            </section>

                        </Popup>

                        <Popup trigger={<button className='ms-4'>
                            <MdDelete size={22} />
                            <span className='ms-1'>Delete</span>
                        </button>} position="bottom">

                            <div className='confirm'>
                                <h3>Are you sure?</h3>
                                <p>Do you really want to continue ? This process cannot be undone</p>
                                <button onClick={handleDelete}>Confirm</button>
                            </div>
                        </Popup>


                    </div>
                </div>

                <div className='details__money'>
                    {transaction?.type}
                </div>

                <div className='details__main'>
                    <h1>
                        {<FaIndianRupeeSign size={42} />} <span>{transaction?.amount}</span>
                    </h1>
                    <h2>Name: {transaction?.name}</h2>
                    <h3>Description:</h3>
                    <p>{transaction?.description ? transaction.description : "not available"}</p>

                    <div>Date: {moment(transaction?.date).format("D MMMM YYYY")}</div>

                    <div className='d-flex'>
                        <span className="me-2">Status: </span>
                        <span className={transaction?.status ? "text-success" : "text-danger"}>{transaction?.status ? "Paid" : "Unpaid"}</span>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default TransactionDetails
