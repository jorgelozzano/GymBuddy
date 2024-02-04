import { useEffect, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Keyboard } from 'react-native';

type Props = {
  visible: boolean,
  onClose: () => void,
}

const ExerciseModal = ({ visible, onClose, onSelectItem, onNewTranslationTriggered, typeSelector }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [languages, setLanguages] = useState([]);
  const [tokenState, setTokenState] = useState<string | null>("");

  let token: string | null;
  

  const handleClose = () => {
    onClose();
  }


  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }}>
              <Text style={{color: '#3C4242', fontStyle: 'italic', fontSize: 20}}>Add new exercise</Text>
              <TouchableOpacity onPress={handleClose}>
                <Text style={{color: '#D0006F', fontSize: 14}}>CLOSE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.searchInput}>
              <TextInput
              style={{width: '85%', height: '100%', color: '#000'}}
              // style={{width: '85%', height: '100%', color: '#3C4242'}}
              placeholder="Search language..."
              onChangeText={() => {console.log('first')}}
              value={searchQuery}
              placeholderTextColor={'#3C4242'}

            />
            </View>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <Text>Hola mundo</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: '90%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: '10%',
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 22,
    width: '100%'
  },
  modalView: {
  height: '90%',
  width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  langContainer: {
    width: '100%',
    padding: 20,
    borderColor: '#9DB0AC',
    borderWidth: 0.5,
    fontSize: 18,
    color: '#3C4242'
  },
  searchInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});

export default ExerciseModal;
