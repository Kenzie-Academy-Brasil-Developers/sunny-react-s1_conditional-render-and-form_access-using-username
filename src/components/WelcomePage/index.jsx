const WelcomePage = ({ user, setIsLoggedIn }) => {
    const handleLogout = () => setIsLoggedIn(false);
    return(
        <>
        <h1>Welcome, {user}!</h1>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
};

export default WelcomePage;