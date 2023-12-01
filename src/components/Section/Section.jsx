import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
import styles from '../Section/section.module.css';
import Filters from '../Filters/Filters';

export default function Section ({ title, data, filterSource, type }) {
    const [filters, setFilters] = useState([{key: "all", lable: "All"}]);
    const [selectedFilter, setSelectedFilter] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);

    useEffect(() => {
        if(filterSource) {
            filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data]);
            })
        }
    }, []);

    const showFilters = filters.length > 0;
    const cardsToRender = data?.filter((card) => showFilters && selectedFilter !== 0 ? card.genre.key === filters[selectedFilter].key: card
    );

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }
    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>
            </div>
            {showFilters && (
                <div className={styles.filterWrapper}>
                    <Filters
                        filters={filters}
                        selectedFilter={selectedFilter}
                        setSelectedFilter={setSelectedFilter}
                        />
                </div>
            )}
            {data.length === 0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele) => (
                                <Card data={ele} type={type} />
                            ))}
                        </div>
                    ): (
                        <Carousel 
                        data = {cardsToRender} 
                        renderComponent = {(data) => <Card data = {data} type = {type} /> }
                        />
                    )}
                </div>
            )}
        </div>
    )
}
