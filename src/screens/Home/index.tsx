import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'
import Logo from '../../assets/Logo.png';
import ClipBoard from '../../assets/Clipboard.png';
import { TaskList } from '../../components/TaskList';

export interface DataProps {
  id: number;
  text: string;
  isChecked: boolean;
};

export function Home() {
  const [tasks, setTasks] = useState<DataProps[]>([]);
  const [task, setTask] = useState('');

  const data: DataProps[] = [

  ];

  function handleAddTask(){

  }

  function handleSelect(id: number) {
    console.log(`item ${id} marcado`);
  }

  function handleRemove(id: number) {
    console.log(`item ${id} removido`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={Logo}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => { }}
          >
            <Feather name='plus-circle' size={16} color="#F2F2F2" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.containerText}>
          <View style={styles.wrapper}>
            <Text style={[styles.text, { color: '#4EA8DE' }]}>Criadas</Text>
            <View style={styles.pill}>
              <Text style={styles.number}>5</Text>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={[styles.text, { color: '#8284FA' }]}>Concluídas</Text>
            <View style={styles.pill}>
              <Text style={styles.number}>2</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
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