import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import styles from './homePage.module.css';


function HomePage (props) {
    const { data } = useOutletContext();
    const {topAlbums, newAlbums} = data;
    return (
        <>
        <Hero/>
        <div className={styles.wrapper}>
            <Section title="Top Album" data={topAlbums} type="album" />
            <Section title="New Album" data={newAlbums} type="album" />
        </div>
        </>
    )
}

export default HomePage;