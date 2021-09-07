import { Button, Typography } from "@material-ui/core";
import { useState } from "react";

const Finish = ({ result }) => {
    console.log(result);
    const [showResults, setshowResults] = useState(false)
    const handlebusModel = (e) => {
        if (e === "B2C")
            return "Target all age brackets: " + result[1];
        else if (e === "B2B") {
            return "Target all industries: " + result[1];
        } else
            return "Target all age brackets: " + result[1] + " , Target all industries: " + result[2];
    }

    if (result[0] === "both") {
        result[0] = "B2C and B2B"
    }

    return (
        <div className="finish">
            <div className="container">
               <Typography variant="h3" gutterBottom >your answers are submitted successfully.</Typography>
                <Button variant="contained" onClick={() => setshowResults(true)}>see your answers</Button>
                {showResults === true &&<div className="results">
                    <Typography variant="h5" component="h2">Your answers :</Typography>
                    <ul>
                        <li> Your business model : {result[0]}</li>
                        <li>{handlebusModel(result[0])}</li>
                        <li>Have an investment: {result[3]}</li>
                        {result[3] === "yes" && <li>price of your investment: {result[4]}</li>}

                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default Finish;