import React, { useState } from 'react';
import { useHistory, Route } from 'react-router-dom';
import Login from './Login';
import Notas from './Notas';

function App ()
{
    let history = useHistory();

    function mostrarNotas () {
        history.push('/notas');
    }

    return (
      <>
          <Route exact path='/' render={ () => <div>
              <Login />
          </div> } />
          <Route exact path="/notas" render={ () => <div>
              <Notas />
          </div> } />
      </>
    );
}

export default App;