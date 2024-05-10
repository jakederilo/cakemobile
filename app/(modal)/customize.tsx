import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const Customize = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('assets/data/3dcake.png')} // replace with your cake image
          style={{ width: 250, height: 250, borderRadius: 10 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
          Customize Your Cake
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Choose a Layer:
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>1 Layer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10}}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>2 Layers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold'}}>3 Layer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>4 Layer</Text>
          </TouchableOpacity>
        </View>
        {/* Add more flavors here */}
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Choose a Shape:
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10, alignContent: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold'}}>Circle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Square</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Heart</Text>
          </TouchableOpacity>
          
        </View>
        {/* Add more shapes here */}
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Choose a Color:
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Green</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 10 }}>
          <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Blue</Text>
        </TouchableOpacity>
        {/* Add more colors here */}
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Choose a Size:
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Small</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 10, marginBottom: 20}}>
          <Text style={{ color: '#e5de00', fontSize: 16, fontWeight: 'bold' }}>Large</Text>
        </TouchableOpacity>
        {/* Add more sizes here */}
      </View>
    </ScrollView>
  );
};

export default Customize;
