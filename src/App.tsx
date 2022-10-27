import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
/*import UserList from "./components/UserList";*/
import {ITodo, IUser} from './types/types';
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UsersItemPage from "./components/UsersItemPage";
import TodoItemPage from "./components/TodoItemPage";


const App = () => {

   /* const users: IUser[] = [
        {id: 1, name: 'Vitalya', email: '123@mail.ru', address: {city: 'Moscow', street:'Pushkina', zipcode: '123'}},
        {id: 2, name: 'Bogdan', email: '121243@mail.ru', address: {city: 'Minsk', street:'Central', zipcode: '879'}},
    ]*/

  /*  const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }*/


    return (
        <BrowserRouter>
            <div>
                <NavLink to={'/users'}>users</NavLink>
            </div>
            <div>
                <NavLink to={'/todos'}>todos</NavLink>
            </div>
            <Routes>
                <Route path='/users' element={<UsersPage />} />
                <Route path='/todos' element={<TodosPage />} />
                <Route path='/users/:id' element={<UsersItemPage />} />
                <Route path='/todos/:id' element={<TodoItemPage />} />

                {/*<EventsExample />
            <Card onClick={(num) => console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px' >
                <button>Клик</button>
            </Card>*/}
                {/*<UserList users={users} />*/}
                {/*<List items={users}
                  renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
            />*/}
                {/*<List items={todos}
                  renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />*/}

            </Routes>
        </BrowserRouter>

    );
};

export default App;