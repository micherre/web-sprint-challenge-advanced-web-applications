import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth'
import { useHistory } from 'react-router-dom'

export function Login(props) {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setForm({ ...form, username: e.target.value})}
        />
        <input
          onChange={(e) => setForm({ ...form, password: e.target.value})}
          />
        <button type='submit'> Login </button>
      </form>
    </>
  );
};

