import React from 'react'
import { Link } from 'react-router-dom'
import MoreNewsIcon from '../../assets/icons/more-news.svg'
import NewsIcon from '../SVG/News'
import './News.scss'

const News = () => (
  <div className="news col-12 col-lg-12 col-xl-9" data-testid="News">

    <div className=" reusable-heading col-12">
      <NewsIcon fill="#d1d3d4" /> <h2>What&apos;s new?</h2>
    </div>
    <div className="news-content">
      <div className="news-content-one">
        <Link to="/"> Quos quisquam neque aut reprehenderit</Link>
        <h5>Petar Petrovic</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum qui natus, incidunt corrupti minus maiores doloribus mollitia saepe ratione aspernatur! Quos quisquam neque aut reprehenderit, earum cum quod eligendi!</p>
      </div>
      <div className="news-content-one">
        <Link to="/"> Est laborum qui natus, incidunt corrupti minus maiores</Link>
        <h5>Petar Petrovic</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum qui natus, incidunt corrupti minus maiores doloribus mollitia saepe ratione aspernatur! Quos quisquam neque aut reprehenderit, earum cum quod eligendi!</p>
      </div>
      <div className="news-content-one">
        <Link to="/">  Quo natus obcaecati consequatur culpa architecto excepturi</Link>
        <h5>Petar Petrovic</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum qui natus, incidunt corrupti minus maiores doloribus mollitia saepe ratione aspernatur! Quos quisquam neque aut reprehenderit, earum cum quod eligendi!</p>
      </div>
      <div id="show-more" className="btn-more col-12" role="button">
        <img src={MoreNewsIcon} alt="More News Icon" />&nbsp; MORE
      </div>
    </div>
  </div>
)

export default News
