import React from 'react'
import { Link } from 'react-router-dom'
import MoreNewsIcon from '../../assets/icons/more-news.svg'
import NewsIcon from '../SVG/News'
import './News.scss'

const News = () => (
  <div className="news col-12 col-lg-12 col-xl-9" data-testid="News">

    <div className=" reusable-heading col-12">
      <NewsIcon fill="#d1d3d4" /> <h2>Шта је ново?</h2>
    </div>
    <div className="news-content">
      <div className="news-content-one">
        <Link to="/">Лорем ипсум границе.</Link>
        <h5>Петар Петровић</h5>
        <p>Једно ограничење употребе лажног текста у веб дизајну је да овај текст се нисам ни читао, не чекајте свој стварни читљивост. Лажна текст такође даје не реалну преглед типографској сивим тоновима.</p>
      </div>
      <div className="news-content-one">
        <Link to="/">Лорем ипсум границе.</Link>
        <h5>Петар Петровић</h5>
        <p>Једно ограничење употребе лажног текста у веб дизајну је да овај текст се нисам ни читао, не чекајте свој стварни читљивост. Лажна текст такође даје не реалну преглед типографској сивим тоновима.</p>
      </div>
      <div className="news-content-one">
        <Link to="/">Лорем ипсум границе.</Link>
        <h5>Петар Петровић</h5>
        <p>Једно ограничење употребе лажног текста у веб дизајну је да овај текст се нисам ни читао, не чекајте свој стварни читљивост. Лажна текст такође даје не реалну преглед типографској сивим тоновима.</p>
      </div>
      <div id="show-more" className="btn-more col-12" role="button">
        <img src={MoreNewsIcon} alt="More News Icon" />&nbsp; ЈОШ
      </div>
    </div>
  </div>
)

export default News
