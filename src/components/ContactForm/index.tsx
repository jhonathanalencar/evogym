import { useForm } from 'react-hook-form';

import './styles.scss';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>();

  function sendEmail(data: FormData) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(sendEmail)} className="contact-us__form">
      <input
        type="text"
        placeholder="name"
        {...register('name', {
          required: 'Name is required',
        })}
      />
      {errors.name ? (
        <p className="error-message">{errors.name.message}</p>
      ) : null}

      <input
        type="email"
        placeholder="email"
        {...register('email', {
          required: 'Email is required',
        })}
      />
      {errors.email ? (
        <p className="error-message">{errors.email.message}</p>
      ) : null}

      <textarea
        placeholder="message"
        {...register('message', {
          required: 'Message is required',
        })}
      />
      {errors.message ? (
        <p className="error-message">{errors.message.message}</p>
      ) : null}

      <button type="submit" disabled={isSubmitting || !isValid}>
        submit
      </button>
    </form>
  );
}
