import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

export default CustomButton;
