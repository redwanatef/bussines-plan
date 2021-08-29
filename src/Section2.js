import { useState } from "react";
import { useHistory } from "react-router-dom";

const Section2 = () => {
    const [investment, setinvestment] = useState("no");
    const [ansY, setansY] = useState(false);
    const [ansN, setansN] = useState(false);
    const [body, setbody] = useState();
    const [caution, setcaution] = useState();
    const history = useHistory();


    const handleChange = (e) => {
        setansN(false); setansY(false);
        setinvestment(e.target.value)
        if (e.target.value === "yes")
            setansY(true)
        else
            setansN(true)
    }

    const handleinput = (e) => {

        setbody(e.target.value);
    }


    const handlesubmit = (e) => {
        setcaution();
        e.preventDefault();
        if (parseFloat(body) < 0)
            setcaution("enter a positive number")
        else if (!isNaN(parseFloat(body)) || ansN === true)
            history.push('/finish');
    }
    return (
        <div className="section-2">
            <div className="container">
                <h2>Section 2</h2>
                <p>1. Did you have an investment?</p>
                <form >
                    <input type="radio" name="yes" value="yes" onChange={handleChange} checked={ansY} />
                    <label>A. yes</label> <br /><br />
                    <input type="radio" name="no" value="no" onChange={handleChange} checked={ansN} />
                    <label>B. no</label><br /><br />
                    <p>2. how much was the investment?</p>
                    {investment === "yes" && <input
                        className="price"
                        required
                        placeholder="enter the number here..."
                        type="number"
                        value={body}
                        onChange={handleinput}
                    />}
                    {investment === "no" && <input disabled className="price" />}

                    <button onClick={handlesubmit} >Finish</button><br /><br />
                    <p className="caution">{caution}</p>
                </form>
            </div>
        </div>
    );
}

export default Section2;