import { useState } from "react";
import { useHistory } from "react-router-dom";


const Section1 = () => {
    const [busModel, setbusModel] = useState();
    const [id, setid] = useState();
    const [ansA, setansA] = useState(false);
    const [ansB, setansB] = useState(false);
    const [ansC, setansC] = useState(false);
    const [ansY, setansY] = useState(false);
    const [ansN, setansN] = useState(false);
    const [ansY2, setansY2] = useState(false);
    const [ansN2, setansN2] = useState(false);
    const Q2 = " Do you target all age brackets?";
    const Q3 = " Do you target all industries?";
    const history = useHistory();


    const handleChange = (e) => {
        setansA(false); setansB(false); setansC(false);
        setbusModel(e.target.value)
        if (e.target.value === "B2C")
            setansA(true)
        else if (e.target.value === "B2B")
            setansB(true)
        else
            setansC(true)
    }

    const handleChange2 = (e) => {
        setansN(false); setansY(false);
        if (e.target.value === "yes")
            setansY(true)
        else
            setansN(true)
    }

    const handleChange3 = (e) => {
        setansN2(false); setansY2(false);
        if (e.target.value === "yes")
            setansY2(true)
        else
            setansN2(true)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (busModel === "B2C")
            setid(1);
        else if (busModel === "B2B")
            setid(2);
        else
            setid(3);
    }

    const handleSec2Button = () => {
        history.push("/section2")
    }
    return (
        <div className="section-1">
            <div className="container">
                <h2>Section 1</h2>
                <p>1. Is your business model B2C or B2B or both?</p>
                <form >
                    <input type="radio" value="B2C" onChange={handleChange} checked={ansA} />
                    <label >B2C</label><br /><br />
                    <input type="radio" value="B2B" onChange={handleChange} checked={ansB} />
                    <label >B2B</label><br /><br />
                    <input type="radio" value="both" onChange={handleChange} checked={ansC} />
                    <label >both</label><br /><br />
                    <button onClick={handlesubmit}>next</button>

                    {id === 1 && <div className="to-sec2">
                        <p>2. {Q2}</p>
                        <input type="radio" value="yes" onChange={handleChange2} checked={ansY} />
                        <label>A. yes</label> <br /><br />
                        <input type="radio" value="no" onChange={handleChange2} checked={ansN} />
                        <label>B. no</label><br /><br />
                        <button onClick={handleSec2Button}>Go to section 2</button>
                    </div>}

                    {id === 2 && <div className="to-sec2">
                        <p>2. {Q3}</p>
                        <input type="radio" value="yes" onChange={handleChange2} checked={ansY} />
                        <label>A. yes</label> <br /><br />
                        <input type="radio" value="no" onChange={handleChange2} checked={ansN} />
                        <label>B. no</label><br /><br />
                        <button onClick={handleSec2Button}>Go to section 2</button>
                    </div>}

                    {id === 3 && <div className="to-sec2">
                        <p>2. {Q2}</p>
                        <input type="radio" value="yes" onChange={handleChange2} checked={ansY} />
                        <label>A. yes</label> <br /><br />
                        <input type="radio" value="no" onChange={handleChange2} checked={ansN} />
                        <label>B. no</label>
                        <p>3. {Q3}</p>
                        <input type="radio" value="yes" onChange={handleChange3} checked={ansY2} />
                        <label>A. yes</label> <br /><br />
                        <input type="radio" value="no" onChange={handleChange3} checked={ansN2} />
                        <label>B. no</label><br /><br />
                        <button onClick={handleSec2Button} >Go to section 2</button>
                    </div>}
                </form>
            </div>
        </div>
    );
}

export default Section1;