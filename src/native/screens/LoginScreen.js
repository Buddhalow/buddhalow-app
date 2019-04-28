import React from 'react';
import { USERNAME, PASSWORD } from './fixtures';
import PropTypes from 'prop-types';
import { ImageBackground, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

import PrimaryButton from '../components/PrimaryButton';
import { translate } from '../../i18n';

class LoginScreen extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    locale: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    fetchBalances: PropTypes.func.isRequired
  }

  static defaultProps = {
    error: null,
    success: null,
    locale: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: USERNAME,
      password: PASSWORD,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }
  componentWillUnmount() {

  }

  handleSubmit = () => {
    this.setState({ isLoggingIn: true });
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => {
        Actions.pop();
      })
      .catch((e) => {
        this.setState({ isLoggingIn: false, error: 'Bad username or password' });
      });
  }

  render() {
    const logoWidth = Dimensions.get('window').width * 0.7;
    const logoHeight = logoWidth * 0.5;
    const { email, password } = this.state;
    return (
      <ImageBackground
        style={{
          alignItems: 'stretch', justifyContent: 'center', flex: 1, backgroundColor: '#333',
        }}
      >
        <View
          style={{
            padding: 50, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch',
          }}
        >
          <Image source={require('../../images/banner.png')} style={{ resizeMode: 'contain', width: logoWidth, height: logoHeight }} />

          <View style={{ height: 50 }} />
          <Text style={{ color: 'white', textAlign: 'center' }}>{translate('Username')}</Text>
          <View style={{ height: 20 }} />
          <TextInput
            autoCapitalize="none"
            value={email}
            placeholder="youremail@example.com"
            keyboardType="email-address"
            style={{
              backgroundColor: '#eee', padding: 20, borderRadius: 28,
              textAlign: 'center',
            }}
            onChangeText={v => this.handleChange('email', v)}
          />

          <View style={{ height: 20 }} />
          <Text style={{color: 'white', textAlign: 'center'}}>{translate('Password')}</Text>
          <View style={{ height: 20 }} />
          <TextInput
            secureTextEntry
            value={password}
            style={{
              backgroundColor: '#eee', padding: 20, borderRadius: 28,
              textAlign: 'center',
            }}
            placeholder="*PASSWORD*"
            onChangeText={v => this.handleChange('password', v)}
          />
          <View style={{ height: 20 }} />
          {this.state.error ? <View style={{ padding: 20 }}>
            <Text style={{ textAlign: 'center', color: '#ffeeee' }}>{this.state.error}</Text>
          </View> : null}
          <PrimaryButton onPress={this.handleSubmit} text={translate('Login')} />
          <TouchableOpacity onPress={() => Actions.forgotpassword()}>
            <Text style={{ textAlign: 'center', color: 'white', padding: 20 }}>{translate('ForgotPasswordQuestion')}</Text>
          </TouchableOpacity>
        </View>
        <View />
      </ImageBackground>
    );
  }
}

export default LoginScreen;

