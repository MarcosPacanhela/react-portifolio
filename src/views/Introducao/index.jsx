import React from "react";
import eu from "../../images/eu2.jpeg";
import logo from "../../images/logo.png";

function Introducao() {
  return (
    <div className="flex flex-col items-start bg-black text-white p-6 sm:p-8 lg:p-12">

      <div className="w-full flex justify-center items-center mb-8">
        <img
          src={logo}
          className="mt-[-5%] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
          alt="logo da codeX"
        />
      </div>

      <div className="text-justify">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">Front-end</h1>
        <h1 className="text-5xl sm:text-6xl font-bold text-green-500 mb-10">Developer.</h1>

        <strong className="text-lg sm:text-lg font-semibold mt-4">
          Transformo ideias em soluções digitais de impacto.
        </strong>

        <p className="mt-4 sm:text-lg text-lg sm:text-left">
          Especialista em desenvolver produtos frontend sólidos, escaláveis e orientados a resultados.
          <br /> Crio interfaces que não apenas encantam os usuários, mas também
          impulsionam o sucesso do seu negócio,
          <br /> otimizando experiências e aumentando a conversão.
        </p>
      </div>

      <div className="relative mt-24 flex flex-col lg:flex-row lg:absolute lg:top-52 lg:right-16">
        <img
          src={eu}
          alt="Imagem do autor"
          className="w-full h-auto lg:w-80 lg:h-80 shadow-lg rounded-[10px] lg:mr-5 lg:mt-[-12%]"
        />
      </div>
    </div>
  );
}

export default Introducao;
