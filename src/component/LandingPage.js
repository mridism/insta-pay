// import Navbar from "./Navbar";
import logo from "../../src/logo.png";
import "./LandingPage.css";
import { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

function LandingPage(props) {
    const { onPageChange } = props;

    const [show, setShow] = useState(false);

    const lisItems = (
        <>
            <li>Products</li>
            <li>Developer API</li>
            <li>Pricing</li>
            <li>Company</li>
        </>
    );

    function pageChangeHandler() {
        onPageChange("LoginPage");
    }

    const header = (
        <div className="header-container">
            <img src={logo} alt="logo" />

            <ul className="list-continer">
                <div className="hover-item">
                    <li>Products</li>
                    <span className="dropdown-list">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </span>
                </div>
                <li>Developer API</li>
                <li>Pricing</li>
                <li>Company</li>
            </ul>

            <div className="button-container">
                <button onClick={pageChangeHandler}>Login</button>
            </div>

            <div className="hamburger-container" onClick={() => setShow(true)}>
                {show === false ? (
                    <RxHamburgerMenu />
                ) : (
                    <div>
                        <button
                            onClick={() =>
                                setShow((prev) => {
                                    let newState = !prev;
                                    console.log(newState);
                                    return newState;
                                })
                            }
                        >
                            x
                        </button>
                        <ul>{lisItems}</ul>
                    </div>
                )}
            </div>
        </div>
    );

    const footer = (
        <div className="footer-container">
            <h2>InstantPay</h2>
            <p>
                Millions of businesses of all sizes trust Instantpay's
                full-featured current account & debit card that combines
                payments, collections, expense management, and banking APIs to
                manage their businesses efficiently.
            </p>
        </div>
    );

    return (
        <div className="landing-container">
            {header}
            {footer}
        </div>
    );
}
export default LandingPage;
