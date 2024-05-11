import React from 'react'
import React, { useState } from 'react'
import "./Form.css"
import Firstfeatures from './Firstfeatures';
import SecondFeatures from './SecondFeatures';
import Submit from './Submit';

function Form() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({
        batterypower: 0,
        clockSpeed: 0,
        internalMemory: 0,
        deviceWeight: 0,
        noProcessor: 0,
        qualityCamera: 0,
        heightResoluation: 0,
        widthResoluation: 0,
        ram: 0,
        heightScreen: 0,
        widthScreen: 0,
        bluetooth: false,
        fourG: false,
        threeG: false,
        thouchScreen: false,
        wifi: false,
        dualSim: false,
    })
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(e.target.vlaue)
    }
    const notify = () => toast("please enter all fields!");
    const checkInputs =()=> {
        console.log('checkInputs called');
        const inputs = document.querySelectorAll("input");
        let allInputsFilled = true;
        inputs.forEach(input => {
            if (input.value === '') {
                allInputsFilled = false;
                return;
            }
        });
        if (!allInputsFilled) {
            notify();
            return;
        } else {
            setStep(step => step + 1);
        }
    };
    return (

        <form>
            <h2>Cell Phone Price</h2>
            {step === 0 && <Firstfeatures data={data} onChange={handleChange} checkInputs={checkInputs} />}
            {step === 1 && <SecondFeatures />}
            {step === 2 && <Submit />}
        </form>



    )
}
export default Form 