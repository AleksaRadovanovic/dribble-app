import React, { useContext } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import styled from 'styled-components';
import CustomTabBar from '../components/CustomTabBar';
import Text from '../components/StylessComponents/Text';
import context from '../context/context';

export default function Favorites() {
    const theme = useContext(context);

    return (
        <Container>
            <StatusBar backgroundColor="#fff"  animated={true} barStyle="dark-content"/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={(event) => { theme.setHeaderShadow(event.nativeEvent.contentOffset.y > 0) }}
                contentContainerStyle={{ paddingBottom: 80}}
            >
                <View style={{ paddingTop: 20}}>
                    <Text color="black" size={28} fontFamily="Montserrat-SemiBold" paddingLeft={20} >
                        Favorites
                    </Text>
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
