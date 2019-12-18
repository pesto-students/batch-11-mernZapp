import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { ZappDivider } from '../../components/Divider';
import { Subheadings } from '../../components/Subheading';
import Switches from '../../components/Switches';
import { TypographyComponent } from '../../components/Typography';
import '../../App.css';
import './zapp.css';


const ZappDetail = () => (
  <Container component="main">
    <CssBaseline />
    <div className="wrapper" direction="column">
      <div className="itemContainer">
        <Subheadings float="left" text="Zapp information" border="none" />
        <ZappDivider />
        <div className="itemDetails">
          <div className="zaapName">
            <Subheadings float="center" text="Zapp name" border="none" />
          </div>
          <div className="itemName">
            <TypographyComponent text="Github to slack" />
            <TypographyComponent text="Issue Created" />
            <TypographyComponent text="xyz-mail@gmail.com" />
            <Switches />
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
      <ZappDivider />
    </div>
  </Container>
);

export default ZappDetail;
