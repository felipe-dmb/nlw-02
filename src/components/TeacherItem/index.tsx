import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';

import styles from './styles';
import Favorites from '../../pages/Favorites';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {
  const [isFavorite,setIsFavorite] = useState(favorited);

  async function handleLinkToWhatsApp() {
    await api.post('connections',{
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }
  async function handleToogleFavorite() {

    const favorites = await AsyncStorage.getItem('favorites')
                        .then( response => response ? JSON.parse(response): []);
    if(isFavorite) {
      const favoriteIndex = favorites.findIndex((favoriteTeacher:Teacher) => {
        return teacher.id === favoriteTeacher.id
      });
      favorites.splice(favoriteIndex,1);
      setIsFavorite(false);
    } else {
      favorites.push(teacher);
      setIsFavorite(true);    
    }
    await AsyncStorage.setItem('favorites',JSON.stringify(favorites));
  }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={{uri: teacher.avatar}} 
          style={styles.avatar} 
          resizeMode="contain"
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      
      <Text style={styles.bio}>
      {teacher.bio}
      </Text>
      

      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/Hora {'   '}
          <Text style={styles.costValue}>R$ {teacher.cost}</Text> 
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            style={[
              styles.favoriteButton, 
              isFavorite ? styles.favorited : {}
            ]} 
            onPress={handleToogleFavorite}
          >
            {(isFavorite) ? 
              <Image source={unfavoriteIcon} /> :
              <Image source={heartOutlineIcon} />
            }
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleLinkToWhatsApp}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem