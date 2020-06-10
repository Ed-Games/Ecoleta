import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

import './styles.css';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt="Ecoleta"></img>
                </header>

                <main>
                    <h1>Seu Market Place de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrar pontos de coleta de forma eficiente</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;