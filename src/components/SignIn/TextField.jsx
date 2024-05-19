import React from 'react';
import { ErrorMessage, useField } from 'formik';

import styles from './TextField.module.css';
export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label className={styles.label} htmlFor={field.name}>
        {label}
      </label>
      <input
        style={{
          borderRadius: '30px',
          padding: '10px 0px 10px 22px',
        }}
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};