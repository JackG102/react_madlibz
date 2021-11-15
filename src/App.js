import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {

  useEffect(() => {
    const fetchMadlib = async () => {
      const { data } = await axios.get('http://madlibz.herokuapp.com/api/random', {
        params: {
          minlength: 2,
          maxlength: 25,
        }
      });
      console.log(data);
    }

    fetchMadlib();
  }, []);

  return (
    <h1>Madlibz App</h1>
  );
};

export default App;