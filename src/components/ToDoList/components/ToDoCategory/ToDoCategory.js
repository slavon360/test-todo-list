import React, { Component } from 'react';
import cx from 'classnames';

import styles from './ToDoCategory.module.scss';

class ToDoCategory extends Component {
    shouldComponentUpdate(nextProps){
        const { index, activeIndex } = this.props;
        return nextProps.activeIndex === index || index === activeIndex;
    }
    onChooseCategory = () => {
        const { changeCategory, index } = this.props;
        changeCategory(index);
    }
    render() {
        const { name, index, activeIndex } = this.props;
        return (
            <div
                onClick={this.onChooseCategory}
                className={cx(styles.Category, { [styles.Active]: activeIndex === index })}>
                {name}
            </div>
        );
    }
}

export default ToDoCategory;