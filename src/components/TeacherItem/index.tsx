import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';

import styles from './styles';

interface TeacherItemProps {
  name?: string,
  subject?: string,
  bio?: string,
  avatar?: string,
  cost?: string,
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={{uri: props.avatar}} 
          style={styles.avatar} 
          resizeMode="contain"
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.subject}>{props.subject}</Text>
        </View>
      </View>

      
      <Text style={styles.bio}>
      {props.bio}
      Entusiasta das melhores tecnologias de química avançada.
      {'\n'}{'\n'}
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
      Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </Text>
      

      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/Hora {'   '}
          <Text style={styles.costValue}>R$ {props.cost}</Text> 
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* {<Image source={heartOutlineIcon} />} */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem