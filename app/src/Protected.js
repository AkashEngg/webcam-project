import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const Cmp = props.Cmp

    const protectUrl = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('role')) {
            protectUrl('/dashboard')
        }
    }, [])

    return (
        <div>
            <Cmp />
        </div>
    )
}

export default Protected