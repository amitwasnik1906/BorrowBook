import { useState } from 'react'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from "react-bootstrap"
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Transactions from './components/transactions/Transactions'

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

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout> <Transactions/> </Layout>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
