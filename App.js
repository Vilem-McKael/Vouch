import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedContainer from './components/FeedContainer';
import FeedView from './Views/FeedView';
import AddEntryView from './Views/AddEntryView';
import ProfileView from './Views/ProfileView';

export default function App() {

  const [view, setView] = useState(<FeedView/>)

  function handleChangeView(viewName) {
    if (viewName === 'profile') {
      setView(<ProfileView/>)
    } else if (viewName === 'add') {
      setView(<AddEntryView/>)
    } else if (viewName === 'home') {
      setView(<FeedView/>)
    }
  }

  return (
    <>
    <StatusBar style="dark"/>
    <View style={styles.appContainer}>
      <Header style={styles.header}/>
      <View style={styles.mainView}>
        {view}
      </View>
      <Footer style={styles.footer} handleChangeView={handleChangeView}/>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#55AA55',
    paddingTop: 50
  },
  header: {
    flex: 1,
  },
  mainView: {
    flex: 6,
  },
  footer: {
    flex: 1,
  }
});
