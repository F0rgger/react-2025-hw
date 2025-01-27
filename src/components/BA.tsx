import {useContext} from "react";
import {MyContext} from "../context/MyContextProviger.tsx";

export const BA = () => {

    const {changeTheme} = useContext(MyContext);

    const handlerDark = () => {
        changeTheme('dark');

    };

    const handlerLight = () => {
        changeTheme('light');

    };

    return (
        <div>
            <button onClick={handlerDark}> change to dark</button>
            <button onClick={handlerLight}> change to light</button>
        </div>
    );
};