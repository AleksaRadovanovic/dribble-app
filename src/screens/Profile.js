import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native'
import CustomTabBar from '../components/CustomTabBar';
import Header from '../components/Header/Header';

export default function Profile() {
    const [headerShadow, setHeaderShadow] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff"  animated={true} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false} onScroll={(event) => { setHeaderShadow(event.nativeEvent.contentOffset.y > 0) }} contentContainerStyle={{ paddingBottom: 80}} >
                <View style={{ paddingTop: 20}}>
                    <Text style={{ fontSize: 28, paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>Profile</Text>
                </View>
            </ScrollView>
            <CustomTabBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'relative',
      backgroundColor: '#fff'
    },
  });