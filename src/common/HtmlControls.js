import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Styles';

const TxtInput = ({ label, value, onChangeText, placeholder, secureTextEntry,backgroundColor }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View>
            <TextInput
                 autoCorrect={false}
                 placeholder={placeholder}
                 secureTextEntry={secureTextEntry}
                 value={value}
                 onChangeText={onChangeText}
                 style={styles.inputBox}
                />
        </View>
    );
};
const TxtButton = ({  placeholder}) => {

  const { inputStyle, labelStyle, containerStyle,buttonText } = styles;

  return (
      <View>
          <Text  style={styles.buttonText} />
      </View>
  );
};

export { TxtInput,TxtButton };