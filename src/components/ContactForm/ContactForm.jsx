import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { object, string } from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const MESSAGES = {
  MIN: 'Too Short!',
  MAX: 'Too Long!',
  REQUIRED: 'Required',
};

const ContactFormSchema = object().shape({
  name: string()
    .min(2, MESSAGES.MIN)
    .max(50, MESSAGES.MAX)
    .required(MESSAGES.REQUIRED),
  number: string()
    .min(3, MESSAGES.MIN)
    .max(50, MESSAGES.MAX)
    .required(MESSAGES.REQUIRED),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <div className={css.items}>
            <div>
              <label className={css.label} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={css.field}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
            </div>

            <div>
              <label className={css.label} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={css.field}
                type="text"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage
                className={css.error}
                name="number"
                component="span"
              />
            </div>
          </div>

          <div className={css.submitWrap}>
            <button className={css.submitBtn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
