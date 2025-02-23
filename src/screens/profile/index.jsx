import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderProfile from '../../components/profile/header';
import ProfileInfo from '../../components/profile/profileInfo';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStory from '../../components/profile/ProfileStory';
import ProfileSquar from '../../assets/icons/profileSquar';
import ProfilePlay from '../../assets/icons/profilePlay';
import ProfilePerson from '../../assets/icons/profilePerson';
import posts from '../../utils/posts';

const {width} = Dimensions.get('window');

const ProfileScreen = () => {
  const imgWidth = (width - 8) / 3;
  return (
    <SafeAreaView>
      <ScrollView>
        <HeaderProfile />
        <ProfileInfo />
        <ProfileBio />
        <ProfileStory />
        <View style={{flexDirection: 'row'}}>
          <ProfileSquar />
          <ProfilePlay />
          <ProfilePerson />
        </View>
        <FlatList style={{marginLeft:1}}
          data={posts}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Image
                source={{uri: item.image}}
                style={{width: imgWidth, height: imgWidth, margin: 1}}
              />
            </TouchableOpacity>
          )}
        />
        <Text>ufu7fy</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
