import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Link } from 'expo-router';
import BottomSheet from './BottomSheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium} />
        <TextInput style={styles.input} placeholder="Chocolate Cake" />
      </View>
      <Link href={'/filter'} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);


const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Text style={styles.Title}>BAKER'S</Text>
        <Text style={styles.Title}>PLAZA</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery · Now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>Sorsogon</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
        <Link href={'/register'} asChild>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
        </Link>
      </View>
      <SearchBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  Title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 0,
  },
  bike: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: '#fff',
  },
  searchSection: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
