import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Primary UI component for user interaction
 */
export const ChildNonComp = ({ addNew }) => {

    
    const shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    let alphabet = ["a", "B", "c", "D", "e", "F", "G", "h", "I", "j", "j", "j", "K", "L", "M", "NNn", "oO", "P", "Q", "R", "s", "T", "U", "v", "x", "y", "z", "å", "ä", "Ö", " "];
    shuffleArray(alphabet)
    const [alphaVal, setAlphaval] = useState(alphabet)
    const [val, setVal] = useState(alphaVal[0])


  return (

            <select value = {val} onChange = {(current) => {setVal(current.value); addNew()}}>
                {alphaVal.map((char, index)=> (
                    <option key={index}>{char}</option>
                ))}
            </select>

  );
};

