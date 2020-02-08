
    
import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Midsection = () => (
  <div>
    <section className="section">
      <div className="container" id="projects">
        <h1 className="title is-size-1">Projects</h1>
        <div className="columns is-multiline">
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Link to="/Billboard">
                    <h2 className="title is-size-4">Billboard Top 100</h2>
                  </Link>
                  <p className="subtitle is-size-5">
                  Three analyses of the last 60 years in popular music
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-half">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <Link to="/Marathon">
                    <h2 className="title is-size-4">Webscraping Marathons</h2>
                  </Link>
                  <p className="subtitle is-size-5">
                  Webscraping and visualization of Nashville Rock N Roll Marathons
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Midsection