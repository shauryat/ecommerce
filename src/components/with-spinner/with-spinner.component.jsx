import React from 'react';
import { SpinnerOverlay } from './with-spinner.styles';
import './spinner.scss';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
      <div class="lds-facebook"><div></div><div></div><div></div></div>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;