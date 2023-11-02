import React from "react";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FIndFunction";
import FindIndex from "./FindIndex";
import House from "./House";

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
export let numberArray1 = [1, 2, 3, 4, 5];
export let stringArray1 = ['string1', 'string2'];

export let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
];

function WorkingWithArrays(){
    return (
        <div>
            <h3>Working With Arrays</h3>
            numberArray1 = {numberArray1}<br/>
            stringArray1 = {stringArray1}<br/>
            variableArray1 = {variableArray1}<br/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FindIndex/>
        </div>
    );
}

export default WorkingWithArrays;
