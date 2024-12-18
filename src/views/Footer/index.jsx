import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#333] text-white py-[20px] text-center relative bottom-0 w-full mt-[30px]">
            <div className="max-w-[1200px] mx-auto px-[20px]">
                <p className="mb-[10px] text-[14px]">© 2024 CodeX Solutions. Todos os direitos reservados.</p>
                <div className="mt-[10px]">
                    <a href="https://github.com/MarcosPacanhela" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-[10px] text-[20px] transition-colors duration-300 hover:text-[#03fa6e]">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/marcos_pacanhela.dev/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="text-white no-underline mx-[10px] text-[20px] transition-colors duration-300 hover:text-[#03fa6e]">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
