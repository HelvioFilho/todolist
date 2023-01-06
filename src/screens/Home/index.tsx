import 'react-native-get-random-values';
import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { TaskList } from '../../components/TaskList';
import { styles } from './styles';
import { v4 as uuid } from 'uuid';
import Logo from '../../assets/Logo.png';
import ClipBoard from '../../assets/Clipboard.png';

export interface DataProps {
  id: string;
  text: string;
  isChecked: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<DataProps[]>([]);
  const [task, setTask] = useState('');
  

  function handleAddTask() {
    const data = {
      id: uuid(),
      text: task,
      isChecked: false
    }
    setTasks(old => [...old, data]);
    setTask('');
  }

  function handleSelect(id: string) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleRemove(id: string) {
    setTasks(old => old.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={Logo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            onChangeText={setTask}
            value={task}
          />
          <TouchableOpacity
            style={[styles.button, !task && { backgroundColor: '#4EA8DE' }]}
            activeOpacity={0.8}
            onPress={handleAddTask}
            disabled={!task}
          >
            <Feather name='plus-circle' size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerText}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, { color: '#4EA8DE' }]}>Criadas</Text>
            <View style={styles.pill}>
              <Text style={styles.number}>{tasks.length}</Text>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, { color: '#8284FA' }]}>Concluídas</Text>
            <View style={styles.pill}>
              <Text style={styles.number}>
                {
                  tasks.reduce((count, task) => { 
                    if(task.isChecked){
                      return count + 1;
                    }
                    return count;
                  }, 0)
                }
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskList
              data={item}
              onSelect={() => handleSelect(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContent}>
              <Image source={ClipBoard} />
              <Text style={[styles.textEmpty, styles.textEmptyBold]}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}