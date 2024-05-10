import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import { categories } from '@/assets/data/home';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}>
      {categories.map((category, index) => (
        <View style={styles.categoryCard} key={index}>
          <Image source={category.img} style={category.style}/>
          <Text style={styles.categoryText}>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    marginEnd: 10,
    elevation: 2,
    shadowColor: '#000',
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 4,
      
    
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
    alignItems: 'center',
  },
  categoryText: {
    padding: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Categories;
