import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import TaskList from './src/components/TaskList';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([
    {key: 1, task: 'Comprar pao'},
    {key: 2, task: 'Estudar react native'},
    {key: 3, task: 'Ir na academia hoje a noite'},
    {key: 4, task: 'Comprar chocolate'},
    {key: 5, task: 'Terminar o imersão React'},
  ]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content"/>
      
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <FlatList
        marginHorizontal= {10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({item}) => <TaskList data={item}/> }
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons style={{marginLeft: 5, marginRight: 5}} name="md-arrow-back" size={40} color="#FFF"/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nova tarefa</Text>
          </View>

          <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
            <TextInput
              multiline={true}
              placeholderTextColor="#747474"
              autoCorrect={false}
              placeholder="O que precisa fazer hoje?"
              style={styles.input}
              value={input}
              onChangeText={(texto) => setInput(texto)}
            />
            <TouchableOpacity style={styles.handleAdd} onPress={() => setOpen(false)}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>

        </SafeAreaView>
      </Modal>

      <AnimatedBtn 
      style={styles.fab}
      useNativeDriver
      animation="bounceInUp"
      duration={1500}
      onPress={() => setOpen(true)}
      >
        <Ionicons name="ios-add" size={35} color="#FFF"/>
      </AnimatedBtn>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#171d31',
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF',
  },
  fab:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },
  modal:{
    flex: 1,
    backgroundColor: '#171d31',
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitle:{
    marginLeft: 15,
    fontSize: 23,
    color: '#FFF',
  },
  modalBody:{
    marginTop: 15,
  },
  input:{
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd:{
    backgroundColor: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText:{
    fontSize: 20,
  }
});
