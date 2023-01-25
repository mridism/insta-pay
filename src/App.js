import { useState, useEffect } from "react";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage/LoginPage";
import DataPage from "./component/DataPage/DataPage";

function App() {
    const [page, setPage] = useState("LandingPage");

    function pageChangeHandler(page) {
        setPage(page);
    }

    // Access to fetch at 'https://api.verifyapi.in/login' (redirected from 'https://api.verifyapi.in/api/user') from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    // useEffect(() => {
    //     let user;
    //     fetch("https://api.verifyapi.in/api/user")
    //         .then((response) => response.json())
    //         .then((data) => (user = data))
    //         .catch((error) => {
    //             console.log("error", error);
    //         });

    //     console.log(user);
    // }, []);

    return (
        <>
            {page === "LandingPage" ? (
                <LandingPage onPageChange={pageChangeHandler} />
            ) : null}
            {page === "LoginPage" ? (
                <LoginPage onPageChange={pageChangeHandler} />
            ) : null}
            {page === "DataPage" ? <DataPage /> : null}
        </>
    );
}

export default App;

// Link: https://documenter.getpostman.com/view/5618532/2s83ziQQUQ#bfee8cac-0bdc-48b2-9576-908c971f37ff
// https://api.verifyapi.in/api//register
