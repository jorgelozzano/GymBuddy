import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../Components/Header';
import MainContent from '../Components/MainContent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header screen='HomeScreen'/>
      </View>
      <View style={styles.mainContentContainer}>
        <MainContent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '10%'
  },
  mainContentContainer: {
    height: '95%'
  },
});

export default HomeScreen;
