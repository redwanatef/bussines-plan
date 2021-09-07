import { useMemo } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Radio, RadioGroup, TextField, Typography,FormControlLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Section2 = ({result}) => {
    const [investment, setinvestment] = useState();
    const [body, setbody] = useState();
    const [caution, setcaution] = useState();
    const history = useHistory();

    const validInput = useMemo(() => {
        if(investment === "yes")
            return false
        else
            return true
    })

    const validButton = useMemo(()=>{
        if(investment === "no")
            return false
        else if(investment === "yes" && !body)
            return true
        else if(investment === "yes" && body)
            return false
        else
            return true
    })
    

    const handlesubmit = (e) => {
        setcaution();
        e.preventDefault();
        if (parseFloat(body) < 0)
            setcaution("enter a positive number")
        else if (!isNaN(parseFloat(body)) || investment==="no"){
            result[3] = investment
            if(investment === "yes")
                result[4] = body 
            else
                result[4] = "mafish" 
            history.push('/finish');
        }
    }
    return (
        <div className="section-2">
            <div className="container">
                <Typography variant="h4" component="h2" gutterBottom>Section 2</Typography>
                <Typography paragraph color ="textPrimary" gutterBottom >1. Did you have an investment?</Typography >
                
                <form >
                    <RadioGroup onChange={(e) => setinvestment(e.target.value)}>
                        <FormControlLabel value="yes" control={<Radio />} label="A. yes"></FormControlLabel>
                        <FormControlLabel value="no" control={<Radio />} label="B. no"></FormControlLabel>
                    </RadioGroup>
                    <Typography paragraph color ="textPrimary" gutterBottom>2. how much was the investment?</Typography>
                     <TextField
                        className="price"
                        required
                        fullWidth
                        label={!validInput && "enter the number here"}
                        disabled={validInput}
                        type="number"
                        value={body}
                        onChange={(e) => setbody(e.target.value)}
                    />

                    <Button variant="contained" onClick={handlesubmit} disabled={validButton} >Finish</Button><br /><br />
                    <p className="caution">{caution}</p>
                </form>
            </div>
        </div>
    );
}

export default Section2;