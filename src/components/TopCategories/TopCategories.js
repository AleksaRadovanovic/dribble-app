import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { Image } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;

const Title = function({ title }) {
    return (
        <View style={{ paddingLeft: 20}}>
            <Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold'}}>{title}</Text>
        </View>
    )
}

const Item = function({item}) {
    return (
        <View style={{ paddingTop: 10, marginLeft: -30, height: 110, backgroundColor: '#fff' }}>
            <View style={{ flexDirection: 'row', borderColor: '#eeeeee', backgroundColor: '#fff', borderWidth: 1, borderRadius: 10, width: width * 0.7, elevation: 0.5}}>
                <View style={{backgroundColor: '#eeeeee'}}>
                    <Image 
                        source={{ uri: item.imageUrl || null }}
                        style={{ width: 80, height: '100%', borderRadius: 7}}
                    />
                </View>
                {item.liveCount && 
                <View style={{ paddingLeft: 15, paddingTop: 10, backgroundColor: '#fff'}}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold'}}>{item.title}</Text>
                    <View style={{ width: 65, marginTop: 5,borderRadius: 5, backgroundColor: '#eeeeee', flexDirection: 'row', padding: 4, alignItems: 'center', paddingHorizontal: 8}}>
                        <View style={{ width: 9, height: 9, borderRadius: 45, backgroundColor: 'red', marginRight: 5}}></View>
                        <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold'}}>{item.liveCount + 'K'}</Text>
                    </View>
                    <Text style={{ color: '#7934b3', fontSize: 14, fontWeight: 'bold', paddingTop: 10}}>{'# ' + item.category}</Text>
                </View>
                }
            </View>
        </View>
    )
}

export default function TopCategoriesSwiper({ topCategories }) {
    return (
        <View style={{ paddingTop: 20, backgroundColor: '#fff' }}>
            <Title title="Top Games" />
            <View style={{  paddingBottom: 10, backgroundColor: '#fff'}}>
                <Carousel
                    data={topCategories}
                    sliderWidth={width}
                    itemWidth={width * 0.75}
                    activeAnimationType="spring"
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                    renderItem={(props) => (
                        <Item {...props} />
                    )}
                />
            </View>
        </View>
    )
}
