import React, { Component } from 'react';
import { View, Text, TextInput ,StyleSheet} from 'react-native';


const TxtInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View>
            <TextInput
                 autoCorrect={false}
                 placeholder={placeholder}
                 secureTextEntry={secureTextEntry}
                 value={value}
                 onChangeText={onChangeText}
                 style={inputStyle}
                />
        </View>
    );
};
const TxtButton = ({  placeholder}) => {

  const { inputStyle, labelStyle, containerStyle,buttonText } = styles;

  return (
      <View>
          <Text style={buttonText} />
      </View>
  );
};

const styles = StyleSheet.create({
    container : {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center'
    },
  
    inputStyle: {
      width:300,
      backgroundColor:'rgba(255, 255,255,0.2)',
      borderRadius: 25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#ffffff',
      marginVertical: 10
    },
    button: {
      width:300,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'white',
      textAlign:'center'
    },
    errorTextStyle: {
      color: '#E64A19',
      alignSelf: 'center',
      paddingTop: 10,
      paddingBottom: 10
  }
  });
export { TxtInput,TxtButton };