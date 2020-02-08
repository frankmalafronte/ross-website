import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';
import SettlersImg from '../images/Settlers.png'

const Settlers = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <Link to="/#projects">
          <button
            type="button"
            className="button is-outlined is-primary is-medium"
          >
            <FaChevronLeft />
          </button>
        </Link>
        <div className="column is-three-quarters is-size-5">
          <h1 className="title is-size-1 is-centered">Webscraping Marathons</h1>
          Webscraping and visualization of Nashville Rock N Roll Marathons, 2016-19

          <br />
          <br />
          <a className="text is-size-5" href="https://github.com/rossdingwall/webscraping_marathons">
          github.com/rossdingwall/webscraping_marathons
          </a>
          <br />
          <a className="text is-size-5" href='https://github.com/Interactive-NYC/Settlers-Of-Catan'>
            source code
          </a>
          
        </div>
      </div>
      <img src={SettlersImg}/>
    </div>
  </section>
);

export default Settlers;