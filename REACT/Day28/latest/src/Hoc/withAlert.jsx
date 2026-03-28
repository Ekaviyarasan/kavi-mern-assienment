const withAlert = (Component) => {
  return (props) => {
    const handleClick = () => {
      alert("Button clicked from HOC");
    };

    return <Component {...props} handleClick={handleClick} />;
  };
};

// Usage
const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Click</button>
);

export default withAlert(Button);