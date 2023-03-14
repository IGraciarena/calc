import "../style-sheets/Button.css";

function Button(props) {
  const isOperator = (val) => {
    return isNaN(val) && val !== "." && val !== "=";
  };

  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
