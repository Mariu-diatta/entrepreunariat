import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipLayer({children,...props}) {
  return (


        <OverlayTrigger
          placement={'bottom'}
          overlay={
            <Tooltip>
              {props.message}.
            </Tooltip>
          }
        >
          {children}
        </OverlayTrigger>

  );
}

export default TooltipLayer;