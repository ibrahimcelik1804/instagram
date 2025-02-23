import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderTop from '../../components/home/HeaderTop';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';
import posts from '../../utils/posts';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderTop />
      <Stories />
      <ScrollView>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
