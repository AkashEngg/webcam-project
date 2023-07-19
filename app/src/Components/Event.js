import { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from './Header';
import Offcanvas from './Offcanvas';

const EForm = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    // const [date, setDate] = useState(new Date());
    // const [eDate, setDatend] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const SubmitHandler = (event) => {
        event.preventDefault();
        const ename = event.target.ename.value;
        const eventStart = event.target.eventstart.value;
        const eventEnd = event.target.eventend.value;
        const values = { ename, eventStart, eventEnd }

        axios.post("https://jsonplaceholder.typicode.com/posts", { values }).then((response) => {
            console.log(response)
            event.target.reset();
        }).catch((error) => {
            console.log(error);
        });
    };

    const dashboard = () => {

        // navigate('/dashboard')

    }

    const [data, setData] = useState('');
    useEffect(() => {
        setData("Event Form");

    }, []);



    return (
        <>
            {loading ? (
                <div className='loader-container'>
                    <div className='spinner'></div>
                </div>) : (<div>

                    <Header parenToChild={data} />
                    <Offcanvas />

                    <main className="mt-2 pt-3">
                        <div className="container-fluid">
                            <div className="row mt-5">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3 className="card-title">Event Form</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="row g-5 m-2" onSubmit={SubmitHandler}>
                                <div className="col-md-12">
                                    <label htmlFor="validationDefault01" className="form-label">Event Name :</label>
                                    <input type="text" className="form-control" id="validationDefault01" name='ename' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault02" className="form-label">Event Started :</label>
                                    {/* <DatePicker
                                        className="form-control" id="validationDefault02" name='eventstart' selected={date} onChange={date => setDate(date)} /> */}
                                    <DatePicker
                                        className="form-control" id="validationDefault02" name='eventstart'
                                        selected={startDate}
                                        selectsStart
                                        startDate={startDate}
                                        endDate={endDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault03" className="form-label">Event Ended :</label>
                                    {/* <DatePicker
                                        className="form-control" id="validationDefault02" name='eventend' selected={eDate} onChange={eDate => setDatend(eDate)} /> */}
                                    <DatePicker
                                        className="form-control" id="validationDefault03" name='eventend'
                                        selected={endDate}
                                        selectsEnd
                                        startDate={startDate}
                                        endDate={endDate}
                                        minDate={startDate}
                                        onChange={date => setEndDate(date)}
                                    />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit" onClick={dashboard}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}

export default EForm;