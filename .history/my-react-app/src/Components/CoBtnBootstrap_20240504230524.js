const CoButton=(props)=>{
    return (
      <button  className="btn" variant={props.variant} onClick={props.onClick}>
        {props.name}
      </button>
    );
  }

export default CoButton;