import React from 'react';
import { toast } from 'react-toastify';

import AlertItem from '@components/Alert';

class Notifier {
  notifySecondary = (message) => {
    toast(<AlertItem color="secondary" message={message} />, {
      hideProgressBar: true,
    });
  };

  notifyError = (message) => {
    toast(<AlertItem color="danger" message={message} />, {
      hideProgressBar: true,
    });
  };

  notifyWarning = (message) => {
    toast(<AlertItem color="warning" message={message} />, {
      hideProgressBar: true,
    });
  };

  notifySuccess = (message) => {
    toast(<AlertItem color="success" message={message} />, {
      hideProgressBar: true,
    });
  };

  notifyInfo = (message) => {
    toast(<AlertItem color="info" message={message} />, {
      hideProgressBar: true,
    });
  };
}

const notifier = new Notifier();

export default notifier;
