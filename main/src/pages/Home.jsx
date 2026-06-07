import { useState, useEffect} from "react";

import Header from '../components/Header'
import Feed from '../components/Feed'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header />
            <Feed />
            <Footer />
        </div>
    );
}

export default Home;