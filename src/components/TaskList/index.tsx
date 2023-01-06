import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { DataProps } from '../../screens/Home';
import { styles } from './styles';

interface TaskProps {
  data: DataProps;
  onSelect: () => void;
  onRemove: () => void;
}

export function TaskList({ data, onSelect, onRemove }: TaskProps) {
  const [isTrashActive, setIsTrashActive] = useState(false);

  function handleDeleteConfirmation(){
    setIsTrashActive(true),
    Alert.alert('Atenção', 'Tem certeza que deseja excluir a tarefa? \n Essa ação não pode ser desfeita!',[
      {
        text: 'Sim',
        onPress: onRemove,
      },
      {
        text: 'Não',
        onPress: () => setIsTrashActive(false),
        style: 'cancel',
      }
    ],
    {
      cancelable: true,
      onDismiss: () => setIsTrashActive(false),
    }
    );
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSelect}
        style={styles.button}
      >
        {
          data.isChecked
            ?
            <View style={[styles.circle, styles.checked]}>
              <FontAwesome5 name='check' size={9} color="#F2F2F2" />
            </View>
            :
            <View style={[styles.circle, styles.unChecked]} />
        }
        <Text style={[styles.text, data.isChecked && styles.textChecked]}>{data.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.trash}
        activeOpacity={.8}
        onPress={handleDeleteConfirmation}
      >
        <Feather name='trash-2' size={20} color={isTrashActive ? '#E25858' : '#808080'} />
      </TouchableOpacity>
    </View>
  );
}