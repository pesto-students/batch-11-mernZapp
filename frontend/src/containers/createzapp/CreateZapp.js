import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { setAlert } from './alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ZappDivider } from '../../components/Divider';
import SimpleSelect from '../../components/Dropdown/SimpleSelect';
import ActionSelect from '../../components/Dropdown/ActionSelect';
import { BASE_URL } from '../../utils/env';
import './create-zapp.css';
import { zappService, zappAction } from '../../actions/createzapp';

// const option = JSON.stringify({ options: [{ name: 'Slack', id: 1 }, { name: 'Github', id: 2 }] });

const CreateZapp = ({ zappService, loading, services }) => {
  useEffect(() => {
    zappService();
  }, [zappService]);
  const [action, setAction] = useState({ actions: ['create_gist_list'] });
  const onChange = async (val) => {
    const { token } = localStorage;
    const actionApi = `/actions/${val}`;

    try {
      const res = await axios.get(`${BASE_URL}${actionApi}`, {
        'Content-Type': 'application/json',
        token: `Bearer ${token}`,
      });
      setAction(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const option = services;
  console.log(option);
  return option === null ? (
    <> laoding..........</>
  ) : (
    <Container component="main">
      <CssBaseline />
      <div className="create-zapp">
        <Typography component="h1" variant="h5">
          CreateZapp
        </Typography>
        <ZappDivider />
        <div className="zapp-name-field">
          <Typography variant="h5">Zapp Name:</Typography>
          <TextField id="zappName" variant="outlined" />
        </div>
        <div className="zap-action">
          <SimpleSelect type="Trigger" onchange={onChange} values={option.services} />
          <ActionSelect type="Action" values={action.actions} />
        </div>
        <div className="down-arrow">
          <ArrowDropDownIcon />
          <ArrowDropDownIcon />
        </div>
        <div className="zap-action">
          <SimpleSelect
            type="Trigger"
            onchange={onChange}
            values={option.services}
          />
          <ActionSelect type="Action" values={action.actions} />
        </div>
        <div className="down-arrow">
          <ArrowDropDownIcon />
          <ArrowDropDownIcon />
        </div>
        <div className="zap-action">
          <Button variant="outlined" color="secondary">
            Github
          </Button>
          <Button variant="outlined" color="secondary">
            Slack
          </Button>
        </div>
        <Button variant="contained" color="primary">
          Proceed
        </Button>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  services: state.createzapp.services,
});

export default connect(mapStateToProps, { zappService, zappAction })(
  CreateZapp,
);
