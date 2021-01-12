import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.scss';

const Modal = ({ closeModal, user }) => (
  <div className={classes.modal}>
    <div>
      {user.first_name}
    </div>
    <div>
      {user.last_name}
    </div>
    <div>
      {user.email}
    </div>
    <div>
      {user.entity_type}
    </div>
    <button type="button" onClick={closeModal}>click</button>
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
