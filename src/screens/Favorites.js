import React, { useContext } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import CustomTabBar from '../components/CustomTabBar';
import Text from '../components/StylessComponents/Text';
import context from '../context/context';

export default function Favorites() {
    const theme = useContext(context);

    return (
        <View style={styles.container}>
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