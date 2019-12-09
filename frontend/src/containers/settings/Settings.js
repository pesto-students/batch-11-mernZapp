import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

import { ZappDivider } from '../../components/Divider';
import { Subheadings } from '../../components/Subheading';
import Switches from '../../components/Switches';
import { ZappButton } from '../../components/StyledButton';
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

const Settings = () => (
  <Container component="main">
    <CssBaseline />
    <Wrapper direction="column">
      <Typography component="h1" variant="h5">
      Settings
      </Typography>
      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left" text="Email:" />
        <ItemDetails>
          <ChangePassword>
            <ZappButton color="secondary" margin="0" text="Change Password" />
          </ChangePassword>
          <ItemName>
            <Typography>
            Primary Email:
            </Typography>
            <Typography>
            dummy-longest-mail@gmail.com
            </Typography>
            <ZappButton color="secondary" variant="contained" margin="0" text="Change" />
          </ItemName>
        </ItemDetails>
      </ItemContainer>

      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left" text="Accounts" />
        <ItemName>
          <Typography>
          Slack:
          </Typography>
          <Typography>
          slack-longest-mail@gmail.com
          </Typography>
          <ZappButton color="secondary" variant="contained" margin="0" text="Change" />
        </ItemName>
        <ItemName>
          <Typography>
            Slack:
          </Typography>
          <Typography>
          slack-longest-mail@gmail.com
          </Typography>
          <ZappButton color="secondary" variant="contained" margin="0" text="Change" />
        </ItemName>
        <ItemName>
          <Typography>
            Slack:
          </Typography>
          <Typography>
          slack-longest-mail@gmail.com
          </Typography>
          <ZappButton color="secondary" variant="contained" margin="0" text="Change" />
        </ItemName>
      </ItemContainer>
      <ZappDivider />
      <ItemContainer>
        <Subheadings float="left" text="Notifications" />
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
