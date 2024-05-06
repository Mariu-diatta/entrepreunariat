import { Button } from "react-bootstrap";

const BtnSmt=()=>{
    return(
        <>
            <Button  type="submit" value="submit"  className="u-active-palette-3-base  u-border-none u-btn u-btn-round u-btn-submit u-button-style u-hover-palette-3-base u-radius-50" style={{button:'blue'}}>{props.label}</Button>
        </>
    )
}

export default BtnSmt;