import React from 'react';
import styles from "./hero.module.css";
import { ReactComponent as HeadsetImage } from '../../assets/HeadsetLogo.svg';

export default function HeroSection (props) {
    return(
        <>
        <div className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.heroLine}>
                    <p>100 Thousand Songs, ad-free</p>
                    <p>Over thousands podcast episodes</p>
                </div>
                <div className={styles.heroHedset}>
                    <HeadsetImage />
                </div>
            </div>
        </div>
        </>
    )
}