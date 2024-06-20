import React from 'react'
import "./_transactionDetails.scss"

function TransactionDetails() {
    return (
        <div className='details'>
            <div className='details__top'>
                <span>2 days ago</span>
                <div className='details__top__btn'>
                    <button >
                        <span>Update</span>
                    </button>
                    <button className='ms-4'>
                        <span>Delete</span>
                    </button>
                </div>
            </div>

            <div className='details__money '>
                Borrow
            </div>

            <div className='details__main'>
                <h1>Rs.  5000</h1>
                <h2>Name: Amit Wasnik</h2>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam doloribus fugit voluptate reiciendis, beatae temporibus corporis, laborum laudantium ad maiores accusantium totam exercitationem quisquam numquam, debitis expedita saepe modi.</p>
                <div>Date: 19 june 2024</div>
                <div className='d-flex'>
                    <span>Status: </span>
                    <input type="checkbox" name="" id="" />
                    <span className=''>Paid</span>
                </div>
            </div>
        </div>
    )
}

export default TransactionDetails
