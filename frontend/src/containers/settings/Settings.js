import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { ZappDivider } from '../../components/Divider';
import { Subheadings } from '../../components/Subheading';
import Switches from '../../components/Switches';
import {
  Wrapper,
} from '../../components/FormCss';

const ItemContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 66%;
  align-items: center;
  padding: .5rem;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
    && p {
      font-size: .8rem;
    }
  }
`;

const ChangePassword = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
  right: 0;
  top: 5px;
  position: absolute;
`;

const StyledButton = styled(Button)`
  margin: ${(props) => props.margin || '24px 0px 16px'};
  color: ${(props) => props.color || 'primary'};
  @media (max-width: 768px) {
    padding: 6px 10px 3px;
    font-size: 0.8rem;
    line-height: 1;
    height: max-content;
    margin-left: 0.6rem;
  }
`;


const Settings = () => (
  <Container component="main">
    <CssBaseline />
    <Wrapper direction="column">
      <Typography component="h1" variant="h5">
        Settings
      </Typography>
      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left">Email:</Subheadings>
        <ItemDetails>
          <ChangePassword>
            <StyledButton color="secondary" variant="contained" margin="0"> Change Password</StyledButton>
          </ChangePassword>
          <ItemName>
            <Typography>
            Primary Email:
            </Typography>
            <Typography>
      dummy-longest-mail@gmail.com
            </Typography>
            <StyledButton color="secondary" variant="contained" margin="0"> Change </StyledButton>
          </ItemName>
        </ItemDetails>
      </ItemContainer>

      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left">Accounts:</Subheadings>
        <ItemName>
          <Typography>
            Slack:
          </Typography>
          <Typography>
      slack-longest-mail@gmail.com
          </Typography>
          <StyledButton color="secondary" variant="contained" margin="0"> Change </StyledButton>
        </ItemName>
        <ItemName>
          <Typography>
            Slack:
          </Typography>
          <Typography>
      slack-longest-mail@gmail.com
          </Typography>
          <StyledButton color="secondary" variant="contained" margin="0"> Change </StyledButton>
        </ItemName>
        <ItemName>
          <Typography>
            Slack:
          </Typography>
          <Typography>
      slack-longest-mail@gmail.com
          </Typography>
          <StyledButton color="secondary" variant="contained" margin="0"> Change </StyledButton>
        </ItemName>
      </ItemContainer>
      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left">Notifications:</Subheadings>
        <ItemName>
          <Typography>
          Send notification on failed Zapp?
          </Typography>
          <Switches />
        </ItemName>
      </ItemContainer>
    </Wrapper>
  </Container>
);

export default Settings;
