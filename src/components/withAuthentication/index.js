const WithAuthentication = ({ children, reverse = false }) => {
    const isLoggedIn = !!window.localStorage.getItem('access_token');

    if (!children) throw new Error("Missing children prop for <WithAuthentication> component");

    return reverse
        ? !isLoggedIn ? children : null
        : isLoggedIn ? children : null;
};

export default WithAuthentication;