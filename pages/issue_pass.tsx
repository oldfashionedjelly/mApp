import React from "react";
import { useEffect, useState } from "react";
// import { auth, storage, db } from "../firebaseConfig.js";
// import { setDoc, doc, Timestamp } from "firebase/firestore";

export default function IssuePass() {
    
    const [date, setDate] = useState("");
    const [tardyExcusedTime, setTardyExcusedTime] = useState("");
    const [tardyUnexcusedTime, setTardyUnexcusedTime] = useState("");
    const [earlyDismissalReturn, setEarlyDismissalReturnTime] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const passRef = doc(db, "passes");

        await setDoc(passRef, {
            date: date,
            tardyExcusedTime: tardyExcusedTime,
            tardyUnexcusedTime: tardyUnexcusedTime,
            earlyDismissalReturn: earlyDismissalReturn,
            issuer: auth.currentUser.uid,
        });

        
    }

    const generate_student_options = async () => {
        // we can also do a static student list
        // const studentRef = doc(db, "students");

        // get student list

        // return a list of option elements

        
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type = "date" placeholder = "Date"></input>
                
                {/* select an exact time (e.g. 1PM) rather than a day*/}
                <p>Leave not applicable fields blank</p>
                
                <input type = "date" placeholder = "Tardy Excused Time" onChange={e => setTardyExcusedTime(e.target.value)}></input>
                
                <input type = "date" placeholder = "Tardy Unexcused Time" onChange={e => setTardyUnexcusedTime(e.target.value)}></input>
                
                <input type = "date" placeholder = "Early Dismissal Time" onChange={e => setEarlyDismissalReturnTime(e.target.value)}></input>
                
                <select name = "student" id = "student_dropdown">
                        {/* option generation based on firebase  */}

                </select>

            </form>
        </>

    );

}

