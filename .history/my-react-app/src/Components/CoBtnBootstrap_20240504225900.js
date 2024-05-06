const CoButton=(props)=>{
    return (
      <button  className="btn"  onClick={props.onClick}>
        {props.name}
      </button>
    );
  }

export default CoButton;