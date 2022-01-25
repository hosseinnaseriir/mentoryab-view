import React from 'react';
import {
  BASE_API
} from '../api';

import RegisterScreen from './../screens/auth/Register';

const Register = ({
  data
}) => {
  return ( <RegisterScreen />
  )
}

export default Register
export async function getStaticProps(context) {
  const res = await fetch(`${BASE_API}/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}