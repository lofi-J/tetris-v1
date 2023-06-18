import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faSquareCaretLeft, faSquareCaretRight, faSquareCaretUp, faSquareCaretDown } from "@fortawesome/free-regular-svg-icons";
import "../css/Help.css";

const Help = () => {
    return(
        <div className="help">
            <div className="icons">
                <FontAwesomeIcon icon={faCircleQuestion} className="question"/>
                <FontAwesomeIcon icon={faSquareCaretLeft} />
                <FontAwesomeIcon icon={faSquareCaretRight} />
                <FontAwesomeIcon icon={faSquareCaretUp} />
                <FontAwesomeIcon icon={faSquareCaretDown} />
                <div className="spacebar">SPACE</div>
            </div>

            <div className="texts">
                <h1>H E L P</h1>
                <span>Move Left</span>
                <span>Move Right</span>
                <span>Rotate Right</span>
                <span>Soft Drop</span>
                <span>Hard Drop</span>
            </div>
        </div>
    );
}

export default Help;