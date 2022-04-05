import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Hodiny from './components/Hodiny';
import { useEffect, useState } from 'react';

export default function App() {

  const [hod, setHod] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [now, setNow] = useState(new Date())

  const [test,settest] = useState(0);

  //https://devtrium.com/posts/set-interval-react
  useEffect(() => {
    var now = new Date();
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
  
 setNow(new Date())
  settest(test => test+1);

}

  return (
    <SafeAreaView style={styles.container}>
      <Text>hod={hod} min={min} sec={sec}</Text>
      <Hodiny hod={hod} min={min} sec={sec} />
  <Text>{test}</Text>

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
