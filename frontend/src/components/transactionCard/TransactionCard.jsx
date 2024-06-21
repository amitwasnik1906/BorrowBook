import React from 'react'
import "./_card.scss"
import { MdDelete } from "react-icons/md";
import moment from "moment"
import { useNavigate } from 'react-router';

function TransactionCard({ transaction }) {
  const { name, amount, description, status, type, date, _id } = transaction

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/transaction/${_id}`)
  }
  return (
    <div className='transactionCard' onClick={handleClick}>
      <div className='transactionCard__left'>
        <img src="data:image/png;base64,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" alt="" />
        <div className='transactionCard__left__info'>
          <h3>{name}</h3>
          <span className='me-4'>{moment(date).format('DD/MM/YYYY')}</span>
          <input type="checkbox" name="" id="" />
          <span className=''>{status ? "Paid" : "Unpaid"}</span>
        </div>
      </div>

      <div className='transactionCard__right '>
        <h3>Rs. {amount}</h3>
        <span className='me-4'>{type}</span>
        <MdDelete size={24} color='red' />
      </div>

    </div>
  )
}

export default TransactionCard
