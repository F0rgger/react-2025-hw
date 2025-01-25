import {useEffect} from "react";
import {login} from "../services/api.services.ts";

export const LoginPage = () => {
useEffect(()=>{
    login({
        username: "emelys",
        password: "emelyspass",
        expiresInMin: 1
    })
})

    return (
        <>
            login
        </>
    );
};