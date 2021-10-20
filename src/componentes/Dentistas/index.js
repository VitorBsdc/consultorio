import React from "react";
 
const Dentistas = () => {
    return(
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 4002 - 8922</p>
 
                    <ul className="lista-medicos">
                        <li>
                            <img src="assets/medico01.png" className="img-aparelho" alt="Dr. Hélio" title="Dr. Hélio" />
                            <p>Dr. Luciano</p>
                            <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                            <p>Especialista em Ortodontia pela Universidade de São Paulo</p>
                            <p>Membro da International Team of Implantology – CH</p>
                        </li>
 
                        <li>
                            <img src="assets/medico02.png" className="img-aparelho" alt="Dr. Carlos" title="Dr. Carlos" />
                            <p>Dr. Rigoni</p>
                            <p>Terças e quintas das 13:00 às 18:00</p>
                            <p>Fixed Implant Rehabilitation of Edentulous Patients- Harvard School of Dental Medicine-USA</p>
                            <p>Membro da American Academy of Implant Dentistry-USA</p>
                        </li>
 
                        <li>
                            <img src="assets/medico03.png" className="img-aparelho" alt="Dra. Suzana" title="Dra. Suzana" />
                            <p>Dra. Laís</p>
                            <p>Sábados e domingos das 08:00 às 12:00</p>
                            <p>International Team of Implantology Education Week- University of Toronto-Canada</p>
                            <p>Membro da American Academy of Cosmetic Dentistry-USA</p>
                        </li>
                    </ul>
                </div>
            </div>
    );
}
 
export default Dentistas;