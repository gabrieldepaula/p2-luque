import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Login() {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function fazSubmit(e) {
        e.preventDefault();

        if(email !== 'email@teste.com.br' || password !== 'teste') {
            setError('Dados inválidos');
        } else {
            // Mostra tela de notas
            history.push('/notas');
        }
    }

    function validaForm() {
        let validado = true;
        if(email.length <= 0) validado = false;
        if(password.length <= 0) validado = false;
        return validado;
    }

    return (
        <div className="container">
            <form onSubmit={fazSubmit} className="mb-3">
                <div className="form-group">
                    <label>E-mail</label>
                    <input type="text" className="form-control" value={email} onChange={(el) => setEmail(el.target.value)} />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" value={password} onChange={(el) => setPassword(el.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3" disabled={!validaForm()}>Entrar</button>
            </form>
            <span className="text-danger">{error}</span>
        </div>
    );
}

export default Login;