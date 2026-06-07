import { useState, useEffect} from "react";
import ComposeForm from '../components/ComposeForm'
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";


function Compose() {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/")}>Back to guestbook </button>
            <ComposeForm />
            <Footer />
        </>
    );
}

export default Compose;