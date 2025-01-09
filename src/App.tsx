import {FC} from 'react';
import TodoComponents from './components/TodoComponents';
import './App.css'

const App: FC = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <TodoComponents/>
        </div>
    );
};

export default App;