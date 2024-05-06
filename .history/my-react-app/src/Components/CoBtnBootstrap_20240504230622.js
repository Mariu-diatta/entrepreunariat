const CoButton=(props)=>{
    return (
        <Link to='#' className='' onClick={props.onClick} >
            <button  className="btn" variant={props.variant} onClick={props.onClick}>
                {props.name}
            </button>
        </Link>
    );
  }

export default CoButton;