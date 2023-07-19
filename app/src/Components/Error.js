import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <a href="/dashboard" className="btn color btn-lg text-white">
                                    <i class="bi bi-arrow-return-right"></i> Go To Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error