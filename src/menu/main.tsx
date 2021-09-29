import logoimg from "../assets/LOGOMAGRAS.svg";

import card1 from "../assets/card1.svg";
import card22 from "../assets/card22.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import card5 from "../assets/card5.svg";
import card6 from "../assets/card6.svg";

import img1 from "../assets/caso_1.svg";
import img2 from "../assets/caso_2.svg";
import img3 from "../assets/caso_3.svg";
import img4 from "../assets/caso_4.svg";

import cll from "../assets/cll.svg";
import local from "../assets/local.svg";
import rua from "../assets/rua.svg";

import "./main.css";

export function LLp() {
  return (
    <div className="app">
      <div className="fundo">
        <div className="div1"></div>
      </div>

      <div className="txtform" id="home">
        <div className="div2 " data-aos="fade-left">
          <h1>
            Na Magrass <br /> o <span>seu sonho</span> de magrecer <br />
            torna-se real...
          </h1>
          <h2>
            É possível emagrecer com saúde desde a <br /> primeira semana, isso
            porque o Programa <br />
            Nutricional Magrass é exclusivo.
          </h2>
        </div>
        <div className="brilhodiv">
          <div className="div3">
            <div className="form">
              <img
                className="logoform"
                data-aos="flip-up"
                src={logoimg}
                alt=""
              />

              <div className="cadastro">
                <h2 data-aos="fade-left" data-aos-delay="50">
                  Nome
                </h2>
                <input
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  name="roomId"
                  type="name"
                  id="nameum"
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className="cadastro3">
                <h2 data-aos="fade-left" data-aos-delay="150">
                  Telefone
                </h2>
                <input
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  name="roomId"
                  type="tel"
                  id="tell"
                  pattern="[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}"
                  placeholder="Digite seu telefone "
                  required
                />
              </div>

              <div className="cadastro2">
                <h2 data-aos="fade-left" data-aos-delay="250">
                  E-mail
                </h2>
                <input
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  name="roomId"
                  type="email"
                  id="email"
                  placeholder="Digite seu endereço de e-mail"
                  required
                />
              </div>
              <div className="button1" data-aos="zoom-in" data-aos-delay="350">
                <a href="/">
                  <h1>Enviar</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="section">
        <p className="title " data-aos="zoom-in" data-aos-delay="400">
          Porque fazer o programas Magrass?
        </p>
        <div className="section2">
          <div className="animation" data-aos="fade-up">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card1} alt="" />
              </div>
              <div className="cardtext">
                <h1>Melhora a sua autoestima</h1>
              </div>
            </div>
          </div>

          <div className="animation " data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card22} alt="" />
              </div>
              <div className="cardtext">
                <h1>Pele, unhas e cabelos mais saudáveis</h1>
              </div>
            </div>
          </div>

          <div className="animation " data-aos="fade-up" data-aos-delay="400">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card3} alt="" />
              </div>
              <div className="cardtext" data-aos="zoom-in-up">
                <h1>Aprende fazer escolhas alimentares saudáveis​</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="section22">
          <div className="animation " data-aos="fade-up" data-aos-delay="0">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card4} alt="" />
              </div>
              <div className="cardtext">
                <h1>Sem remédios</h1>
              </div>
            </div>
          </div>

          <div className="animation " data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card5} alt="" />
              </div>
              <div className="cardtext">
                <h1>Não passa fome</h1>
              </div>
            </div>
          </div>

          <div className="animation" data-aos="fade-up" data-aos-delay="400">
            <div className="card">
              <div className="cardimg">
                <img className="pulsar" src={card6} alt="" />
              </div>
              <div className="cardtext">
                <h1>Tratamentos complementos</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="divider2"></div>
      </div>

      <div className="section3">
        <p className="title " data-aos="zoom-in">
          Veja alguns casos aqui de Ji-Paraná
        </p>
        <div className="sliderimg">
          <div className="animation1 " data-aos="fade-right">
            <img className="alto " src={img1} alt="" />
          </div>
          <div className="animation2 " data-aos="fade-up" data-aos-delay="300">
            <img className="baixo" src={img2} alt="" />
          </div>
          <div
            className="animation1 "
            data-aos="fade-down"
            data-aos-delay="600"
          >
            <img className="alto " src={img3} alt="" />
          </div>
          <div
            className="animation2 "
            data-aos="fade-left"
            data-aos-delay="900"
          >
            <img className="baixo" src={img4} alt="" />
          </div>
        </div>

        <div className="buttonquero" ata-aos-delay="1200">
          <a href="#home">
            <button data-aos="zoom-in">EU QUERO</button>
          </a>
        </div>
        <div className="divider"></div>
      </div>

      <div className="section4">
        <img className="logoform" data-aos="flip-up" src={logoimg} alt="" />
        <div className="section44">
          <div className="esquerda "></div>
        </div>
      </div>
      <div className="direitaa">
        <div className="endereço">
          <img data-aos="zoom-in" data-aos-delay="25" src={cll} alt="" />
          <h2 data-aos="zoom-in" data-aos-delay="50">
            (69) 3421-2331
          </h2>
        </div>
        <div className="endereço">
          <img data-aos="zoom-in" data-aos-delay="75" src={local} alt="" />
          <h2 data-aos="zoom-in" data-aos-delay="100">
            Av. Clóvis Arraes, 1323 - Bairro Centro
          </h2>
        </div>
        <div className="endereço">
          <img data-aos="zoom-in" data-aos-delay="125" src={rua} alt="" />
          <h2 data-aos="zoom-in" data-aos-delay="150">
            Ji-Paraná - RO, 76900-044
          </h2>
        </div>
      </div>
      <h1 className="direitosre">
        Magrass © 2020 Todos os direitos reservados. Política de Privacidade
      </h1>
    </div>
  );
}
