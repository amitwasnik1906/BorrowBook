import React from 'react'
import "./_footer.scss"
import { Row, Col } from 'react-bootstrap'
import { FaCirclePlus } from "react-icons/fa6";

function Footer() {
  return (
    <Row className='foot'>
      <Col xs={3} className='text-center clm'>
        <button className="button2">All</button>
      </Col>
      <Col xs={3} className='text-center clm'>
      <button className="button2">Lend</button>
      </Col>
      <Col xs={3} className='text-center clm'>
      <button className="button2">Borrow</button>
      </Col>
      <Col xs={3} className='text-center clm'>
      <button className="button2"><FaCirclePlus size={24}/></button>
      </Col>
    </Row>
  )
}

export default Footer
