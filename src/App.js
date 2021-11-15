import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MadlibForm from './components/MadlibForm';

const App = () => {
  const [madlib, setMadlib] = useState([]);

  useEffect(() => {
    const fetchMadlib = async () => {
      const { data } = await axios.get('http://madlibz.herokuapp.com/api/random', {
        params: {
          minlength: 2,
          maxlength: 15,
        }
      });
      console.log(data);
      setMadlib(data);
    }

    fetchMadlib();
  }, []);

  return (
    <>
      <h1>Madlibz App</h1>
      <MadlibForm blanks={madlib.blanks}/>
    </>
  );
};

export default App;