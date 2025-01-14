import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router";
import {FC} from "react";

type Props = {
    user: IUser,
}

export const UserComponent:FC<Props> = ({ user}) => {
    const navigate = useNavigate();
    const onButtonClickNavigate = () => {
        navigate("/users/" + user.id + "/carts");
    };

    return (
        <div>
            {user.username}: {user.email}

            <button onClick={onButtonClickNavigate}>click me</button>
        </div>
    );
}