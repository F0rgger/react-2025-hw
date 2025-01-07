import {FamilyComponent} from "./components/FamilyComponent.tsx";
import {FC} from "react";
import './index.css';


const App: FC = () => {
    return (
        <div className="App">
            <h1>Simpsons Family</h1>
            <FamilyComponent />
        </div>
    );
};

export default App;