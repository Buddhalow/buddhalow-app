import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import Colors from '../../../native-base-theme/variables/commonColor';

const PrimaryButton = ({
  onPress, isProcessing, text, borderRadius=50, processingText,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{shadowOpacity: 0.28, elevation: 12, shadowColor: '#000000', shadowRadius: 13,}}>
      <ImageBackground source={require('../../images/primary_gradient.png')} style={{

        justifyContent: 'center', overflow: 'hidden', padding: 15, paddingLeft: 58, opacity: isProcessing ? 0.5 : 1, paddingRight: 58, alignItems: 'center', borderRadius, backgroundColor: Colors.brandPrimary,
      }}
      >
        <Text style={{ color: 'white' }}>{isProcessing ? processingText : text}</Text>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

PrimaryButton.defaultProps = {
  isProcessing: false,
  processingText: '',
}

PrimaryButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool,
  text: PropTypes.string.isRequired,
  processingText: PropTypes.string,
};

export default PrimaryButton;
