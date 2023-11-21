import React from "react";
export const square = a => a * a;
export const plusOne = a => a + 1;

function FunctionParenthesisAndParameters(){
    return(
        <div>
            <h3>Parenthesis and Parameters</h3>
            twoSquared = 4<br/>
            square(2) = {square(2)}<br/>
            threePlusOne = 4<br/>
            plusOne(3) = {plusOne(3)}<br/>
        </div>
    );
}

export default FunctionParenthesisAndParameters;