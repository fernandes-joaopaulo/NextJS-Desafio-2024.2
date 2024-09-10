import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

export function Redes()
{
    return(
        <div className="items-center flex flex-col lg:flex-row gap-20">
            <div className="text-center flex flex-col w-screen">
                <h1 className="text-amarelo font-bold text-3xl 2xl:text-4xl mb-5">Redes sociais</h1>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <FaInstagramSquare size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">appet</span>
                </div>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <IoLogoFacebook size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">Appet LTDA</span>
                </div>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <FaLinkedin size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">Appet LTDA</span>
                </div>
            </div>

            <div className="text-center flex flex-col w-screen">
                <h1 className="text-amarelo font-bold text-3xl 2xl:text-4xl mb-5">Contato</h1>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <FaPhone size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">0800 310 0002</span>
                </div>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <IoMdMail size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">sac@appet.com.br</span>
                </div>
                <div className="flex gap-1 items-center justify-center border py-10">
                    <MdLocationPin size={40} />
                    <span className="font-semibold text-xl xl:text-2xl">Avenida das Américas, 1400 - São Paulo, SP</span>
                </div>
            </div>
        </div>
    )
}