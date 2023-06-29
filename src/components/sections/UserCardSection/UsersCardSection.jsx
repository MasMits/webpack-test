import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../store/actions/users";
import {UserCard} from "./UserCard";
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Button";
import styles from './user-card-section.module.scss'

export const UsersCardSection = () => {
    const dispatch = useDispatch();
    const {users, pages, isLoading, isShowMore} = useSelector((state) => state.users);

    useEffect(() => {
         dispatch(fetchUsers())
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <div className={styles.section}>
            <Heading> Working with GET request </Heading>
            <div className={styles['user-card-section']}>
                {users.map((user) => <UserCard key={user.id} user={user}/>)}
            </div>
            <Button onClick={() => {dispatch(fetchUsers(pages))}} disabled={!isShowMore}> Show more</Button>
        </div>
    );
};