const Presentation = (props) => {
  console.log(props);
  return (
    <p
      style={{
        color: props.color,
      }}

      //   className={props.color}
    >
      Je m'appelle {props.name} et J'ai {props.age} ans
    </p>
  );
};

export default Presentation;
