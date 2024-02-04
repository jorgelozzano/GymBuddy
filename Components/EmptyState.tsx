import { View, Text, TouchableOpacity, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import ExerciseModal from './ExerciseModal';
import { useState } from 'react';

type Props = {
    text: string,
    type: string
}
export const EmptyState = ({text, type}: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 40}}>{text}</Text>
        {type === 'empty_exercises' ? 
        <Button title='Add Exercise' onPress={openModal}/>
        :
        null    
    }
    <ExerciseModal
        visible={modalVisible}
        onClose={closeModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});