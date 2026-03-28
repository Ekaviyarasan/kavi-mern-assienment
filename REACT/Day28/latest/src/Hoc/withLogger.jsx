const withLogger = (Component) => {
  return (props) => {
    const handleChange = (e) => {
      console.log(e.target.value);
    };

    return <Component {...props} handleChange={handleChange} />;
  };
};

const Input = ({ handleChange }) => (
  <input onChange={handleChange} placeholder="Type..." />
);

export default withLogger(Input);