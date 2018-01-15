import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height: deviceHeight } = Dimensions.get("window");

export default class Error extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(-deviceHeight)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  render() {
      return (
       <Animated.View style={
              [styles.container,
              { backgroundColor: 'rgba(52,52,52,0.5)' },
              { transform: [{ translateY: this.state.offset }] }
              ]
          }>
              <View style={styles.innerViewLook}>
                  <Text style={[styles.buttonText,{color: 'red'}]}>{this.props.data}</Text>
                  <TouchableOpacity style={styles.button} onPress={this.closeModal.bind(this)}>
                    <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
          </Animated.View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width:150,
      backgroundColor:'#1c313a',
       borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    innerViewLook:{
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
  });
  