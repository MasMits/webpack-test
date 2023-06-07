import React from 'react';
import {Text} from "../../../ui/Text";
import styles from './user-card.module.scss'

export const UserCard = ({user}) => {

    function truncateString(str) {
        if (str.length <= 14) return str;
        return str.slice(0, 14) + '...';
    }

    return (
        <div className={styles['user-card']}>
            <img src={user.photo} alt={user.name} className={styles['user-img']}/>
            <span title="Це підказка">
                {truncateString(user.name)}
            </span>

            <Text>
                <span title="Це підказка">
                {truncateString(user.name)}
                </span>
            </Text>
            <Text>
                {truncateString(user.email)} <br/>
                {user.phone} <br/>
                {user.position}
            </Text>
        </div>
    );
};
