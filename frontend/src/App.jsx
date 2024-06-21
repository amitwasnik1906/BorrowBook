import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from "react-bootstrap"
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Transactions from './components/transactions/Transactions'
import TransactionDetails from './components/transactionDetails/TransactionDetails'
import Login from './components/login/Login'
import { useDispatch } from 'react-redux'
import { getTransactionDetails, getTransactions } from './redux/actions/transaction.action'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className='app__container d-flex'>
        <Sidebar />
        <Container fluid className='app__main'>
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getTransactions())
  //   dispatch(getTransactionDetails())
  // },[dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout> <Transactions/> </Layout>}/>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/transactions" element={<Layout> <Transactions/> </Layout>}/>
        <Route exact path="/transaction/:id" element={<Layout> <TransactionDetails/> </Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
