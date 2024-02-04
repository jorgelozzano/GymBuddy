import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { Header } from '../Components/Header';
import MainContent from '../Components/MainContent';

const ProfileScreen = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Header screen='ProfileScreen'/>
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
export default ProfileScreen;
