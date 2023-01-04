import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { DataProps } from '../../screens/Home';
import { styles } from './styles';

interface TaskProps {
  data: DataProps;
  onSelect: () => void;
  onRemove: () => void;
}

export function TaskList({ data, onSelect, onRemove }: TaskProps) {
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
        <Text style={[styles.text, data.isChecked && styles.textChecked]}>Integer urna interdum massa libero auctor neque turpis turpis semper.</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.trash}
        activeOpacity={.8}
        onPress={onRemove}
      >
        <Feather name='trash-2' size={20} color={'#808080'} />
      </TouchableOpacity>
    </View>
  );
}