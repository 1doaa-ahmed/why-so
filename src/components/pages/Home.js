import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div className="position-relative overflow-hidden  text-center bg-body-tertiary main">
            <div className="col-md-6 p-lg-5 mx-auto my-5 ">
                <h1 className="display-3 fw-bold ">We can predict the price of any phone</h1>
                <h3 className="fw-normal text-muted mb-3">Do you want to try ?</h3>
                <div className="d-flex gap-3 justify-content-center lead fw-normal">
                    <Link to={'/predict'} className="btn btn-primary " type="submit">
                        Let's start
                        <span className='product-device'></span>
                    </Link>

                    <span className='product-device product-device-2'></span>
                </div>
            </div>
        </div>
    )
}

export default Home;