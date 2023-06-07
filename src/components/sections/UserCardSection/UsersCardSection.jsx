import React, {useEffect, useState} from 'react';
import {UserCard} from "./UserCard";
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Buttons";
import styles from './user-card-section.module.scss'

export const UsersCardSection = () => {
    const [users, setUsers] = useState([])
    const [pages, setPages] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    async function fetchUsers() {
        try {
            const response = await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pages}&count=6`);
            const data = await response.json();
            console.log(data);
            setUsers((prevUsers) => [...prevUsers, ...data.users]);
            setPages((prevState) => prevState + 1)
        } catch (error) {
            console.log('Error fetchUsers: ' + error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.section}>
            <Heading> Working with GET request </Heading>
            <div className={styles['user-card-section']}>
                {users.map((user) => <UserCard key={user.id} user={user}/>)}
            </div>
            <Button onClick={fetchUsers}> Show more</Button>
        </div>
    );
};

