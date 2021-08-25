import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../context/AuthContext'

const App = () => {
  return (
    <>
      
        <Container 
          className='d-flex align-items-center justify-content-center'
          style={{ minHeight: "100vh" }}
        >
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <AuthProvider>
              <PrivateRoute exact path='/' component={Dashboard} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
            </AuthProvider>
          </div>
        </Container>
      
    </>
  )
}

export default App