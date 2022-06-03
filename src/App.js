import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import profilePhoto from './assets/profile.jpeg';
import Card from './components/Card';

const App = () => {

  function handleSocialMedia(socialMedia) {
    switch (socialMedia) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/leticia-pbs/');
        break;

      case 'instagram':
        Alert.alert('Meu Instagram', 'https://www.instagram.com/leticiapereiraab/');
        break;

      case 'github':
        Alert.alert('Meu Github', 'https://github.com/LeticiaBarbosa-dev');
        break;
    }
  }

  return (
    <SafeAreaView style={style.page}>
      <View style={style.containerHeader}>
        <Image source={profilePhoto} style={style.photo}></Image>
        <Text style={style.name}>LETÍCIA BARBOSA</Text>
        <Text style={style.job}>Desenvolvedora FrontEnd Júnior</Text>
        <View style={style.socialMedia}>
          <TouchableOpacity onPress={() => handleSocialMedia('github')}>
            <Icon name='github' size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSocialMedia('instagram')}>
            <Icon name='instagram' size={30} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
            <Icon name='linkedin' size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Card title="Experiência Profissional">
        <Text style={style.cardContentText}>ReactJs Developer</Text>
        <Text style={style.cardContentText}>React Native Developer</Text>
      </Card>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  job: {
    color: '#939393',
  },
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10,
  }
})

export default App;
