import React, { Component, useContext, useEffect } from 'react'
import { Icon, Image } from 'react-native-elements'
import styled, { css } from 'styled-components'
import context from '../../context/context';

export default function Header({ headerShadow }) {
    const theme = useContext(context);

    return (
        <Container shadow={theme.headerShadow}>
            <LeftContainer>
                <PlayButton>
                    <Icon
                        name='ios-play-outline'
                        type='ionicon'
                        color='#fff'
                        size={17}
                        style={{paddingLeft: 2}}
                    />
                </PlayButton>
                <NotifyButton>
                    <Icon
                        name='ios-notifications-outline'
                        type='ionicon'
                        color='black'
                    />
                    <DotActive /> 
                </NotifyButton>
                <SearchButton>
                    <Icon
                        name='ios-search-outline'
                        type='ionicon'
                        color='black'
                    />
                </SearchButton>
            </LeftContainer>
            <RightContainer>
                <ProfileImageContainer>
                    <Image 
                        source={{ uri: 'https://i.pinimg.com/236x/00/4e/a1/004ea15f9fc0f0f6ff1d4c0c711caec1.jpg' }}
                        style={{ width: 40, height: 40 }}
                        resizeMode="stretch"
                    />
                </ProfileImageContainer>
            </RightContainer>
        </Container>
    )
}

const Container = styled.View`
    background-color: #fff;
    flex-direction: row;
    padding-bottom: 5px;
    padding-top: 5px;
    border-bottom-width: 1px;
    border-bottom-color: #fff;
    ${ props => props.shadow && css` 
        border-bottom-color: #eeeeee;
    `}
`;

const LeftContainer = styled.View`
    flex: 1.3;
    flex-direction: row;
    padding-left: 16px;
    align-items: center;
`;

const RightContainer = styled.View`
    flex: 1;
    flex-direction: row;
    padding-right: 15px;
    align-items: center;
    justify-content: flex-end;

`;

const PlayButton = styled.TouchableOpacity`
    background-color: #7b34b7;
    border-radius: 45px;
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`;

const NotifyButton = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const SearchButton = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const ProfileImageContainer = styled.View`
    background-color: #7b34b7;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 10px;
    border-radius: 10px;
`;

const DotActive = styled.View`
    background-color: #46d098;
    position: absolute;
    height: 13px;
    width: 13px;
    right: 3px;
    top: 3px;
    border-radius: 99px;
`;
