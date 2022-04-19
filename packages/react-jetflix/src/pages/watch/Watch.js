import React from 'react'
import { ArrowBackIosOutlined } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
export const Watch = () => {
    console.log(useLocation);
    return (
        <div className="watch">
            <Link to="/">
                <div className="back">
                    <ArrowBackIosOutlined/> Home
                </div>
            </Link>
            <video className="video" autoplay progress controls src={} />
        </div>
    )
}
