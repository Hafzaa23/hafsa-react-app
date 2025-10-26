function WelcomeMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h2>Welcome back!</h2>;
  } else {
    return <h2>please log in</h2>;
  }
}

export default WelcomeMessage;
