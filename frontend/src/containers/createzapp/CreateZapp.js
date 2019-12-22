/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import ActionService from '../../components/Dropdown/ActionService';
import { BASE_URL } from '../../utils/env';
import { setAlert } from '../../actions/alert';
import './create-zapp.css';
import { zappService, zappAction } from '../../actions/createzapp';
import SignInWithGithub from '../githubOAuth';

const { token } = localStorage;
const config = {
  'Content-Type': 'application/json',
  token: `Bearer ${token}`,
};
const CreateZapp = ({ zappService, services }) => {
  useEffect(() => {
    zappService();
  }, [zappService]);
  const [inputDiv, setinputDiv] = useState(false);
  const [action, setAction] = useState({ actions: ['create_gist_list'] });
  const [zapptitle, setTitle] = useState({ actions: ['create_gist_list'] });
  const [actionService, setActionService] = useState({ triggers: ['action_service'] });

  const [formData, setFormData] = useState({
  });
  const onSelect = async (val) => {
    const actionApi = `/actions/${val}`;

    try {
      const res = await axios.get(`${BASE_URL}${actionApi}`, config);
      setAction(res.data);
    } catch (err) {
      return err;
    }
  };
  const onServiceSelect = async (val) => {
    const actionApi = `/triggers/${val}`;
    setinputDiv(true);

    try {
      const res = await axios.get(`${BASE_URL}${actionApi}`, config);
      setActionService(res.data);
    } catch (err) {
      return err;
    }
  };
  const onActionService = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onTitleInput = (e) => {
    setTitle({ ...zapptitle, [e.target.name]: e.target.value });
  };

  const onProceed = async () => {
    const body = {
      title: zapptitle.zappname,
      action: {
        serviceName: 'github',
        name: action.actions[0],
      },
      trigger: {
        serviceName: 'github',
        name: actionService.triggers[0],
        data: {
          repo: 'task-manager',
        },
      },
      actionRequestBody: {
        description: formData.description,
        public: true,
        files: {
          [formData.file]: {
            content: formData.content,
          },
        },
      },
    };
    const createzappApi = '/create-zapp';

    try {
      const res = await axios.post(`${BASE_URL}${createzappApi}`, body, config);
      setAlert('Zapp Created Successfully', 'danger');
    } catch (err) {
      setAlert('Zapp cannot be created', 'danger');
    }
  };
  const option = services;
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
          <TextField id="zappname" label="Zapp Name" name="zappname" variant="outlined" onChange={onTitleInput} />
        </div>
        <div className="zap-action">
          <SimpleSelect type="Trigger" onchange={onSelect} values={option.services} />
          <SimpleSelect type="Action" onchange={onSelect} values={option.services} />
        </div>
        <div className="down-arrow">
          <ArrowDropDownIcon />
          <ArrowDropDownIcon />
        </div>
        <div className="zap-action">
          <ActionSelect type="Action" onchange={onServiceSelect} values={action.actions} />
          <ActionService type="ActionService" onchange={onActionService} values={actionService.triggers} />
        </div>
        {inputDiv ? (
          <div className="zapp_field">
            <TextField id="file" label="Filename" name="file" variant="outlined" onChange={onActionService} />
            <TextField id="content" label="Content" name="content" variant="outlined" onChange={onActionService} />
          </div>
        ) : null}
        { inputDiv ? (
          <div className="zapp_description">
            <TextField id="description" multiline rows="4" label="Decription" name="description" variant="outlined" onChange={onActionService} />
          </div>
        ) : null}
        <div className="down-arrow">
          <ArrowDropDownIcon />
          <ArrowDropDownIcon />
        </div>
        <div className="zap-action">
          <SignInWithGithub />
        </div>
        <Button variant="contained" color="primary" onClick={onProceed}>
          Proceed
        </Button>
      </div>
    </Container>
  );
};

CreateZapp.propTypes = {
  zappService: PropTypes.func,
  services: PropTypes.object,
};

const mapStateToProps = (state) => ({
  services: state.createzapp.services,
});

export default connect(mapStateToProps, { zappService, zappAction })(
  CreateZapp,
);
