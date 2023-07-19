import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Offcanvas from './Offcanvas';

const Form = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        const fname = event.target.fname.value;
        const lname = event.target.lname.value;
        const email = event.target.email.value;
        const pNumber = event.target.pNumber.value;
        const wNumber = event.target.wNumber.value;
        const add = event.target.add.value;
        const add2 = event.target.add2.value;
        const value = { fname, lname, email, pNumber, wNumber, add, add2 }

        axios.post("https://jsonplaceholder.typicode.com/posts", { value }).then((response) => {
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
        setData("Guest Form");

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
                                            <h3 className="card-title">Guest Form</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="row g-5 m-2" onSubmit={submitHandler}>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault01" className="form-label">First name :</label>
                                    <input type="text" className="form-control" id="validationDefault01" name='fname' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault02" className="form-label">Last name :</label>
                                    <input type="text" className="form-control" id="validationDefault02" name='lname' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Email Id :</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name='email' />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault03" className="form-label">Phone Number :</label>
                                    <input type="number" className="form-control" id="validationDefault03" name='pNumber' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault03" className="form-label">WhatsApp Number :</label>
                                    <input type="number" className="form-control" id="validationDefault03" name='wNumber' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="validationDefault03" className="form-label">Address :</label>
                                    <input type="text" className="form-control" id="validationDefault03" name='add' required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Address 2 :</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='add2'></textarea>
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

export default Form;