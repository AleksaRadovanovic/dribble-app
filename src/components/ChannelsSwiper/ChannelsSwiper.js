import React from 'react'
import { Dimensions, StyleSheet} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import styled from 'styled-components';
import Text from '../StylessComponents/Text';
import Image from '../StylessComponents/Image';

const width = Dimensions.get('window').width;

const Item = ({item}) => {
    return (
        <ItemContainer>
            <ImageBackground source={{uri: item.imageUrl || null}} resizeMode="stretch">
                <TopSection>
                    <LiveStatusContainer>
                        <RedDot />
                        <Text bold size={13} color="black">
                            LIVE
                        </Text>
                    </LiveStatusContainer>
                </TopSection>
            </ImageBackground>
            <BottomSection>
                <Image uri={item.iconUrl} stretch width={40} height={40} borderRadius={99} borderWidth={1} borderColor="#c67ace"/>
                <DetailsContainer>
                    <Text color="black" size={14} bold>
                        {item.title}
                    </Text>
                    <Text color="gray" size={14} paddingTop={3}>
                        {item.text}
                    </Text>
                </DetailsContainer>
            </BottomSection>
        </ItemContainer>
    )
}

export default function ChannelsSwiper({ channels}) {
    return (
        <Container>
            <TitleContainer>
                <Title>Live Channels</Title>
            </TitleContainer>
            <CarouselContainer style={{ paddingBottom: 10}}>
                <Carousel
                    data={channels}
                    renderItem={(props) => (
                        <Item {...props} index/>
                    )}
                    sliderWidth={width}
                    itemWidth={width * 0.75}
                    activeAnimationType="spring"
                    inactiveSlideOpacity={1}
                    inactiveSlideScale={1}
                />
            </CarouselContainer>
        </Container>
    )
}

const Container = styled.View`
    padding-top: 30px;
`;

const TitleContainer = styled.View`
    padding-left: 20px;
`;

const Title = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 23px;
`;

const CarouselContainer = styled.View`
    padding-bottom: 10px;
`;

const ItemContainer = styled.View`
    padding-top: 20px;
    margin-left: -30px;
`;

const ImageBackground = styled.ImageBackground`
    overflow: hidden;
    border-radius: 7px;
    background-color: #eeeeee;
    height: 150px;
    width: ${width * 0.7}px;
`;

const TopSection = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding: 12px;
`;

const LiveStatusContainer = styled.View`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
`;

const RedDot = styled.View`
    background-color: red;
    width: 9px;
    height: 9px;
    margin-right: 5px;
    border-radius: 45px;
`;

const LiveText = styled.Text`
    color: black;
    font-size: 13px;
    font-weight: bold;
`;

const BottomSection = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-left: 8px;
`;

const DetailsContainer = styled.View`
    padding-left: 15px;
`;

const { userImageStyle } = StyleSheet.create({
    userImageStyle: { 
        width: 40, 
        height: 40, 
        borderRadius: 90, 
        borderWidth: 1, 
        borderColor: '#c67ace' 
    }
  });
  