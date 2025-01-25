import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.services.ts";

export const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(() => {
        }).catch(reason => {
            console.log(reason);
            refresh().then(() => loadAuthProducts())
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};