import React, { useState } from 'react'
import "./Form.css"
import { toast } from 'react-toastify';
function Submit() {
    
    const notify = () => toast("Wow so easy!");
    return (
        <>
            <form>
                <h1>Cell Phone Price</h1>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                        // value={data['bluetooth']}
                        // onChange={(e) => setData({ ...data, bluetooth: e.target.value })} 
                        />
                    <label className="form-check-label" for="flexSwitchCheckChecked">Bluetooth</label>
                </div>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">4G</label>
                </div>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">3G</label>
                </div>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">Touch Screen</label>
                </div>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">WIFI</label>
                </div>
                <div className="form-switch  mb-3">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" for="flexSwitchCheckChecked">Dual SIM</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={notify}>Submit</button>
            </form>
        </>
    )
}

export default Submit