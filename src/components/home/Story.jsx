import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PlusBlue from '../../assets/icons/plusBlue';

const Story = ({item, index}) => {
  return (
    <View style={{width: 60, marginHorizontal: 12, alignItems: 'center'}}>
      {index === 0 ? ( 
        <View
          style={{
            width: 74,
            height: 74,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            marginBottom: 5,
          }}>
          <Image
            source={{uri: item.user.avatar}}
            style={{width: 68, height: 68, borderRadius: 35}}
          />
          <View style={{position:"absolute", right:4,bottom:4}}>
            <PlusBlue />
          </View>
        </View>
      ) : (
        <LinearGradient
          style={{
            width: 72,
            height: 72,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 35,
            marginBottom: 5,
          }}
          colors={['#C913B9', '#F9373F', '#FECD00']}>
          <View
            style={{
              width: 68,
              height: 68,
              backgroundColor: 'white',
              borderRadius: 34,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item.user.avatar}}
              style={{width: 61, height: 61, borderRadius: 31}}
            />
          </View>
        </LinearGradient>
      )}

      <Text numberOfLines={1} style={{fontSize: 12}}>
        {item.user.name}
      </Text>
    </View>
  );
};

export default Story;
