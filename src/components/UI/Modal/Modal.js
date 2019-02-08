import React, {Component, Fragment} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.scss';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }
    render(){
        const { show, modalClosed, children } = this.props;
      return(
        <Fragment>
          <Backdrop show={show} clicked={modalClosed}/>
            <div
              style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
              }}
              className={styles.Modal}>
              {children}
            </div>
        </Fragment>
      )
    }
};

export default Modal;
