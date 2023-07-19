import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Header from './Header';
import Offcanvas from './Offcanvas';
import Table from './Table';


const Dashboard = () => {


    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);



    const [data, setData] = useState('');
    useEffect(() => {
        setData("we are in Dashboard");

    }, []);

    // const parenToChild = () => {
    // }

    const [childData, setChildData] = useState('');

    const childToParent = (childData) => {
        setChildData(childData);
    }


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
                                            <h3 className="card-title">Dashboard</h3>
                                        </div>
                                    </div>
                                    <Table childToParent={childToParent} />
                                </div>

                                <table class="table table-bordered my-5 mx-3">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{childData}</td>
                                            <td>Bulandshahr</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{childData}</td>
                                            <td>Ghaziabad</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>{childData}</td>
                                            <td>Delhi</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </main>
                </div>
            )}
        </>
    )
}

export default Dashboard;