import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [teachers, setTeachers] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
        if (response) {
          setTeachers(JSON.parse(response));
        }
    });
  });
  

  return(
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {teachers.map( (teacher: Teacher) => {
          return (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={true}
          />);
        })}

      </ScrollView>
    </View>
  );
}

export default Favorites;