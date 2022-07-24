import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import NewsCard from '../../components/NewsCard/NewsCard';
import Card from '../../components/card/Card';
import { ScrollView } from 'react-native-gesture-handler';
import data from '../../assets/data/news.json';

const WorldScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data
        .filter((item) => item.type.includes('world'))
        .map((item, index) => {
          return (
            <Card customStyles={styles.cardContainer} key={index}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('NewsDetailScreen', {
                    id: item.id,
                  })
                }
              >
                <NewsCard title={item.newsTitle} imageUrl={item.newImageUrl} />
              </TouchableOpacity>
            </Card>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default WorldScreen;
