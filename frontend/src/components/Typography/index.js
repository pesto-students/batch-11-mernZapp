import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const TypographyComponent = (props) => {
  const { component, variant, text } = props;

  return (
    <Typography component={component} variant={variant}>
      {text}
    </Typography>
  );
};

TypographyComponent.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.string,
  text: PropTypes.string.isRequired,
};

TypographyComponent.defaultProps = {
  component: '',
  variant: 'body1',
};

export { TypographyComponent };
