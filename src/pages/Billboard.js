import React from 'react';
import { Link } from 'gatsby';
import { FaChevronLeft } from 'react-icons/fa';
import '../components/style.scss';

const DFS = () => (
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
          <h1 className="title is-size-1 is-centered">Billboard Hot 100</h1>
         This project looks at trends ine the Billboard Hot 100 from 1958-2019 using Python
         <br />
        <br />
        Space for another paragraph if you want
          <br />
          <br />
          <a className="text is-size-5" href="https://github.com/rossdingwall/nss_capstone_billboard">
          github.com/rossdingwall/nss_capstone_billboard
          </a>
          <br />
        </div>
      </div>
    </div>
  </section>
);

export default DFS;