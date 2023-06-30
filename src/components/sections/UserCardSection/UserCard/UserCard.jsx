import React from 'react';
import {Text} from "../../../common/Text";
import styles from './user-card.module.scss'
import {Tooltip} from "../../../common/Tooltip";

export const UserCard = ({user}) => {
    return (
        <div className={styles['user-card']}>
            <img src={user.photo} alt={user.name} className={styles['user-img']}/>
            <Text>
                <Tooltip>{user.name}</Tooltip>
            </Text>
            <div>
                <Tooltip>{user.email}</Tooltip>
                <Tooltip>{user.phone}</Tooltip>
                {user.position}
            </div>
        </div>
    );
};
