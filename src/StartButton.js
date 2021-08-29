import { Link } from "react-router-dom";

const StartButton = () => {
    return (
        <div className="landing">
            <Link className="button" to="/start"> generate a business plan</Link>
        </div>
    );
}
 
export default StartButton;