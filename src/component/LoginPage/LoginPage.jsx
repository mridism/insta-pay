import "./LoginPage.css";

function LoginPage(props) {
    const { onPageChange } = props;

    function submitHandler(event) {
        event.preventDefault();

        onPageChange("DataPage");
    }

    const form = (
        <form onSubmit={submitHandler} className="form">
            <div className="input-container">
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="username" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" id="password" />
            </div>

            <button type="submit">Proceed</button>
        </form>
    );

    const heading = (
        <div className="loginPage-heder-container">
            <h3>Welcome</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                rerum impedit amet. Natus, dignissimos ullam?
            </p>
        </div>
    );

    return (
        <div className="loginPage-container">
            <div className="empty-div"></div>
            <div className="loginPage-content">
                {heading}
                {form}
            </div>
        </div>
    );
}

export default LoginPage;
