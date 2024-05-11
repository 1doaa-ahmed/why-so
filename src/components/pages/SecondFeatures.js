import React from 'react'
import { Link } from 'react-router-dom'
import "../Form.css"
function SecondFeatures() {
    return (
        <>
            <form>
                <h1>Cell Phone Price</h1>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder='' min={0} max={1960} />
                    <label for="floatingInput">Height of pixel resolution</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder='' min={500} max={2000} />
                    <label for="floatingInput">Width of pixel resolution</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder='' min={256} max={4000} />
                    <label for="floatingInput">Random access memory in MegaByte</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder='' min={5} max={20} />
                    <label for="floatingInput">Height of device screen in CM</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder='' min={0} max={19} />
                    <label for="floatingInput">Width of device screen in CM</label>
                </div>
                <Link to={'/submit'} className="btn btn-outline-primary" type="submit">
                    Continue
                </Link>
            </form>
        </>
    )
}

export default SecondFeatures