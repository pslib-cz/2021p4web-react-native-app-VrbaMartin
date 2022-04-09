import { Text } from "react-native";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native-web";
import { useEffect } from "react/cjs/react.production.min";

const styles = StyleSheet.create({

  clock: {
    top: 0,
    width: 400,
    height: 400,
    position: 'static',
    resizeMode: 'contain',
    zIndex: 0
  },
  hour: {
    top: 0,
    width: 400,
    height: 400,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 1
  },
  minute: {
    top: 0,
    width: 400,
    height: 400,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 2
  },
  second: {
    top: 0,
    width: 400,
    height: 400,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 3
  }
});


export default function Hodiny(props) {

  const d = {
    hod: Math.floor((props.hod+props.min/60)*30)+"deg",
    min: (6*(props.min)) +"deg",
    sec: (6*(props.sec)) +"deg",
  }; //360degrees /60 /2
  


  return (
    <View>
      <Image
        style={styles.clock}
        source={require('../images/clock.png')}
        resizeMode={'cover'} 
        />
      <Image
        style={[styles.hour, {
          transform: [{ rotate: d.hod }]
        }]}
        source={require('../images/hourhand.png')}
        resizeMode={'cover'}
        />
      <Image
        style={[styles.minute, {
          transform:[{ rotate: d.min }]
        }]}
        source={require('../images/minutehand.png')}
        resizeMode={'cover'}
        />
      <Image
        style={[styles.second, {
          transform:[{ rotate: d.sec }]
        }]}
        source={require('../images/secondhand.png')}
        resizeMode={'cover'}
      />
    </View>
  );
}