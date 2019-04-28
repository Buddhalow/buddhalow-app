import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Icon,
} from 'native-base';
import { ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Loading from '../components/Loading';
import Messages from '../components/Messages';

import PrimaryButton from '../components/PrimaryButton';
import { translate } from '../../i18n';
import Colors from '../../../native-base-theme/variables/commonColor';

class ForgotPasswordScreen extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      resetSuccess: false,
      email: (props.member && props.member.email) ? props.member.email : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => this.setState({ resetSuccess: true }))
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) {
      return (
        <ImageBackground
          style={{
            padding: 20, alignItems: 'stretch', justifyContent: 'center', flex: 1, backgroundColor: '#333',
          }}
        >
          <Loading />
        </ImageBackground>
      );
    }

    if (this.state.resetSuccess) {
      return (
        <ImageBackground
          style={{
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#333',
          }}
        >
          <Icon
            name="ios-checkmark-circle"
            style={{
              color: Colors.brandPrimary, fontSize: 128, width: 128, height: 118,
            }}
          />
          <View style={{ height: 50 }} />
          <Text style={{ textAlign: 'center', color: 'white' }}>{translate('PasswordResetSuccessText')}</Text>
          <View style={{ height: 20 }} />

          <PrimaryButton onPress={() => Actions.login()} style={{ textAlign: 'center', color: 'white' }} text="Back" />

        </ImageBackground>
      );
    }
    return (
      <ImageBackground
        style={{
          padding: 20, alignItems: 'stretch', justifyContent: 'center', flex: 1, backgroundColor: '#333',
        }}
      >

        {error && <Messages message={error} />}

        <Text style={{ textAlign: 'center', color: 'white', padding: 20 }}>
          {translate('ResetPasswordText')}
        </Text>
        <Text style={{ textAlign: 'center', color: 'white', padding: 20 }}>
          {translate('Email')}
        </Text>
        <View style={{ height: 20 }} />
        <TextInput
          autoCapitalize="none"
          value={this.state.email}
          placeholder="example@example.com"
          keyboardType="email-address"
          onChangeText={v => this.handleChange('email', v)}
          style={{
            color: 'black',
            textAlign: 'center',
            backgroundColor: '#eee',
            padding: 20,
            borderRadius: 28,
          }}
        />
        <View style={{ height: 20 }} />
        <PrimaryButton onPress={this.handleSubmit} text={translate('ResetMyPassword')} />
        <View style={{ height: 20 }} />
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Back</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
}

export default ForgotPasswordScreen;
