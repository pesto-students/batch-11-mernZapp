import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const StyledButton = styled(Button)`
  margin: ${(props) => props.margin || '24px 0px 16px'};
  color: ${(props) => props.color || 'primary'}
`;

const GridSpaced = styled(Grid)`
  margin-top: 10px;
`;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  margintop: 64px;
`;

export {
  Wrapper, Form, StyledButton, GridSpaced,
};
