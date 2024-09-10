import Image from "next/image"
import imagem from "../../assets/img/foto-contato.jpg";
import { Card } from "../../../types/home/home";

type Props = {
    cards: Card[];
}

 export default function About({cards}: Props)
 {
    return(
        <>
        <div className="flex flex-wrap w-full gap-10 p-10 items-center justify-center">

                {cards.map((card, index) => (

            <div key={index} className=" flex flex-col items-center justify-center gap-5">
                <h1 className="uppercase text-azul text-xl xl:text-2xl font-bold">
                    {card.title}   
                </h1>
                <div className="text-center bg-white rounded-2xl shadow-2xl p-16">
                    <p className="text-sm xl:text-xl">
                        {card.content}
                    </p>
                </div>
            </div>

                ))}

        </div>
        <div className="flex flex-col bg-amarelo md:flex-row items-center justify-center">
                    <div>
                        <Image 
                            src={imagem}
                            alt="Foto da distribuidora"   
                        />
                    </div>
                    <div className="text-left p-10">
                        <p className="text-sm xl:text-xl">
                            Fundada em 2024, a APPET Distribuidora Ltda preza por um serviço de qualidade e excelência aos seus clientes.
                            Localizada em São Paulo, possui centros de distribuição por todo o país.
                        </p>
                    </div>
        </div>
        </>
    )
 }