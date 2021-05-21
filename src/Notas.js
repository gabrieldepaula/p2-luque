import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Notas() {

    let history = useHistory();

    // Nao consegui terminar professor =/ só fiz o login simples com uma combinacao e montei o html que iria usar, mas tive problema aqui em casa e nao deu tempo

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" />
                        <button className="btn btn-outline-secondary" type="button">Pesquisar</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <h3>Todas as notas</h3>
                    <button type="button" className="btn btn-primary btn-sm">Novo</button>
                    <ul>
                        <li>Nota 1</li>
                        <li>Nota 2</li>
                        <li>Nota 3</li>
                    </ul>
                </div>
                <div className="col-8">
                    <ul>
                        <li>Detalhe Nota 1</li>
                        <li>Detalhe Nota 2</li>
                        <li>Detalhe Nota 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Notas;