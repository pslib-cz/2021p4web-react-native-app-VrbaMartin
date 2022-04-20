import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native-web";
import Hodiny from "../components/Hodiny";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },

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


export default function HodinyPage() {

    const [hod, setHod] = useState(new Date().getHours())
    const [min, setMin] = useState(new Date().getMinutes())
    const [sec, setSec] = useState(new Date().getSeconds())
  
    //https://devtrium.com/posts/set-interval-react
    useEffect(() => {
      const interval = setInterval(() => {
        updateTime();
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
  
   const updateTime = ()=>{
     console.log("updating")
    let newdate = new Date();
    setHod(newdate.getHours());
    setMin(newdate.getMinutes()); 
    setSec(newdate.getSeconds());
  }
  
    return (
      <SafeAreaView style={styles.container}>
        <Text>hod={hod} min={min} sec={sec}</Text>
        <Hodiny hod={hod} min={min} sec={sec} />
  
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }