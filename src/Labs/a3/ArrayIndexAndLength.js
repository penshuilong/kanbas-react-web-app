import React from "react";

let numberArray1 = [1, 2, 3, 4, 5];
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

function ArrayIndexAndLength(){
    return(
        <div>
            <h3>Array Index And Length</h3>
            length1 = {length1}<br/>
            index1 = {index1}<br/>
        </div>
    );
}

export default ArrayIndexAndLength;