 import Image from "next/image"
 import imagem from "../../assets/img/foto-contato.jpg";

 export default function About()
 {
    return(
        <>
        <div className="flex flex-wrap w-full gap-10 p-10 items-center justify-center">
            <div className=" flex flex-col items-center justify-center gap-5">
                <h1 className="uppercase text-azul text-xl xl:text-2xl font-bold">
                    Missão    
                </h1>
                <div className="text-center bg-white rounded-2xl shadow-2xl p-16">
                    <p className="text-sm xl:text-xl">
                        Nossa missão é promover saúde e bem estar para o seu animal.
                    </p>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-5">
                <h1 className="uppercase text-azul text-xl xl:text-2xl font-bold">
                    Visão    
                </h1>
                <div className="text-center bg-white rounded-2xl shadow-2xl p-16">
                    <p className="text-sm xl:text-xl">
                        Revolucionar o mercado agroper e ser líder em vendas de produtos 
                        pets na América Latina.
                    </p>
                </div>
            </div>
            <div className=" flex flex-col items-center justify-center gap-5">
                <h1 className="uppercase text-azul text-xl xl:text-2xl font-bold">
                    Valores    
                </h1>
                <div className="text-center bg-white rounded-2xl shadow-2xl p-16">
                    <p className="text-sm xl:text-xl">
                        Bem-estar animal, respeito, amor e confiança.
                    </p>
                </div>
            </div>
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