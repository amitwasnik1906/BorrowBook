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
import Home from "./components/home/Home"
import About from './components/about/About'

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
      <Route exact path="/" element={<Layout> <Home/> </Layout>} />
      <Route exact path="/about" element={<Layout> <About/> </Layout>} />

      <Route exact path="/login" element={<Login />} />

      <Route exact path="/transactions" element={<Layout> {accessToken ? <Transactions /> : <h1>Do login to access this feature</h1>}</Layout>} />

      <Route exact path="/transaction/:id" element={<Layout> {accessToken ? <TransactionDetails /> : <h1>Do login to access this feature</h1>}</Layout>} />

      <Route exact path="/dashbord" element={<Layout> {accessToken ? <h1>This Feature is currently not available</h1> : <h1>Do login to access this feature</h1>}</Layout>} />

      <Route path="*" element={<h1>404 NOT FOUND</h1>} />

    </Routes>

  )
}

export default App
