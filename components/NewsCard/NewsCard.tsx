import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import Card from '../card/Card';
import fire from '../../assets/news-image/fire.jpg';

type Props = {
  title: string;
  imageUrl: string;
};

const NewsCard = (props: Props) => {
  const { title, imageUrl } = props;
  return (
    <Card customStyles={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 10,
    color: '#fff',
    fontSize: 20,
  },
  cardContainer: {},
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});

export default NewsCard;
