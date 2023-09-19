import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faSquareCaretLeft,
  faSquareCaretRight,
  faSquareCaretUp,
  faSquareCaretDown,
} from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../css/Help.css";

const Help = () => {
  const [isClick, setIsClick] = useState(false);
  const onClickToggle = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <div className="help">
      {!isClick ? (
        <FontAwesomeIcon
          icon={faCircleQuestion}
          className="question"
          onClick={onClickToggle}
        />
      ) : (
        <FontAwesomeIcon icon={faCaretDown} className="question" onClick={onClickToggle} />
      )}
      {isClick && (
        <div className="help__box">
          <div className="icons">
            <FontAwesomeIcon icon={faSquareCaretLeft} />
            <FontAwesomeIcon icon={faSquareCaretRight} />
            <FontAwesomeIcon icon={faSquareCaretUp} />
            <FontAwesomeIcon icon={faSquareCaretDown} />
            <div className="spacebar">SPACE</div>
          </div>

          <div className="texts">
            <span>Move Left</span>
            <span>Move Right</span>
            <span>Rotate Right</span>
            <span>Soft Drop</span>
            <span>Hard Drop</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Help;
