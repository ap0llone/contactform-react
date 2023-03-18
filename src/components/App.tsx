import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HorizontalExample from "./AddForm";
import FormList from "./FormList";
import { Card } from "../types/model";

const App: React.FC = () => {
    const LOCAL_STORAGE_KEY = "list";
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [id, setID] = useState<number>(Date.now());
    const [list, setList] = useState<Card[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(list);

        const date = { email, password, id };
        if (email && password && password.length >= 5) {
            setList((ls) => [...ls, date]);
            setEmail("");
            setPassword("");
        }
        if (password.length < 5) {
            alert("Your Password is too short! \n Try to come up with another password! ");
            setEmail("");
            setPassword("");
        }
    };
    return (
        <div className="App">
            <Header />
            <HorizontalExample
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                list={list}
                setList={setList}
                handleSubmit={handleSubmit}
            />
            <FormList email={email} password={password} list={list} setList={setList} />
        </div>
    );
};

export default App;
