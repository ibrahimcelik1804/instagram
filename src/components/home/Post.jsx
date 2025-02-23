import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ThreeDot from '../../assets/icons/threeDot';
import LinearGradient from 'react-native-linear-gradient';
import SaveIcon from '../../assets/icons/save';
import Heart from '../../assets/icons/heart';
import Comment from '../../assets/icons/comment';
import Share from '../../assets/icons/share';
import ReadMore from 'react-native-read-more-text';

const {width} = Dimensions.get('window');

const Post = ({post}) => {
  const [focused, setFocused] = useState(false);

  const handlePress = () => {
    setFocused(!focused);
  };

  const renderTruncatedFooter = handlePress => (
    <Text style={{color: '#6E6E6E', marginTop: 5 }} onPress={handlePress}>
      Read more
    </Text>
  );

  const renderRevealedFooter = handlePress => (
    <Text style={{color: '#6E6E6E', marginTop: 5}} onPress={handlePress}>
      Show less
    </Text>
  );

  return (
    <View style={{marginBottom: 20}}>
      {/** Header */}
      <View
        style={[
          styles.header,
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 12,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LinearGradient
            style={{
              width: 37,
              height: 37,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 18,
              marginBottom: 5,
            }}
            colors={['#C913B9', '#F9373F', '#FECD00']}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 18,
                width: 34,
                height: 34,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, borderRadius: 15}}
                source={{uri: post.user.avatar}}
              />
            </View>
          </LinearGradient>
          <Text style={{marginLeft: 12,fontWeight:"700",fontSize:15}}>{post.user.name}</Text>
        </View>

        <ThreeDot />
      </View>
      {/** Image */}
      <View style={styles.image}>
        <Image
          source={{uri: post.image}}
          style={{width: width, height: width}}
        />
      </View>
      {/** Icons */}
      <View
        style={[
          styles.icons,
          {
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: 12,
            marginVertical: 5,
          },
        ]}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handlePress}>
            <Heart focused={focused} />
          </TouchableOpacity>
          <Comment style={{marginHorizontal: 12}} />
          <Share />
        </View>
        <SaveIcon />
      </View>
      {/** Comments */}
      <View style={[styles.comments, {marginHorizontal: 12}]}>
        <Text style={{fontWeight: '600', fontSize: 15}}>
          {post.comments} Likes
        </Text>
        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={renderTruncatedFooter}
          renderRevealedFooter={renderRevealedFooter}
          onReady={() => console.log('Text is ready')}>
          <Text style={{fontWeight: '900', fontSize: 14}}>
            {post.user.name}{' '}
            <Text style={{fontWeight: '400'}}>{post.description}</Text>
          </Text>
        </ReadMore>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
