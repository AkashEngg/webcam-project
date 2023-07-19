import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Table = ({ childToParent }) => {

    const data = "Akash Singh"


    const [responseData, setResponseData] = useState('');

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            // setResponseData({ responseData: response.data[0].title, "Title" : response.data[5].title })
            console.log(response)
            const data = response.data[0].title;
            setResponseData(data)
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const value = () => {
        childToParent(data)
    }

    return (
        <div>
            <button onClick={value} className="btn bg-primary text-light mt-5 mx-1">Name</button>



            {/* <table className="table mt-5">
                <thead>

                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Title</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>{responseData}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>{responseData}</td>
                    </tr>

                </tbody>
            </table> */}
        </div>
    )
}

export default Table