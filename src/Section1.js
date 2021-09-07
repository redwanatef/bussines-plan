import { useMemo,useState } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Button,Radio,RadioGroup,FormControlLabel } from "@material-ui/core";


const Section1 = ({ result }) => {
    const [busModel, setbusModel] = useState();
    const [Q2answer, setQ2answer] = useState();
    const [Q3answer, setQ3answer] = useState();
    const Q2 = " Do you target all age brackets?";
    const Q3 = " Do you target all industries?";
    const history = useHistory();

    const validButton = useMemo(() => {
        if (busModel === "both") {
            if (Q2answer && Q3answer)
                return false
            else
                return true
        }
        else if (Q2answer)
            return false
        else if (Q3answer)
            return false
        else
            return true
    })

    const handleSec2Button = (e) => {
        e.preventDefault();
        result[0] = busModel;
        if (busModel === "B2C") {
            result[1] = Q2answer;
            result[2] = "mafish"
        }
        else if (busModel === "B2B") {
            result[1] = Q3answer;
            result[2] = "mafish";
        }
        if (busModel === "both") {
            result[1] = Q2answer;
            result[2] = Q3answer;
        }
        history.push("/section2")
    }



    return (
        <div className="section-1">
            <div className="container">
                <Typography variant="h4" component="h2" gutterBottom>
                    Section 1
                </Typography>
                <Typography paragraph color="textPrimary" gutterBottom>1. Is your business model B2C or B2B or both?</Typography >
                <form >
                <RadioGroup onChange={(e) => setbusModel(e.target.value)}>
                        <FormControlLabel value="B2C" control={<Radio />} label="A. B2C"></FormControlLabel>
                        <FormControlLabel value="B2B" control={<Radio />} label="B. B2B"></FormControlLabel>
                        <FormControlLabel value="both" control={<Radio />} label="C. both"></FormControlLabel>
                    </RadioGroup>
                    {(busModel === "B2C" || busModel === "both") && <div className="to-sec2">
                        <Typography paragraph color="textPrimary" gutterBottom>* {Q2}</Typography>
                        <RadioGroup onChange={(e) => setQ2answer(e.target.value)}>
                            <FormControlLabel value="yes" control={<Radio />} label="A. yes"></FormControlLabel>
                            <FormControlLabel value="no" control={<Radio />} label="B. no"></FormControlLabel>
                        </RadioGroup>

                    </div>}

                    {(busModel === "B2B" || busModel === "both") && <div className="to-sec2">
                        <Typography paragraph color="textPrimary" gutterBottom>* {Q3}</Typography>
                        <RadioGroup onChange={(e) => setQ3answer(e.target.value)}>
                            <FormControlLabel value="yes" control={<Radio />} label="A. yes"></FormControlLabel>
                            <FormControlLabel value="no" control={<Radio />} label="B. no"></FormControlLabel>
                        </RadioGroup>

                    </div>}

                    {busModel && <div className="to-sec2"> <Button variant="contained" disabled={validButton} onClick={handleSec2Button}>Go to section 2</Button> </div>}
                </form>
            </div>
        </div>
    );
}

export default Section1;