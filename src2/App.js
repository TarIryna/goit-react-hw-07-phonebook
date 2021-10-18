// import { useState, useEffect } from 'react';
import Form from './components/Form';
import Container from './components/Container';
import Phonebook from './components/Phonebook';
import FilterInput from './components/FilterInput';
import './App.css';

export default function App() {
  return (
    <Container>
      <h1> Phonebook </h1>
      <Form />
      <h2> Contacts </h2>
      <FilterInput />
      <Phonebook />
    </Container>
  );
}
