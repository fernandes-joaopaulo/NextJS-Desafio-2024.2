import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <div className="flex bg-azul flex-col pt-5 bottom-0">
      <div className="flex flex-col items-center justify-center w-full gap-5 pb-10 text-center">
        <div className="flex gap-1 items-center">
          <FaPhone size={20} />
          <span>0800 310 0002</span>
        </div>
        <div className="flex gap-1 items-center">
          <IoMdMail size={20} />
          <span>sac@appet.com.br</span>
        </div>
        <div className="flex gap-1 items-center">
          <MdLocationPin size={25} />
          <span>Avenida das Américas, 1400 - São Paulo, SP</span>
        </div>
      </div>

      <div className="flex justify-between gap-5 items-center">
        <Link href="/">
          <Image src={logo} alt="Logomarca" priority={true} />
        </Link>
        <div className="flex gap-1 items-center">
            <FaInstagramSquare size={30}/>
            <IoLogoFacebook size={30}/> 
            <FaLinkedin size={30}/>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="pt-5 text-sm">Desenvolvido por João Paulo Macedo@2024</span>
      </div>
    </div>
  );
}
