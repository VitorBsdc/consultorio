import React from "react";
import { Link } from 'react-router-dom';
 
import EstruturaPagina from '../../componentes/EstruturaPagina';
import Servicos from '../../componentes/Servicos';
 
import './estilo_home.css';
 
const Home = () => {
    return(
        <EstruturaPagina>
            
            <Servicos />

            <h2 className="titulo-sessao">Por que usar <b>aparelho ortodontico</b></h2>
 
            <img className="img-aparelho" src="assets/aparelho.png" 
                 alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho" />
 
            <ul className="lista-sobre-aparelho limitar-container">
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
 
                </li>
 
                <li>
                    <h3>Melhorar a dicção e a higiene bucal</h3>
                    <p>Muitas pessoas não conseguem nem usar fio dental devido a posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma mais ampla.</p>
                </li>
 
                <li>
                    <h3>Corrigir espaços entre os dentes</h3>
                    <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </li>
            </ul>
 
            <div className="home-depoimentos">
                <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>
 
                <ul className="lista-depoimentos">
                    <li>
                        <img className="img-aparelho" src="assets/cliente01.png" alt="Depoimento do cliente Alberto Silva" title="Depoimento do cliente Alberto Silva" />
                        <p>João Miranda</p>
                        <p>... "Usei aparelho por  anos e agora posso sorrir novamente."</p>
                    </li>
 
                    <li>
                        <img className="img-aparelho" src="assets/cliente02.png" alt="Depoimento da cliente Eliana Oliveira" title="Depoimento da cliente Eliana Oliveira" />
                        <p>Sueli Costa</p>
                        <p>... "Meus dentes eram espaçados e depois de 2 anos estão no lugar certo."</p>
                    </li>
 
                    <li>
                        <img className="img-aparelho" src="assets/cliente03.png" alt="Depoimento da cliente Maria Souza" title="Depoimento da cliente Maria Souza" />
                        <p>Maria Eduarda</p>
                        <p>... "Comecei a usar no ano passado e já estou sentindo a diferença."</p>
                    </li>
                </ul>
            </div>
 
            <div>
                <Link to="/Contato" className="btn-contato">Entrar em contato</Link>
            </div>
 
        </EstruturaPagina>
    );
}
 
export default Home;