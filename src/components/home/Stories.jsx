import {View, Text, FlatList} from 'react-native';
import React from 'react';
import stories from '../../utils/stories';
import Story from './Story';

const Stories = () => {
  return (
    <View style={{paddingVertical: 10}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{}}
        data={stories}
        keyExtractor={item => item.id}
        renderItem={({item,index}) => <Story item={item} index={index} />}
      />
    </View>
  );
};

export default Stories;
