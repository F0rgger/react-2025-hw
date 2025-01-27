import {useContext} from "react";
import {MyContext} from "../context/MyContextProviger.tsx";
import './AA.css'
export const AA = () => {

    const {theme} = useContext(MyContext);

    return (
        <div className={theme}>
            {theme}
        </div>
    );
};