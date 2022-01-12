import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWeapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from './styles';

export function Dashboard(){

  return(
    <Container>
      <Header>
        <UserWeapper>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/60013557?v=4'}} />
            <User>
              <UserGretting>Olá, </UserGretting>
              <UserName>Lucas </UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWeapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
        type='up'
        title='Entrada'
        amount='R$ 17.400,00' 
        lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard 
        type='down'
        title='Saídas' 
        amount='R$ 1.259,00' 
        lastTransaction='Última saída dia 03 de abril' />
        <HighlightCard 
        type='total'
        title='Total' 
        amount='R$ 16.141,00' 
        lastTransaction='01 à 16 de abril' />

      </HighlightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>

        <TransactionCard />
      </Transactions>
    </Container>
  )
}

