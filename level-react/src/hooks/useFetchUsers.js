import { useEffect, useState } from "react";

export const useFetchUsers = () => {
    const [ users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers( data );
    }

    useEffect( () => {
        getUsers();
    }, []);

    return { users }
}