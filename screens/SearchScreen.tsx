import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Card from '../components/card/Card';
import { useTranslation } from 'react-i18next';
import CustomView from '../components/common/CustomView';
import data from '../assets/data/news.json';
import NewsCard from '../components/NewsCard/NewsCard';
import { SearchContext } from '../context/SearchContext';

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const { filteredTitle } = React.useContext(SearchContext);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data
          .filter((item) => item.newsTitle.includes(filteredTitle))
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
                  <NewsCard
                    title={item.newsTitle}
                    imageUrl={item.newImageUrl}
                  />
                </TouchableOpacity>
              </Card>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
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
