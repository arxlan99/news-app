import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import data from '../assets/data/news.json';
import CustomView from '../components/common/CustomView';
import CustomText from '../components/common/CustomText';

const NewsDetail = () => {
  const { params } = useRoute<any>();
  const { id } = params;
  const news = data.filter((item) => item.id === id)[0];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        style={styles.image}
        source={{
          uri: news.newImageUrl,
        }}
      />
      <CustomText customStyles={styles.title}>{news.newsTitle}</CustomText>

      <CustomText customStyles={styles.content}>
        {news.newsDescription}
      </CustomText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 14,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 14,
    textAlign: 'justify',
    marginBottom: 30,
  },
});

export default NewsDetail;
