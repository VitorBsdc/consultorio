import React from "react";
 
import EstruturaPagina from '../../componentes/EstruturaPagina';
import Dentistas from '../../componentes/Dentistas';
import Mapa from '../../componentes/Mapa';
import './estilo_contato.css';
 
const Contato = () => {
    return(
        <EstruturaPagina>
            <Dentistas/>
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>Praça Roberto Gomes Pedrosa, 1 - Morumbi, São Paulo - SP</p>
                    <Mapa />
                </div>
        </EstruturaPagina>
    );
}
 
export default Contato;