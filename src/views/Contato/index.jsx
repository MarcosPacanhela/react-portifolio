import { FaWhatsapp } from 'react-icons/fa';

function Contato() {
    function handleWhats() {
        window.open('https://wa.me/43998032135', '_blank');
    }

    return (
        <div className="p-6 sm:p-8 lg:p-12">
            <div className="text-justify">
                <h1 className="mt-[100px] text-[40px] lg:text-center text-lg text-black sm:text-5xl lg:text-6xl flex-wrap">
                    Vamos conversar!
                </h1>
                <p className="mt-[30px] lg:text-center text-lg text-[25px] mb-[50px]">
                    Tem uma ideia, dúvida ou proposta?
                    <br />Estou aqui para ajudar a transformar seus desafios em soluções digitais incríveis.
                    <br />Envie uma mensagem e vamos começar!
                </p>
            </div>
            <div
                className="rounded-full flex items-center justify-center mx-auto p-4 sm:p-5 lg:p-6 w-[200px] sm:w-[250px] lg:w-[300px] text-[#03fa6e] text-center cursor-pointer mb-8 flex-row hover:text-white hover:bg-[#03fa6e] transition duration-300"
                onClick={handleWhats}
            >
                <FaWhatsapp className="text-[20px] sm:text-[25px] lg:text-[30px] mr-2 sm:mr-3" />
                <p className="text-[18px] sm:text-[20px] lg:text-[25px]">WhatsApp</p>
            </div>

        </div>
    );
}

export default Contato;
