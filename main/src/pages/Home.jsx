import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Header from '../components/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <button onClick={() => navigate("/compose")}>Compose a message</button>
            <Feed />
            <Footer />
        </div>
    );
}

export default Home;