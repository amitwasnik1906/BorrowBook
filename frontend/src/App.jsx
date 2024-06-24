import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from "react-bootstrap"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Transactions from './components/transactions/Transactions'
import TransactionDetails from './components/transactionDetails/TransactionDetails'
import Login from './components/login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionDetails, getTransactions } from './redux/actions/transaction.action'
import { loadUser } from './redux/actions/auth.action'

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => {
    toggleSidebar(value => !value)
  }

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className='app__container d-flex'>
        <Sidebar sidebar={sidebar} />
        <Container fluid className='app__main'>
          {children}
        </Container>
      </div>
    </>
  )
}

function App() {
  const { user, accessToken, loading } = useSelector((state) => state.auth)

  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (

    <Routes>
      <Route exact path="/" element={<Layout> <h1>home</h1> </Layout>} />
      <Route exact path="/about" element={<Layout> <h1>About us</h1> </Layout>} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/transactions/" element={<Layout> {accessToken ? <Transactions /> : <h1>login to access</h1>}</Layout>} />

      <Route exact path="/transaction/:id" element={<Layout> {accessToken ? <TransactionDetails /> : <h1>login to access</h1>}</Layout>} />

      <Route exact path="/dashbord" element={<Layout> {accessToken ? <h1>Under Process </h1> : <h1>login to access</h1>}</Layout>} />

      <Route path="*" element={<h1>404 NOT FOUND</h1>} />

    </Routes>

  )
}

export default App
