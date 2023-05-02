import Link from "next/link";
import styled from "styled-components";
import Head from 'next/head'
const Header = () => {
  return (
    <HeaderSection>
      <Head>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>

      </Head>
      <nav>
      <div className="container-fluid bg-light position-relative shadow">
  <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
    <a
      href=""
      className="navbar-brand font-weight-bold text-secondary"
      
    >
      <i className="flaticon-043-teddy-bear" />
      <span className="text-primary">payments</span>
    </a>
    <button
      type="button"
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="collapse navbar-collapse justify-content-between"
      id="navbarCollapse"
    >
      <div className="navbar-nav font-weight-bold mx-auto ">
      <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
          >
            business start
          </a>
          <div className="dropdown-menu rounded-0 m-0">
            <a href="blog.html" className="dropdown-item">
            Application for business registration
            </a>
            <a href="single.html" className="dropdown-item">            
            Direct application for mail-order business
            </a>
            <a href="single.html" className="dropdown-item">            
            sales ledger
            </a>
            <a href="single.html" className="dropdown-item">            
            Safety number for business
            </a>
          </div>
        </div>
        <a href="payment_service.html" className="nav-item nav-link">
        payment service
        </a>
        <a href="usage_fee.html" className="nav-item nav-link">
        usage fee
        </a>
        <a href="customer_service_center.html" className="nav-item nav-link">
        customer service center
        </a>
        <a href="Developer_Center.html" className="nav-item nav-link">
        Developer Center
        </a>
        <a href="contact.html" className="nav-item nav-link">
        Check payment details
        </a>
        <a href="" className=" nav-item login btn btn-primary px-4">
        log in
      </a>
      <a href="contact.html" className="nav-item apply">
      Apply for electronic payment
        </a>
      </div>
      
      
    </div>
  </nav>
</div>

      </nav>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.header`
  text-align: center;
  padding: 1em;
  nav {
    a {
      text-decoration: none;
      display: inline-block;
    }
  }
`;

