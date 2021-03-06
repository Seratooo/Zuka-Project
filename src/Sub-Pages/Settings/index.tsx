import React, { useContext } from 'react'
import { Image, useWindowDimensions, View, ScrollView } from 'react-native'
import { TopBar } from '../../Elements/Elements'
import Icon from 'react-native-vector-icons/EvilIcons'
import { ContainerName, Container, TextFildInfo, FlexRowContainer, ContainerTextFileds, TextName, TextDescription, SimpleText } from './style'
import { TabView, SceneMap } from 'react-native-tab-view';
import renderTabBar from './tabStyles'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Button from '../../Components/Button'
import AuthContext from '../../context/auth'


const Settings = () => {

  const FirstRoute = () => (
    <Container>
      <ScrollView>
        <TextFildInfo>
          Informações da conta
        </TextFildInfo>
        <ContainerTextFileds />
        <TextInput label="Número da conta" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />
        <TextInput label="Telefone" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />
        <TextInput label="Email" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />

        <TextFildInfo>
          Informações Pessoais
        </TextFildInfo>
        <ContainerTextFileds />

        <TextInput label="BI" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />
        <TextInput label="Data de nasc" mode="flat" outlineColor='#fff' underlineColor='#717e951e' activeUnderlineColor='#b57d03' style={{ marginBottom: 15, backgroundColor: '#717e951e' }} />
      </ScrollView>
    </Container>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Perfil' },
    { key: 'second', title: 'Definições' },
  ]);

  const navigation = useNavigation();
  const context = useContext(AuthContext)
  return (
    <Container>
      <TopBar>
        <Icon name="arrow-left" size={32} color="#000" onPress={() => navigation.goBack()} />
        <SimpleText>Menu</SimpleText>
        <Icon name="pencil" size={32} color="#000" />
      </TopBar>

      <FlexRowContainer>
        <Image source={require('../../assets/Ellipse29.png')} />
        <ContainerName>
          <TextName>
            {context.user.name}
          </TextName>
          <TextDescription>
            Estudante
          </TextDescription>
        </ContainerName>
        
      </FlexRowContainer>

      {/* 
      <TabView
      renderTabBar = { renderTabBar }
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    /> */}
      <Button text="Sair"
        onPress={() => {
          context.singOut()
          navigation.navigate('start')

        }} />
    </Container>
  )
}

export default Settings;