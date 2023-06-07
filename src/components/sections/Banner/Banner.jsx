import React from 'react';
import {Heading} from "../../ui/Heading";
import './banner.module.scss';
import {Button} from "../../ui/Buttons";
import {Text} from "../../ui/Text";
import styles from './banner.module.scss'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles['banner-text-area']}>
                <Heading>Test assignment for front-end developer</Heading>
                <Text>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </Text>
            </div>
            <Button> Sign up </Button>
        </div>
    );
};