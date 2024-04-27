import React from "react"
import Schedule from './login';
import Medform from './medform';
import { useLocation, useNavigate } from 'react-router-dom';

function HomePage() {
    const location = useLocation();
    return (
        <div>
            <h1>Logged in with: {location.state.id}</h1>
            <Schedule></Schedule>
            <Medform></Medform>
        </div>
    )
}

export default HomePage