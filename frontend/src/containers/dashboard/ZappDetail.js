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

// const ItemContainer = styled.div`
//   position: relative;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;
// `;

// const ItemDetails = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const ItemName = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   align-items: center;
//   padding: .5rem;
//   @media (max-width: 768px) {
//     width: 100%;
//     font-size: 0.8rem;
//     && p {
//       font-size: .8rem;
//     }
//   }
// `;

// const ZaapName = styled.div`
//   display: flex;
//   justify-content: center;
//   left: 0;
//   width: auto;
//   right: 0;
//   top: 5px;
//   position: absolute;
//   @media (max-width: 768px) {
//     display: none;
// `;

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
