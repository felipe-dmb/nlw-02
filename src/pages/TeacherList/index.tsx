import React from 'react';
import {View, Text} from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

function TeacherList() {
  return(
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"/>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        <TeacherItem 
          name="Felipe Barbosa"
          subject="Quimica"
          avatar="https://github.com/felipe-dmb.png"
          bio=""
          cost="80.00"
        />
        <TeacherItem 
          name="Felipe Barbosa"
          subject="Quimica"
          avatar="https://github.com/felipe-dmb.png"
          bio=""
          cost="80.00"
        />
        <TeacherItem 
          name="Felipe Barbosa"
          subject="Quimica"
          avatar="https://github.com/felipe-dmb.png"
          bio=""
          cost="80.00"
        />

      </ScrollView>
    </View>
  );
}

export default TeacherList;