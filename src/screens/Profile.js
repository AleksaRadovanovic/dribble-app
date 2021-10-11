import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components';
import CustomTabBar from '../components/CustomTabBar';
import Header from '../components/Header/Header';

export default function Profile() {
    const [headerShadow, setHeaderShadow] = useState(false);

    return (
        <Container>
            <StatusBar backgroundColor="#fff"  animated={true} barStyle="dark-content"/>
            <ScrollView showsVerticalScrollIndicator={false} onScroll={(event) => { setHeaderShadow(event.nativeEvent.contentOffset.y > 0) }} contentContainerStyle={{ paddingBottom: 80}} >
                <View style={{ paddingTop: 20}}>
                    <Text style={{ fontSize: 28, paddingLeft: 20, color: 'black', fontWeight: 'bold'}}>Profile</Text>
                </View>
            </ScrollView>
            <CustomTabBar />
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    background-color: #fff;
    position: relative;
`;