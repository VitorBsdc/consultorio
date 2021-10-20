import React from "react";
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo_planos.css';

const Planos = () => {
    return (
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h1 className="titulo-sessao">Nossos<b> Planos</b></h1>
                    <ul className="lista-sobre-aparelho limitar-container">
                        <li>
                            <img src="assets/icon-coracao.png" alt="icon-coracao" title="icon-coracao" />
                            <h3>Plano Básico</h3>
                            <p>Documentação e Radiografias Ortodônticas</p>
                            <p>Próteses Simples (unitária)</p>
                            <p>Cirurgia (básicas) e Radiografias</p>
                            <p>Restaurações</p>
                            <h3><b>R$29,90</b></h3>

                        </li>

                        <li>
                            <img src="assets/icon-coracao.png" alt="icon-coracao" title="icon-coracao" />
                            <h3>Plano Integral</h3>
                            <p>Documentação e Radiografias Ortodônticas</p>
                            <p>Próteses Simples (unitária)</p>
                            <p>Colocação + Manutenção de Aparelho</p>
                            <p>Cirurgias (básicas)</p>
                            <h3><b>R$77,50</b></h3>
                        </li>

                        <li>
                            <img src="assets/icon-vip.png" alt="icon-vip" title="icon-vip" />
                            <h3>Plano Master</h3>
                            <p>Próteses (Completa).</p>
                            <p>Colocação + Manutenção de Aparelho</p>
                            <p>Tratamento de Canal e Gengiva</p>
                            <p>Cirurgia</p>
                            <p>Restaurações</p>
                            <h3><b>R$100,40</b></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Planos;