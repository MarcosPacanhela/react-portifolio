import landing01 from "../../images/landing01.jpeg";
import landing02 from "../../images/landing02.jpeg";
import paka01 from "../../images/paka01.jpeg";
import paka02 from "../../images/paka02.jpeg";
import paka06 from "../../images/paka06.jpeg";
import paka07 from "../../images/paka07.jpeg";

function Projetos() {
    return (
        <div className="bg-black p-6 sm:p-8 lg:p-12">
            <h1 className="text-left text-[#03fa6e] text-4xl sm:text-5xl lg:text-6xl flex-wrap -top-[80px]">Projetos.</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <img
                    src={landing01}
                    className="rounded-[10px] object-contain w-full sm:w-[45%] lg:w-[50%] lg:h-[50%] lg:mr-44 mt-6"
                    alt="Landing page 01"
                />

                <img
                    src={landing02}
                    className="rounded-lg object-contain w-full sm:w-[45%] lg:w-[20%] mt-6"
                    alt="Landing page 02"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <img
                    src={paka01}
                    className="rounded-lg object-contain w-full sm:w-[30%] lg:w-[20%] mt-6"
                    alt="App 01"
                />
                <img
                    src={paka02}
                    className="rounded-lg object-contain w-full sm:w-[30%] lg:w-[20%] mt-6"
                    alt="App 02"
                />
                <img
                    src={paka06}
                    className="rounded-lg object-contain w-full sm:w-[30%] lg:w-[20%] mt-6"
                    alt="App 06"
                />
                <img
                    src={paka07}
                    className="rounded-lg object-contain w-full sm:w-[30%] lg:w-[20%] mt-6"
                    alt="App 07"
                />
            </div>

        </div>
    )
}

export default Projetos;
