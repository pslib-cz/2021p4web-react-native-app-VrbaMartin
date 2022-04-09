import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Hodiny from './components/Hodiny';
import { useEffect, useState } from 'react';

export default function App() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
