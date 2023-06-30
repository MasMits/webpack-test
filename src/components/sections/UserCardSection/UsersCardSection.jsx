import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../store/actions/users";
import {UserCard} from "./UserCard";
import {Heading} from "../../ui/Heading";
import {Button} from "../../ui/Button";
import {Spinner} from "../../ui/Spinner";
import styles from './user-card-section.module.scss'

export const UsersCardSection = () => {
    const dispatch = useDispatch();
    const {users, pages, isLoading, isShowMore} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (isLoading) return <Spinner/>

    return (
        <div className={styles.section}>
            <div className={styles.header}><Heading> Working with GET request </Heading></div>
            <div className={styles.outer_container}>
                <div className={styles.inner_container}>
                    <div className={styles['user-card-section']}>
                        {users.map((user) => <UserCard key={user.id} user={user}/>)}
                    </div>
                </div>
            </div>
            <Button onClick={() => {
                dispatch(fetchUsers(pages))
            }} disabled={!isShowMore}> Show more</Button>
        </div>
    );
};