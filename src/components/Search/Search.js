import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormGroup } from 'react-bootstrap'
import searchIcon from '../../assets/icons/search.svg'
import './Search.scss'

const Search = (props) => {
  const [innerWidth, setInnerWidth] = useState(false)
  useEffect(() => {
    if (window.innerWidth < 800) {
      setInnerWidth(true)
    }
  }, [innerWidth])

  const style = innerWidth
    ? {
      transform: 'translate(0.5rem, -2.3rem)',
      zIndex: 2,
      display: 'block',
      fontSize: '20.2px',
      pointerEvents: 'none',
      color: '#1B5A7A',
    }
    : {
      position: 'absolute',
      zIndex: 2,
      display: 'block',
      fontSize: '20.2px',
      pointerEvents: 'none',
      color: '#1B5A7A',
      marginLeft: '.8rem',
    }
  return (
    <Form inline className={`form col-12 col-lg-8 ${props.width}`} data-testid="Search">
      <FormGroup className="has-search formGroup no-gutters col-12 col-lg-12 col-xl-12">
        <FormControl type="text" placeholder="Search" className="pl-5 inputForm col-12 col-xl-12" />
        <img src={searchIcon} alt="search icon" style={style} />
      </FormGroup>
    </Form>
  )
}

export default Search
