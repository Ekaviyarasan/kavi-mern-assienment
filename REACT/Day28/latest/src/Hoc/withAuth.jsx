const withAuth = (Component) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      return <h1>Access Denied</h1>;
    }

    return <Component {...props} />;
  };
};

// Usage
const Dashboard = () => <h1>Protected Dashboard</h1>;

export default withAuth(Dashboard);