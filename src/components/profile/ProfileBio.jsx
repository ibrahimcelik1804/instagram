import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import stories from '../../utils/stories';
import Person from '../../assets/icons/person';

const ProfileBio = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 0}}>
        <Text style={[styles.textFont, {fontWeight: '800'}]}>Username</Text>
        <Text
          style={[
            {color: 'gray', fontWeight: '400', marginVertical: 6},
            styles.textFont,
          ]}>
          Category / Genre
        </Text>
        <Text style={[styles.textFont, {textAlign: 'left'}]}>
          🐶 | Adınız✨ 🐾 Macera dolu patilerimle dünyayı keşfediyorum!
          🌍🐕Parklar, sokaklar, her yerdeyim!📍DM’den bana mama atabilirsin😋
        </Text>
        <Text
          style={[{marginTop: 6, fontWeight: 600, font: 12, color: '#004C8B'}]}>
          Link Goes Here
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', width: '20%'}}>
          {stories.slice(1, 4).map((item, index) => (
            <Image
              key={index}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderColor: 'white',
                borderWidth: 3,
                marginRight: -12,
              }}
              source={{uri: item.user.avatar}}
            />
          ))}
        </View>
        <View style={{width: '80%'}}>
          <Text style={{}}>
            Following by{' '}
            <Text style={{fontWeight: '800'}}>usermame, username</Text>
          </Text>
          <Text>
            and <Text style={{fontWeight: '800'}}>100 others</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 8,
          backgroundColor: '#1FA1FF',
          alignItems: 'center',
          height: 30,
          borderRadius: 5,
          justifyContent: 'center',
        }}>
        <Text style={{color: '#ffffff', fontWeight: 800}}>Follow</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', marginTop: 8}}>
        {['Message', 'Subscribe', 'Content', <Person />].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              backgroundColor: '#DCD7C9',
              paddingHorizontal: 16,
              height: 40,
              justifyContent: 'space-evenly',
              marginRight: index === 0 || index === 1 || index === 2 ? 7 : 0,
              alignItems: 'center',
              borderRadius: 3,
              width: index === 3 ? 43 : 105,
            }}>
            <Text style={{fontWeight: '800'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 12, paddingVertical: 6},
  textFont: {fontSize: 16},
  textBold: {},
});
