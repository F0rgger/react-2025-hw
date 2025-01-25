import {Link} from "react-router";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>res</Link></li>

            </ul>
        </div>
    );
};