import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '../Components/CustomHeader';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};


export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            header: () => <CustomHeader />,
          }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: '#fff',

            },
            headerTitleAlign: 'center',
            
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" style={{paddingRight: 20, alignItems: 'center'}} size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/location-search"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Select location',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" style={{paddingRight: 20, alignItems: 'center'}} size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/customize"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Customize',
            headerLeft: () => ( 
              <TouchableOpacity 
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline"style={{paddingRight: 20, alignItems: 'center'}} size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/register"
          options={{
            presentation: 'fullScreenModal',
            headerTitle: 'Register',
            headerLeft: () => ( 
              <TouchableOpacity 
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline"style={{paddingRight: 20, alignItems: 'center'}} size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="(modal)/cake"
          options={{
            presentation: 'modal',
            headerTitle: '',
            headerTransparent: true,

            headerLeft: () => (
              <TouchableOpacity
                style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="basket"
          options={{
            headerTitle: 'Basket',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Ionicons name="arrow-back" size={28} color={Colors.primary} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
      
    </BottomSheetModalProvider>

  );
}
