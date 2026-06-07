import { useState, useEffect} from "react";
import ComposeForm from '../components/ComposeForm'
import Footer from '../components/Footer'


function Compose() {
    return (
        <>
            <ComposeForm />
            <Footer />
        </>
    );
}

export default Compose;