const withDisable = (Component) => {
  return (props) => {
    return <Component {...props} isDisabled={true} />;
  };
};

const Button = ({ isDisabled }) => (
  <button disabled={isDisabled}>Click</button>
);

export default withDisable(Button);