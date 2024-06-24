import React, { useEffect, useState } from 'react'
import "./_footer.scss"
import { Row, Col } from 'react-bootstrap'
import { FaCirclePlus } from "react-icons/fa6";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, newTransaction } from '../../redux/actions/transaction.action';
import { setActiveElement as changeActiveElement } from '../../redux/actions/activeElement.action';

function Footer() {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState()
  const [description, setDescription] = useState("")
  const [type, setType] = useState("Borrow")
  const [status, setStatus] = useState(false)
  const [date, setDate] = useState(new Date)

  const { userId, userName, userEmail } = useSelector((state) => state.auth.user)
  const { activeType } = useSelector((state) => state.activeElement)

  const [activeElement, setActiveElement] = useState("All")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(newTransaction({ name, amount, description, type, status, date, userId, userEmail, userName }, activeType))
    setName("")
    setAmount("")
  }

  const handleClick = (value) => {
    setActiveElement(value)
    dispatch(changeActiveElement(value))

    dispatch(getTransactions(userId, value))
  }

  useEffect(() => {
    dispatch(changeActiveElement(activeElement ))
  },[dispatch])

  return (
    <Row className='foot'>
      <Col xs={3} className='text-center clm' >
        <button className={activeElement === "All" ? 'button2 activeElement' : "button2"} onClick={(e) => handleClick("All")} >All</button >
      </Col>
      <Col xs={3} className='text-center clm'>
        <button className={activeElement === "Lend" ? 'button2 activeElement' : "button2"} onClick={(e) => handleClick("Lend")}>Lend</button>
      </Col>
      <Col xs={3} className='text-center clm'>
        <button className={activeElement === "Borrow" ? 'button2 activeElement' : "button2"} onClick={(e) => handleClick("Borrow")}>Borrow</button>
      </Col>
      <Col xs={3} className='text-center clm '>
        <Popup trigger={<button className="button2"><FaCirclePlus size={24} /></button>} position="top">
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

              <input className="checkout-btn" type="submit" value="Create" />
            </form>
          </section>

        </Popup>
      </Col>
    </Row>
  )
}

export default Footer
