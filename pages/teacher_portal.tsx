import React from "react";
import { useEffect, useState } from "react";

export default function TeacherPortal() {
    const [date, setDate] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        // get list of students
        // retrieve an interface of pending passes for the current teacher
        // render list of pending passes as a bunch of cards

        

    }, [])
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <input type = "date" placeholder = "Present"></input>
                
            </form>
        </>

    );
}