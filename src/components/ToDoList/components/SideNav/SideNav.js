import React from 'react';
import PropTypes from 'prop-types';
import ToDoCategory from '../ToDoCategory/ToDoCategory';
import Button from '../../../UI/Button/Button';
import FilledCircle from '../../../UI/FilledCircle/FilledCircle';

import styles from './SideNav.module.scss';

const SideNav = ({ categories, activeIndex, changeCategory, showHideCategoryModal }) => (
        <div className={styles.SideNav}>
            { new Array(3).fill(0).map((item, i) => <FilledCircle key={i} />) }
            <div className={styles.TodoCategories}>
                {categories && categories.length ?
                    categories.map((category, index) => (
                        <ToDoCategory
                            key={category.id}
                            name={category.name}
                            index={index}
                            activeIndex={activeIndex}
                            changeCategory={changeCategory}
                        />
                    ))
                    : null
                }
            </div>
            <Button
                clsName={styles.AddListBtn}
                clickHandler={showHideCategoryModal}
            >
                <div className={styles.PlusSign}>+</div>
                <span className={styles.ButtonsText}>Add List</span>
            </Button>
        </div>
    );

export default SideNav;

SideNav.propTypes = {
    categories: PropTypes.array,
    activeIndex: PropTypes.number
}