import React, { useState, ChangeEvent, FormEvent } from 'react';
import { REGEXP_EMAIL, REGEXP_PASSWORD, REGEXP_TEXT, REGEXP_DIGIT } from '@/constants/regex';
import * as yup from 'yup';
import { isValidPhoneNumber } from '@/utils';

const intialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  dateOfBirth: '',
};

const validationSchema = yup.object().shape({
  lastName: yup
    .string()
    .matches(
      REGEXP_TEXT,
      'Invalid last name. Please enter a valid last name.'
    )
    .required('Required'),
  firstName: yup
    .string()
    .matches(
      REGEXP_TEXT,
      'Invalid first name. Please enter a valid first name.'
    )
    .required('Required'),
  email: yup
    .string()
    .matches(REGEXP_EMAIL, 'Invalid email address format')
    .required('Required'),
  address: yup.string().required('Required'),
  password: yup
    .string()
    .matches(
      REGEXP_PASSWORD,
      'Password must be at least 8 characters long and contain at least 1 digit.'
    )
    .required('Required'),
  dateOfBirth: yup.string().required('Required'),
  phone: yup
    .string()
    .test(
      'valid-phone',
      'Invalid phone number format',
      (value) => !value || isValidPhoneNumber(value)
    )
    .required('Required'),
});

export const Signup = () => {
  const [values, setValues] = useState(intialValues);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validationSchema.validate(values, { abortEarly: false });
      console.log('Form data is valid:', values);
      // Submit the form data or perform further actions.
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: any = {};
        error.inner.forEach((err: yup.ValidationError) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Sign Up</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <div className="text-danger">{errors.firstName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <div className="text-danger">{errors.lastName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    required
                  />
                  {errors.address && (
                    <div className="text-danger">{errors.address}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <div className="text-danger">{errors.phone}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                  {errors.dateOfBirth && (
                    <div className="text-danger">{errors.dateOfBirth}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
