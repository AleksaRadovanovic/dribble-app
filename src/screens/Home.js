import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';
import CategoriesSwiper from '../components/CategoriesSwiper';
import ChannelsSwiper from '../components/ChannelsSwiper';
import CustomTabBar from '../components/CustomTabBar';
import TopCategories from '../components/TopCategories';
import context from '../context/context';
import { UserConstants } from '../_constants/user-constants';

export default function Home() {
  console.log('update home');
  const [topCategories, setTopCategories] = useState([
    {
      id: 1,
      title:"",
      text: "",
      liveCount: undefined,
      category: '',
      iconUrl : '',
      imageUrl : ''
    },
    {
        id: 2,
        title:"Mobile Legends",
        text: "Minsithar maniac",
        liveCount: 24,
        category: 'Strategy',
        iconUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a6c753f-33d1-4fd3-99c5-29a898154388/d8u7nfs-d1e371d0-9cde-4c92-8223-239eab2a372f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGE2Yzc1M2YtMzNkMS00ZmQzLTk5YzUtMjlhODk4MTU0Mzg4XC9kOHU3bmZzLWQxZTM3MWQwLTljZGUtNGM5Mi04MjIzLTIzOWVhYjJhMzcyZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7hRcBCbGzTNqH0dmh4tQ2OYLiTNl-aB9Xl9Ytcmptbs',
        imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/095b362d-6c4d-4adf-9498-3d8d07222a75/dbyzx4e-5503cd44-e57e-430f-94af-524697595a90.jpg/v1/fill/w_622,h_350,q_70,strp/dynamic_splash_page_illustration___megarah_by_deivcalviz_dbyzx4e-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvMDk1YjM2MmQtNmM0ZC00YWRmLTk0OTgtM2Q4ZDA3MjIyYTc1XC9kYnl6eDRlLTU1MDNjZDQ0LWU1N2UtNDMwZi05NGFmLTUyNDY5NzU5NWE5MC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JWqZxR-9B6h_JDonSj-FWOKChswtfKFdz-gZqHVKoB4'

    },
  ])
  const [categories, setCategories] = useState([])
  const [channels, setChannels] = useState([
      {
        id: 1,
        title:"",
        text: "",
        iconUrl : '',
        imageUrl : ''
      }
  ])
  const theme = useContext(context);
  
  useEffect( () => {
    getCategories();
    getChannels();
    getTopCategories();
  }, [])

  const getCategories = async () => {

    let categories = [
      { id: 1, name: 'Action', color: '#7934b3', backgroundColor: '#7934b326'},
      { id: 2, name: 'Platformer', color: '#d8ad3f', backgroundColor: '#fcf3dc'},
      { id: 3, name: 'Driving', color: '#65c59c', backgroundColor: '#65c59c33'},
      { id: 4, name: 'Adventure', color: '#7934b3', backgroundColor: '#7934b326'},
      { id: 5, name: 'Arcade', color: '#efc350', backgroundColor: '#c67ace'},
      { id: 6, name: 'Strategy', color: '#efc350', backgroundColor: '#c67ace'},
    ];

    setCategories(categories);
  }

  const  getChannels = async () => {

    axios.get(UserConstants.API_URL + '/games')
    .then((res) => {
        let { data } = res;

        if(data){
            let games = data.map((game) => {
                return {
                    id : game.id,
                    text: game.description,
                    title: game.name,
                    iconUrl : UserConstants.API_URL + game.iconUrl,
                    imageUrl: UserConstants.API_URL + game.imgUrl
                }
            });

            setChannels(games);
        }
    })

    /*const channels = [
      {
          id: 1,
          title:"Fortnite",
          text: "$500 Weekly Tournaments",
          iconUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6441ee9b-54fb-4041-bf26-402b76cb2850/dcfgz6d-73f03e67-17bd-415f-9be3-d972e5f7185b.jpg/v1/fill/w_1024,h_601,q_75,strp/fortnite_squad_by_puekkers_dcfgz6d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDEiLCJwYXRoIjoiXC9mXC82NDQxZWU5Yi01NGZiLTQwNDEtYmYyNi00MDJiNzZjYjI4NTBcL2RjZmd6NmQtNzNmMDNlNjctMTdiZC00MTVmLTliZTMtZDk3MmU1ZjcxODViLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qKR8NVFBF3x7N2wDLW7uzDSr4mpatzSO-ANQ910kSuQ',
          imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6441ee9b-54fb-4041-bf26-402b76cb2850/dcfgz6d-73f03e67-17bd-415f-9be3-d972e5f7185b.jpg/v1/fill/w_1024,h_601,q_75,strp/fortnite_squad_by_puekkers_dcfgz6d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDEiLCJwYXRoIjoiXC9mXC82NDQxZWU5Yi01NGZiLTQwNDEtYmYyNi00MDJiNzZjYjI4NTBcL2RjZmd6NmQtNzNmMDNlNjctMTdiZC00MTVmLTliZTMtZDk3MmU1ZjcxODViLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qKR8NVFBF3x7N2wDLW7uzDSr4mpatzSO-ANQ910kSuQ'
  
      },
      {
          id: 2,
          title:"Mobile Legends",
          text: "Minsithar maniac",
          iconUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a6c753f-33d1-4fd3-99c5-29a898154388/d8u7nfs-d1e371d0-9cde-4c92-8223-239eab2a372f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGE2Yzc1M2YtMzNkMS00ZmQzLTk5YzUtMjlhODk4MTU0Mzg4XC9kOHU3bmZzLWQxZTM3MWQwLTljZGUtNGM5Mi04MjIzLTIzOWVhYjJhMzcyZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7hRcBCbGzTNqH0dmh4tQ2OYLiTNl-aB9Xl9Ytcmptbs',
          imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/095b362d-6c4d-4adf-9498-3d8d07222a75/dbyzx4e-5503cd44-e57e-430f-94af-524697595a90.jpg/v1/fill/w_622,h_350,q_70,strp/dynamic_splash_page_illustration___megarah_by_deivcalviz_dbyzx4e-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvMDk1YjM2MmQtNmM0ZC00YWRmLTk0OTgtM2Q4ZDA3MjIyYTc1XC9kYnl6eDRlLTU1MDNjZDQ0LWU1N2UtNDMwZi05NGFmLTUyNDY5NzU5NWE5MC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JWqZxR-9B6h_JDonSj-FWOKChswtfKFdz-gZqHVKoB4'
  
      },
      {
          id: 3,
          title:"GTA V",
          text: "Last misson",
          iconUrl : 'https://images7.alphacoders.com/421/thumb-1920-421641.jpg',
          imageUrl : 'https://images7.alphacoders.com/421/thumb-1920-421641.jpg'
  
      },
      {
          id: 4,
          title:"Call Of Duty",
          text: "Text 4",
          iconUrl : 'https://i.pinimg.com/236x/57/b1/f7/57b1f746879ac3d9038b24fe2b00c1f2.jpg',
  
          imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/77d24e64-f753-4e23-b05c-7a19fca6435b/d2fhajg-bfbb74dd-7670-4fcf-aa01-ccdeee7e991f.jpg'
  
      }
    ]*/

  }

  const  getTopCategories = async () => {

    const topCategories = [
      {
        id: 3,
        title:"GTA V",
        text: "Last misson",
        liveCount: 5,
        category: 'Action',
        iconUrl : 'https://images7.alphacoders.com/421/thumb-1920-421641.jpg',
        imageUrl : 'https://images7.alphacoders.com/421/thumb-1920-421641.jpg'
      },
      {
          id: 2,
          title:"Mobile Legends",
          text: "Minsithar maniac",
          liveCount: 24,
          category: 'Strategy',
          iconUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a6c753f-33d1-4fd3-99c5-29a898154388/d8u7nfs-d1e371d0-9cde-4c92-8223-239eab2a372f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGE2Yzc1M2YtMzNkMS00ZmQzLTk5YzUtMjlhODk4MTU0Mzg4XC9kOHU3bmZzLWQxZTM3MWQwLTljZGUtNGM5Mi04MjIzLTIzOWVhYjJhMzcyZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.7hRcBCbGzTNqH0dmh4tQ2OYLiTNl-aB9Xl9Ytcmptbs',
          imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/095b362d-6c4d-4adf-9498-3d8d07222a75/dbyzx4e-5503cd44-e57e-430f-94af-524697595a90.jpg/v1/fill/w_622,h_350,q_70,strp/dynamic_splash_page_illustration___megarah_by_deivcalviz_dbyzx4e-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvMDk1YjM2MmQtNmM0ZC00YWRmLTk0OTgtM2Q4ZDA3MjIyYTc1XC9kYnl6eDRlLTU1MDNjZDQ0LWU1N2UtNDMwZi05NGFmLTUyNDY5NzU5NWE5MC5qcGciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JWqZxR-9B6h_JDonSj-FWOKChswtfKFdz-gZqHVKoB4'
  
      },
      {
        id: 1,
        title:"Fortnite",
        text: "$500 Weekly Tournaments",
        liveCount: 33,
        category: 'Adventure',
        iconUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6441ee9b-54fb-4041-bf26-402b76cb2850/dcfgz6d-73f03e67-17bd-415f-9be3-d972e5f7185b.jpg/v1/fill/w_1024,h_601,q_75,strp/fortnite_squad_by_puekkers_dcfgz6d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDEiLCJwYXRoIjoiXC9mXC82NDQxZWU5Yi01NGZiLTQwNDEtYmYyNi00MDJiNzZjYjI4NTBcL2RjZmd6NmQtNzNmMDNlNjctMTdiZC00MTVmLTliZTMtZDk3MmU1ZjcxODViLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qKR8NVFBF3x7N2wDLW7uzDSr4mpatzSO-ANQ910kSuQ',
        imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6441ee9b-54fb-4041-bf26-402b76cb2850/dcfgz6d-73f03e67-17bd-415f-9be3-d972e5f7185b.jpg/v1/fill/w_1024,h_601,q_75,strp/fortnite_squad_by_puekkers_dcfgz6d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDEiLCJwYXRoIjoiXC9mXC82NDQxZWU5Yi01NGZiLTQwNDEtYmYyNi00MDJiNzZjYjI4NTBcL2RjZmd6NmQtNzNmMDNlNjctMTdiZC00MTVmLTliZTMtZDk3MmU1ZjcxODViLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qKR8NVFBF3x7N2wDLW7uzDSr4mpatzSO-ANQ910kSuQ'

      },
      {
          id: 4,
          title:"Call Of Duty",
          text: "Text 4",
          liveCount: 120,
          category: 'Action',
          iconUrl : 'https://i.pinimg.com/236x/57/b1/f7/57b1f746879ac3d9038b24fe2b00c1f2.jpg',
          imageUrl : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/77d24e64-f753-4e23-b05c-7a19fca6435b/d2fhajg-bfbb74dd-7670-4fcf-aa01-ccdeee7e991f.jpg'
  
      }
    ]
  
    //setTopCategories(topCategories)
  }

  return (
    <Container>
        <StatusBar backgroundColor="#fff"  animated={true} barStyle="dark-content"/>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          onScroll={(event) => { theme.setHeaderShadow(event.nativeEvent.contentOffset.y > 0)}} 
          contentContainerStyle={{ paddingBottom: 80}} 
        >
          <CategoriesSwiper data={categories} title="Esports" onCategoryChange={ (category) => console.log(category)}/>
          <ChannelsSwiper channels={channels} />
          <TopCategories topCategories={topCategories}/>
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
 