import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ZappDivider } from '../../components/Divider';
import SimpleSelect from '../../components/Dropdown/SimpleSelect';
import { Wrapper } from '../../components/FormCss';


const ZappNameField = styled.div`
    display: flex;
    padding: .5rem;
    height: 100%;
    justify-content: end;
    align-items: center;
    width: 100%;
`;

const ZapAction = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

const DownArrowIcon = styled.div`
display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;
const option = JSON.stringify({ options: [{ name: 'Slack', id: 1 }, { name: 'Github', id: 2 }] });

const CreateZapp = () => (
  <Container component="main">
    <CssBaseline />
    <Wrapper direction="column">
      <Typography component="h1" variant="h5">
      CreateZapp
      </Typography>
      <ZappDivider />
      <ZappNameField>
        <Typography variant="h5">
      Zapp Name:
        </Typography>
        <TextField id="zappName" variant="outlined" />
      </ZappNameField>
      <ZapAction>
        <SimpleSelect type="Trigger" values={option} />
        <SimpleSelect type="Action" values={option} />
      </ZapAction>
      <DownArrowIcon>
        <ArrowDropDownIcon />
        <ArrowDropDownIcon />
      </DownArrowIcon>
      <ZapAction>
        <SimpleSelect type="Trigger" values={option} />
        <SimpleSelect type="Action" values={option} />
      </ZapAction>
      <DownArrowIcon>
        <ArrowDropDownIcon />
        <ArrowDropDownIcon />
      </DownArrowIcon>
      <ZapAction>
        <Button variant="outlined" color="secondary">Github</Button>
        <Button variant="outlined" color="secondary">Slack</Button>
      </ZapAction>
      <Button variant="contained" color="primary">Proceed</Button>
    </Wrapper>
  </Container>
);

export default CreateZapp;
