import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FeedContainer from './components/FeedContainer';

export default function App() {
  return (
    <>
    <StatusBar style="dark"/>
    <View style={styles.appContainer}>
      <NavBar />
      <FeedContainer />
      <Footer />
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
});
