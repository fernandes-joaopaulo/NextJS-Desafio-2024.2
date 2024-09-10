import Image from "next/image"
import Link from "next/link"
import { IndividualProducts } from "../../../types/home/home"

export default function IndividualProduct({produto}: {produto: IndividualProducts}){

    return(
        <div className="h-screen w-screen mx-auto">
            <div className="flex flex-wrap md:flex-col items-center w-8/12">
                <Image width={300} height={300} alt="Produto" src={`${produto?.image}`}/>
                <h1 className="text-3xl my-4 font-bold line-clamp-2 cursor-pointer">
                    {produto?.title}
                </h1>
                <h2 className="text-verde font-bold text-4xl cursor-pointer">
                    {produto?.price}
                </h2>
                <p className="pr-4 pt-4 justify-center mx-auto">
                Golden Formula Adultos Frango & Arroz Mini Bits é um alimento Premium Especial desenvolvido para cães adultos de pequeno porte. Os cães são essencialmente carnívoros e digerem muito melhor alimentos de origem animal.
                </p>
                <Link href={'/produtos'} className=" cursor-pointer bg-verde my-10 rounded-md shadow-md p-4 text-white text-center">
                    Comprar
                </Link>
            </div>
        </div>
    )
}