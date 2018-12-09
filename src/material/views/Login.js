import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button/Button';
import {
  Form,
  Alert,
  FormGroup,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardContent from "@material-ui/core/CardContent/CardContent";

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit, history } = this.props;
    onFormSubmit(this.state)
      .then(() => history.push('/dashboard'))
      .catch(e => console.log(`Error: ${e}`));
  }
  render() {
    const { loading, error } = this.props;
    const { email, password } = this.state;

    // Loading
    if (loading) return <Loading />;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card>
            <CardHeader>
              Login
            </CardHeader>
            <CardContent>
              {!!error && (
                <Alert color="danger">
                  {error}
                </Alert>
              )}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="john@doe.corp"
                    value={email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                  Login
                </Button>
              </Form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(Login);
