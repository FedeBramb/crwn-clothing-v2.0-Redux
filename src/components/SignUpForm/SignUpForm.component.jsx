import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import FormInput from '../FormInput/FormInput.component.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component.jsx';
import Toast from '../Toast/Toast.component.jsx';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

import { SignUpContainer } from './SignUpForm.styles.jsx';

/* Utilizziamo un oggetto per la gestione dello state così da poter scrivere il metodo handleChange in modo
    più generico */
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  // Spread operator così da aggiungere la rispettiva proprietà e valore a formField
  const handleChange = (event) => {
    const { name, value } = event.target;
    // [name] perchè la prorietà è una stringa.
    setFormFields({...formFields, [name]: value});
  }

  const resetFormFields = () => {
      setFormFields(defaultFormFields);
  }

  // Funzione per gestire i toast
  const handleToast = (type, message) => {
    if (type === 'success') {
        toast.success(message);
    } else {
        toast.error(message || '❌ Errore durante il login'); 
    }
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        handleToast('error', '❌ Passwords non coincidono');
        return; 
      }
      
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
  
        await createUserDocumentFromAuth(user, { displayName });
        handleToast('success', '✅ Account creato con successo');
        resetFormFields();
        setTimeout(() => navigate('/'), 2000);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          return handleToast('error', '❌ Email già in uso');
        } else {
          return handleToast('error', '❌ Errore nella creazione account');          }
      }
  };

    return (
        <SignUpContainer>
            <h1>Prima volta?</h1>
            <span>Registrati con la tua email e password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName} 
                />
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                />
                <FormInput 
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                />
                <FormInput 
                    label='Confirm Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword} 
                />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>Invia</Button>
            </form>
            <Toast />
        </SignUpContainer>
  )
}

export default SignUpForm;


  