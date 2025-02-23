import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {profile} from '.././../assets/Images/profile.png';
import LinearGradient from 'react-native-linear-gradient';
import stories from '../../utils/stories';

const ProfileInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <LinearGradient
        style={{
          width: 90,
          height: 90,
          borderRadius: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        colors={['#C913B9', '#F9373F', '#FECD00']}>
        <View
          style={{
            backgroundColor: 'white',
            width: 84,
            height: 84,
            borderRadius: 42,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: stories[0].user.avatar}}
            style={{width: 78, height: 78, borderRadius: 40}}
          />
        </View>
      </LinearGradient>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 18,
        }}>
        <View>
          <Text style={styles.number}>2.345</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Text style={styles.number}>5,569</Text>
          <Text style={styles.text}>Fllowers</Text>
        </View>
        <View>
          <Text style={styles.number}>9,010</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  number: {
    fontWeight: '600',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    color: '#000000',
  },
});
