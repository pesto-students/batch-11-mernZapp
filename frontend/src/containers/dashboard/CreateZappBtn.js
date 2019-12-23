import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './zapp.css';


// eslint-disable-next-line arrow-body-style
const CreateZapp = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="createZapp">
        <Typography component="h1" variant="h4">
          Create New Zapp
        </Typography>
        <Link to="/createzapp">
          <AddCircleIcon />
        </Link>
      </div>
    </Container>
  );
};

// const mapStateToProps = (state) => ({
//   services: state.services,
// });

// zappService.propTypes = {
//   zappService: PropTypes.func.isRequired,
// };

// export default connect(
//   mapStateToProps,
//   { zappService },
// )(CreateZapp);
export default CreateZapp;
