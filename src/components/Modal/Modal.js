import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.scss';

const Modal = ({ closeModal, user }) => (
  <div className={classes.modal}>
    <div className={classes.modalInner}>
      <div className={classes.modalTitle}>
        {user.first_name}
        {user.last_name}
      </div>
      <div className={classes.modalText}>
        {user.email}
      </div>
      <div className={classes.modalColor} style={{ background: user.entity_type }} />
      <div onClick={closeModal} className={classes.close} />
    </div>
  </div>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    entity_type: PropTypes.string,
  }).isRequired,
};

export default Modal;
