import Produto from "../Produto"
import { Product } from "../../../types/data"
import Link from "next/link"


type ProdutosProps = {
    produtos: Product[]
}

export function Destaque({produtos}: ProdutosProps){
    return(
        <div className="">
            <div className="flex justify-between items-center">
                <span className="font-bold text-sm xl:text-2xl py-10 pl-2 xl:pl-7">Produtos em destaque</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 w-4/5 md:w-3/5 mx-auto gap-1">
                
                {produtos.map((produto, index) => (
                     <Produto key={index} image={produto.image} id={produto.id} title={`${produto.title}`} price={`${produto.price}`}/>
                ))}

                
            </div>
            <div className="justify-center items-center text-center my-20">
            <Link href={'/produtos'} className="border shadow-md rounded-md bg-azul text-white p-4 font-bold">Ver mais</Link>
            </div>
            
        </div>
    )
}