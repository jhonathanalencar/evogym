import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { CircleNotch } from 'phosphor-react';

import './styles.scss';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export function ContactForm() {
  const [responseMessage, setResponseMessage] = useState('');

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>();

  async function sendEmail(data: FormData) {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...data },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      reset();
      setResponseMessage('Email sent successfully.');
    } catch (error) {
      console.log(error);
      setResponseMessage('Something went wrong. Please try later.');
    }
  }

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="contact-us__form">
      <input
        type="text"
        placeholder="name"
        disabled={isSubmitting}
        {...register('user_name', {
          required: 'Name is required',
        })}
      />
      {errors.user_name ? (
        <p className="error-message" role="alert">
          {errors.user_name.message}
        </p>
      ) : null}

      <input
        type="email"
        placeholder="email"
        disabled={isSubmitting}
        {...register('user_email', {
          required: 'Email is required',
        })}
      />
      {errors.user_email ? (
        <p className="error-message" role="alert">
          {errors.user_email.message}
        </p>
      ) : null}

      <textarea
        disabled={isSubmitting}
        placeholder="message"
        {...register('message', {
          required: 'Message is required',
        })}
      />
      {errors.message ? (
        <p className="error-message" role="alert">
          {errors.message.message}
        </p>
      ) : null}

      <button type="submit" disabled={isSubmitting || !isValid}>
        {isSubmitting ? (
          <span className="loader">
            <CircleNotch weight="bold" />
          </span>
        ) : (
          'send'
        )}
      </button>

      {responseMessage ? (
        <p className="contact-form__response-message" role="alert">
          {responseMessage}
        </p>
      ) : null}
    </form>
  );
}
