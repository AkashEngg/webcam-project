import Webcam from 'react-webcam'
import React, { useEffect, useRef, useState } from "react";
import Header from './Header';
import Offcanvas from './Offcanvas';



const NewCamera = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const videoConstraints = {
        width: 400,
        facingMode: 'environment'
    }

    const webcamRef = useRef(null)

    const [url, setUrl] = useState(null)

    const capturePhoto = React.useCallback(async () => {
        const imageSrc = webcamRef.current.getScreenshot()
        setUrl(imageSrc)
    }, [webcamRef])

    const onUserMedia = (e) => {
        console.log(e)
    }
    const deletePhoto = () => {
        setUrl(null)
    }

    const [data, setData] = useState('');
    useEffect(() => {
        setData("WebCamera");

    }, []);
    return (
        <>
            {loading ? (
                <div className='loader-container'>
                    <div className='spinner'></div>
                </div>) : (<div>
                    <Header parenToChild={data}/>
                    <Offcanvas />

                    <main className="mt-2 pt-3">
                        <div className="container-fluid">
                            <div className="row mt-5">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Webcam</h3>
                                        </div>
                                    </div>
                                    <div className='text-center mt-3'>
                                        <p className='fs-5'>Upload your Image</p>
                                    </div>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <Webcam
                                            ref={webcamRef}
                                            audio={false}
                                            screenshotFormat="image/png"
                                            videoConstraints={videoConstraints}
                                            onUserMedia={onUserMedia}
                                            mirrored={true}
                                        // screenshotQuality={0.92} default
                                        />
                                    </div>
                                    <div className='d-flex justify-content-center mt-2'>
                                        <button onClick={capturePhoto} className="btn btn-success">Capture</button>
                                        <button onClick={deletePhoto} className="btn btn-danger mx-2" >Refresh</button>
                                    </div>
                                    {url && (
                                        <div className='d-flex justify-content-center mt-2'>
                                            <img src={url} alt='Screenshot' />
                                        </div>
                                    )}


                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            )}
        </>
    )
}


export default NewCamera;