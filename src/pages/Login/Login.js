import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const history = useHistory()
  const submitHandler = () => {
    console.log('sadsada')
    history.push('/theme')
  }
  return (
    <div className="hero" data-testid="Login">
      <div className="hero-text-wrapper col-12 col-xl-6">
        <div className="hero-text col-12 col-xl-8 no-gutters">
          <h1>Пријава</h1>
          <Form inline className="form col-12 col-xl-9" data-testid="Search">
            <Form.Group controlId="formBasicPassword" className="col-12 col-xl-12 no-gutters">
              <Form.Label>Унесите емаил адресу</Form.Label>
              <FormControl
                type="text"
                className="col-12 col-xl-12"
              />
            </Form.Group>
            <Form.Group controlId="dssdf" className="col-12 col-xl-12 no-gutters">
              <Form.Label>Унесите лозинку</Form.Label>
              <FormControl
                type="text"
                className="col-12 col-xl-12"
              />
            </Form.Group>
            <div className="form-block">
              <Link to="/">Заборављена лозинка?</Link>
              {/* <Link to="/">Sign up</Link> */}
              <button onClick={submitHandler} type="submit">
                Потврди
              </button>
            </div>

          </Form>

        </div>
      </div>
      <div className="hero-image-wrapper col-12 col-xl-6">
        <div className="hero-image col-12 col-xl-8" />
      </div>
    </div>
  )
}
export default Login
