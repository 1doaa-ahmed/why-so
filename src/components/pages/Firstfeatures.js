import React, { useState } from 'react'
import "./Form.css"

function Firstfeatures({ data, onChange, checkInputs }) {
    const handleClick = () => {
        console.log("Button clicked");
        checkInputs();}
        console.log(checkInputs)
        console.log(data)
        console.log(onChange)
    return (
        <>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data && data["batterypower"]}
                    name='batterypower'
                    onChange={onChange}
                    id="batterypower" min={500} max={2000} placeholder='' />
                <label htmlFor="batterypower">Battery Power</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control"
                    value={data && data["clockSpeed"]}
                    name='clockSpeed'
                    onChange={onChange}
                    id="clockSpeed" placeholder='' min={0.5} max={3} />
                <label htmlFor="clockSpeed">Clock Speed</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number"
                    value={data && data["internalMemory"]}
                    name='internalMemory'
                    onChange={onChange}
                    className="form-control" id="internalMemory" placeholder='' min={2} max={65} />
                <label htmlFor="internalMemory">Internal memory in GigaByte</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number"
                    value={data && data["deviceWeight"]}
                    name='deviceWeight'
                    onChange={onChange}
                    className="form-control" id="deviceWeight" placeholder='' min={80} max={200} />
                <label htmlFor="deviceWeight">Device Weight</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number"
                    value={data && data["noProcessor"]}
                    name='noProcessor'
                    onChange={onChange}
                    className="form-control" id="noProcessor" placeholder='' min={1} max={8} />
                <label htmlFor="noProcessor">Number of processor cores</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number"
                    value={data && data["qualityCamera"]}
                    name='qualityCamera'
                    onChange={onChange}
                    className="form-control" id="qualityCamera" placeholder='' min={0} max={20} />
                <label htmlFor="qualityCamera">Quality of primary camera in MegePixel</label>
            </div>

            <button
                onClick={handleClick}
                className="btn btn-outline-primary"
                type="button"
            >
                Continue
            </button>

        </>

    )
}

export default Firstfeatures