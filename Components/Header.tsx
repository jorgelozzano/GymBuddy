import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

type HeaderButton = {
  child: JSX.Element;
  onPress?: () => void;
};

type Props = {
  leftButton?: HeaderButton;
  rightButton?: HeaderButton;
  screen: string;
};

type ProfileScreenNavigationProp = StackNavigationProp<any, 'Profile'>;
type HomeScreenNavigationProp = StackNavigationProp<any, 'Home'>;

export const Header = ({leftButton, rightButton, screen}: Props) => {
  const profileNavigation = useNavigation<ProfileScreenNavigationProp>();
  const homeNavigation = useNavigation<HomeScreenNavigationProp>();
  const handleRightButtonPress = () => {
    if(screen === 'HomeScreen'){
      profileNavigation.navigate("ProfileScreen")
    }
  }
  const handleBackButton = () => {
    if(screen === 'ProfileScreen'){
      homeNavigation.navigate('HomeScreen')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {screen === 'ProfileScreen' && (
          <Button title='Back' onPress={handleBackButton}/>
        )}
      </View>
      <View style={styles.middleContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>Gym Buddy</Text>
      </View>
      <View style={styles.rightContainer}>
        
          <TouchableOpacity onPress={handleRightButtonPress}>
          <Avatar
              size={32}
              rounded
              title="JL"
              containerStyle={{ backgroundColor: "blue" }}
            />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#e4e4e4',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});