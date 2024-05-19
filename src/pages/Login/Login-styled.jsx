import React from 'react';

export const styles = {
  a: {
    textDecoration: 'none',
  },
  formWrapper: {
    position: 'relative',
    right: 0,
    top: '5%',
    zIndex: 100,
    width: '426px',
    background: '#ffffff',
    boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
    borderRadius: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '56px 83px',
  },
  buttons: {
    marginTop: '40px',
    display: 'flex',
    gap: '15px',
  },
  btn: {
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#52555f',
    padding: '12px 15px',
    width: '122px',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: 1.17,
    border: 'none',
    cursor: 'pointer',
    borderRadius: '16px',
    filter: 'drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15))',
    backgroundColor: '#f5f6fb',
  },
  btnHoverFocus: {
    color: '#ffffff',
    background: '#ff751d',
    filter: 'drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35))',
  },
  formP: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: 1.17,
    letterSpacing: '0.04em',
    marginBottom: '20px',
    color: '#52555f',
  },
  googleBtn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '32px',
    display: 'flex',
    alignItems: 'flex-end',
    letterSpacing: '0.02em',
    color: '#000000',
    backgroundColor: '#f5f6fb',
    padding: '12px 15px',
    width: '122px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: 1.17,
    border: 'none',
    cursor: 'pointer',
    borderRadius: '16px',
    filter: 'drop-shadow(1px 2px 3px rgba(170, 178, 197, 0.2))',
  },
  googleBtnSvg: {
    marginRight: '10px',
  },
  formWrapperMobile: {
    width: '280px',
    padding: '40px 20px',
  },
  formPFirstChild: {
    width: '222px',
    textAlign: 'center',
    marginBottom: '16px',
  },
};

export const MediaQueries = () => (
  <style>
    {`
      @media (max-width: 767px) {
        .formWrapper {
          width: 280px;
          padding: 40px 20px;
        }
        .form p:nth-child(1) {
          width: 222px;
          text-align: center;
          margin-bottom: 16px;
        }
      }
      @media (min-width: 768px) {
        .formWrapper {
          margin-left: auto;
          margin-right: auto;
        }
        .form p:nth-child(1) {
          text-align: center;
        }
      }
    `}
  </style>
);
