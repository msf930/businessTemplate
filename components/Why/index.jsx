import React from 'react';

import styles from './styles.module.css';

const Index = () => {
    return (
        <div className={styles.whyContainer}>
            <div>
                <h1 className={styles.whyTitle}>Why Choose Us</h1>
            </div>
            <div className={styles.whyItemContainer}>
                <div className={styles.whyItem}>
                    <h1 className={styles.whyItemTitle}>Easy Financing</h1>
                    <p className={styles.whyItemBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.whyItem}>
                    <h1 className={styles.whyItemTitle}>Free <br/> Consultations</h1>
                    <p className={styles.whyItemBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.whyItem}>
                    <h1 className={styles.whyItemTitle}>Award Winning
                        Service</h1>
                    <p className={styles.whyItemBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.whyItem}>
                    <h1 className={styles.whyItemTitle}>Licensed &
                        Insured</h1>
                    <p className={styles.whyItemBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Index;