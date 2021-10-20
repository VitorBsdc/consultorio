import React from "react";
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo_missao.css';

const Missao = () => {
    return (
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h1 className="titulo-sessao">Nossos<b> Objetivos</b></h1>
                    <ul className="lista-sobre-aparelho limitar-container">
                        <li>
                            <img src="assets/icon-foco.png" alt="icon-foco" title="icon-foco" />
                            <h3>Foco</h3>
                            <p>Atender pessoas que buscam um profissional atencioso para a solução de um problema bucal em uma clínica multidisciplinar.</p>
                        </li>

                        <li>
                            <img src="assets/icon-missao.png" alt="icon-missao" title="icon-missao" />
                            <h3>Missão</h3>
                            <p>Propiciar acesso a uma odontologia moderna com conforto, conveniência e qualidade, sempre com compromisso social.</p>
                        </li>

                        <li>
                            <img src="assets/icon-visao.png" alt="icon-visao" title="icon-visao" />
                            <h3>Visão</h3>
                            <p>Continuar a ser a referência nacional em atendimento odontológico de qualidade; manter o reconhecimento de sua excelência no atendimento ao cliente, e ser, cada vez mais, recomendada como negócio pela satisfação de seus franqueados.</p>
                        </li>

                        <li>
                            <img src="assets/icon-valores.png" alt="icon-valores" title="icon-valores" />
                            <h3>Valores</h3>
                            <p>A grande paixão da Sorridents é cuidar da saúde bucal das pessoas, por este motivo realiza um atendimento alegre e humanizado. De um jeito simples, mantém uma relação de respeito e transparência com seus clientes.</p>
                        </li>
                    </ul>
                    <h1 className="titulo-sessao">Mais de<b> 480 </b> clínicas pelo Brasil</h1>
                    <ul className="lista-sobre-aparelho limitar-container">
                        <li>
                            <img src="assets/icon-brasil.png" alt="clinicas pelo brasil" title="clinicas pelo brasil" />
                        </li>
                        <li>
                            <p>Atualmente são mais de 480 clínicas em funcionamento inseridas em 21 estados brasileiros.</p>
                            <p>Alagoas, Bahia, Ceará, Distrito Federal, Espírito Santo, Goiás, Maranhão, Mato Grosso, Mato Grosso do Sul, Minas Gerais, Pará, Paraíba, Paraná, Pernambuco, Piauí, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Santa Catarina, São Paulo e Sergipe.</p>
                            <p>O Grupo Dentes Saudáveis vem revolucionando a odontologia brasileira, oferecendo acesso à saúde bucal ao maior número de pessoas possível. Por meio de atendimento de qualidade, proporciona ao público todos os serviços de odontologia desde pediatria á geriatria.</p>
                            <p>O paciente Dentes Saudáveis poderá realizar seus tratamentos em um único local, com segurança, conforto e conveniência.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Missao;