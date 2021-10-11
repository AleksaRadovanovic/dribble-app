import React from 'react'
import { FlatList } from 'react-native';
import styled from 'styled-components';

export default function CategoriesSwiper({ data, title, onCategoryChange }) {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    {title}
                </Title>
            </TitleContainer>
            <ListContainer>
                <FlatList
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}) => (
                        <CategoryButton onPress={ () => onCategoryChange(item.name)} style={{ backgroundColor: item.backgroundColor }}>
                            <CategoryName style={{color: item.color}}>
                                {'# ' + item.name}
                            </CategoryName>
                        </CategoryButton>
                    )}
                    keyExtractor={item => item.id + 'key'}
                />
            </ListContainer>
        </Container>
    )
}

const Container = styled.View`
    width: 100%;
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 5px;
`;

const TitleContainer = styled.View`
    padding-left: 5px;
`;

const Title = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 29px;
`;

const ListContainer = styled.View`
    padding-top: 20px;
`;

const CategoryButton = styled.TouchableOpacity`
    height: 40px;
    padding: 8px;
    padding-right: 20px;
    margin-left: 6px;
    margin-right: 6px;
    border-radius: 5px;
`;

const CategoryName = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 15px;
`;