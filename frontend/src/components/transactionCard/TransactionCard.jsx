import React from 'react'
import "./_card.scss"
import { MdDelete } from "react-icons/md";
import moment from "moment"
import { useNavigate } from 'react-router';
import { LuArrowUpLeftSquare } from "react-icons/lu";
import { AvatarComponent } from 'avatar-initials';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTransaction } from '../../redux/actions/transaction.action';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { MdOutlineCurrencyRupee } from "react-icons/md";

function TransactionCard({ transaction }) {
  const dispatch = useDispatch()
  const { name, amount, description, status, type, date, _id, createdAt } = transaction
  const { activeType } = useSelector((state) => state.activeElement)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/transaction/${_id}`)
  }


  const handleDelete = () => {
    dispatch(deleteTransaction(_id, activeType))
  }

  return (
    <div className='transactionCard' >
      <div className='transactionCard__left'>
        <AvatarComponent
          classes="rounded-full"
          useGravatar={false}
          size={60}
          color="#000000"
          background="#F5E7B2"
          fontSize={22}
          fontWeight={500}
          offsetY={32}
          initials={`${name[0]}${name.split(' ')[1]?.charAt(0) ? name.split(' ')[1].charAt(0) : ""}`}
        />

        <div className='transactionCard__left__info'>
          <h3>{name}</h3>
          <span className={transaction?.status ? " text-success me-3" : "text-danger"}>{status ? "Paid" : "Unpaid"}</span>
          <span className='ms-4'>{moment(createdAt).fromNow()}</span>
        </div>
      </div>

      <div className='transactionCard__right '>
        <div className='amount'>
          <div className='d-flex'>
            <MdOutlineCurrencyRupee size={30}/>
            <h3>{amount}</h3>
          </div>
          <span className='me-4'>{type}</span>
        </div>
        <div className=' icons'>
          <LuArrowUpLeftSquare size={28} onClick={handleClick} />
          <Popup trigger={<button > <MdDelete size={28} color='red' /></button>} position="left">
            <div className='confirm'>
              <h3>Are you sure?</h3>
              <p>Do you really want to continue ? This process cannot be undone</p>
              <button onClick={handleDelete}>Confirm</button>
            </div>
          </Popup>
        </div>
      </div>

    </div>
  )
}

export default TransactionCard
