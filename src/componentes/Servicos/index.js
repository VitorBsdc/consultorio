import React from "react";

const Servicos = () => {
    return (
        <div className="home-apresentacao">
        <div className="limitar-container">
            <h1>Os melhores aparelhos dentários!</h1>
            <p>Confira abaixo todas as especialidades odontológicas que oferecemos!</p>

            <ul className="lista-servicos">
                <li>
                    <img src="assets/dente.png" alt="logo" title="logo" />
                    <p>Pré-avaliação</p>
                </li>

                <li>
                    <img src="assets/dente.png" alt="logo" title="logo" />
                    <p>Aparelhos ortodonticos</p>
                </li>

                <li>
                    <img src="assets/dente.png" alt="logo" title="logo" />
                    <p>Exames de imagem digital</p>
                </li>

                <li>
                    <img src="assets/dente.png" alt="logo" title="logo" />
                    <p>Clareamento dental</p>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Servicos;