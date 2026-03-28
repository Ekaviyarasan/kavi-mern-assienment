const withTitle = (Component) => {
  return (props) => {
    return <Component {...props} title="HOC Modified Text" />;
  };
};

const TitleComponent = ({ title }) => <h1>{title}</h1>;

export default withTitle(TitleComponent);