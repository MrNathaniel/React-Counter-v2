const Button = (props) => {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          props.setCounter(props.counter - 1);
        }}
      >
        -
      </button>

      <button
        onClick={() => {
          props.setCounter(props.counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.setCounter((props.counter = 0));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
