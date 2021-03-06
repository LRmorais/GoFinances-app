import React, {useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { InputForm } from '../../components/Forms/InputForm';
import { Button } from '../../components/Forms/Button';
import { TransacionTypeButton } from '../../components/Forms/TransacionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';

import { CategorySelect } from '../CategorySelect'

import { 
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from './styles'

// interface FormData {
//   name: string;
//   amount: string;
// }

export type FormData = {
  [name: string]: any;
}


const schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Nome é obrigatório'),
  amount: Yup
  .number()
  .typeError('Informe um valor númerico')
  .positive('O valor não pode ser negativo')
  .required('O valor é obrigatório')
})

export  function Register(){
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState:{ errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleTransacionsTypeSelect(type: 'up'| 'down' ){
    setTransactionType(type)
  }

  function handleOpenModalSelectCategory(){
    setCategoryModalOpen(true)
  }

  function handleCloseSelectCategory(){
    setCategoryModalOpen(false)
  }


  function handleRegister(form: FormData){

    if(!transactionType){return Alert.alert('Selecione o tipo de transação')};

    if(category.key === 'category'){return Alert.alert('Selecione a categoria')};

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

      <Form>
        <Fields>
        <InputForm 
          name='name'
          control={control}
          placeholder='Nome'
          autoCapitalize='sentences'
          autoCorrect={false}
          error={errors.name && errors.name.message}
        />
        <InputForm
          name='amoung'
          control={control}
          placeholder='Preço'
          keyboardType='numeric'
          error={errors.amount && errors.amount.message}
        />

        <TransactionsTypes>
          <TransacionTypeButton
            type='up'
            title='Income'
            onPress={() => handleTransacionsTypeSelect('up')}
            isActive={transactionType === 'up'}
          />
          <TransacionTypeButton
            type='down'
            title='Outcome'
            onPress={() => handleTransacionsTypeSelect('down')}
            isActive={transactionType === 'down'}
          />
        </TransactionsTypes>

        <CategorySelectButton
          title={category.name}
          onPress={handleOpenModalSelectCategory}
        />

        </Fields>

        <Button title='Enviar' onPress={handleSubmit(handleRegister)}/>
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>

      </Container>
    </TouchableWithoutFeedback>
  );
}