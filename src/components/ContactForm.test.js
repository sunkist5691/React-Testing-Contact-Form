// Step one, import 
import React from 'react'
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

// fireEvent is another library JUST FOR TESTING in React for event handler.

// Step two, write test


test('my info rendered on screen or to the list', () => {

   // Arrange
   render(<ContactForm />)

   // Act
   const firstNameInput = screen.getByLabelText(/first name/i)
   const lastNameInput = screen.getByLabelText(/last name/i)
   const emailInput = screen.getByLabelText(/email/i)
   const messageInput = screen.getByLabelText(/message/i)
   const submitButton = screen.getByRole(/button/i)

   // waitFor does wait to resolve all promises
      
   fireEvent.change(firstNameInput, { target: { value: 'Joker'} })
   fireEvent.change(lastNameInput, { target: { value: 'Batman'} })
   fireEvent.change(emailInput, { target: { value: 'jb@gmail.com'} })
   fireEvent.change(messageInput, { target: { value: 'Hello!, Nice to meet you!!'} })
   fireEvent.click(submitButton)

   
   waitFor(() => { expect(screen.getByTestId('data-info')).toBeInTheDocument() })


   // FYI, we are using 'getByLabelText' because we also want to check if it's having an accessibility.
   // Accessibility for input.
   // Also input must include id attribute matching with htmlFor attribute at label to avoid error.

   // the `fireEvent.change()` always need to receive query element as first argument, and object that target and change the value will be in second argument.
   // It is same concept as `event.target.value`, but this is just another way of testing method to write `event.target.value`.

   // For button, we usually use event on 'click(event => {...}', because we want to preventDefault of submit button that refresh the page.
   // But for the testing, we don't need to do it, and we just need to put button name. 


   // If getByText gives you an error, that could be a asynchronous of state changes which getByText does not wait the state to be changed and render on screen.
   // It is immediate action to see before render after the state changed.
   // To solve this issue, we use 'findByText' in order to check if anything gets rendered on screen after the asynchronous of state changes.
   
   
})
