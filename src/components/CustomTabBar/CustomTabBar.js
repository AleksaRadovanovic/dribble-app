import React from 'react'
import { Icon } from 'react-native-elements'
import Context from '../../context/context'
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/core'
import styled from 'styled-components'

export default function CustomTabBar() {
    const theme = useContext(Context);
    const navigation = useNavigation();
    
    const Tab = ({name, icon}) => {
        return (
            <Button
                onPress={() => {
                    theme.setSelectedTab(name);
                    navigation.navigate(name);
                }}
            >
                <Icon
                    name={icon}
                    type='ionicon'
                    color={name === theme.selectedTab ? '#7b34b7' : 'black'}
                    size={30}
                />
            </Button>
        )
    }

    return (
        
        <TabBar>
            <Tabs>
                <Tab icon="ios-navigate-circle-outline" name="Home"/>
                <Tab icon="ios-tv-outline" name="Search"/>
                <Tab icon="ios-heart-outline" name="Favorites"/>
                <Tab icon="ios-flash-outline" name="Profile"/>
            </Tabs>
        </TabBar>
    )
}

const TabBar = styled.View`
    position: absolute;
    bottom: 12px;
    left: 0px;
    height: 50px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
`;

const Tabs = styled.View`
    background-color: #fff;
    overflow: hidden;
    border-top-color: #eeeeee;
    border-radius: 28px;
    flex-direction: row;
    border-top-width: 0.5px;
    padding: 4px;
    elevation: 2;
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
`;

