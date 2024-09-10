import Produto from "../Produto";
import SecondarySearch from "./secondary.search"
import Link from "next/link";
import { Product } from "../../../types/data";
import Pagination from "../pagination";

export default function SearchPage({products, count, totalPages}: {products: Product[], count: number, totalPages: number}){
    
    return(
        <div className="w-full">
            <SecondarySearch count={count}/>
            {count === 0 ? (
                <div className='w-full flex flex-col'>
                    <span className="text-2xl font-extrabold">
                        Nenhum produto encontrado.
                    </span>
                    <span className="text-xl text-black/70">
                        Tente procurar por outra coisa, ou explore <Link href={'/produtos'}>produtos</Link>
                    </span>
                </div>
            ):(
                <div className="flex flex-wrap gap-12 items-center justify-center">
                    {products.map((produto, index) => (
                        <Produto image={produto.image} key={index} id={produto.id} title={produto.title} price={produto.price}/>
                    ))}
                    {totalPages > 1 && (
                        <Pagination totalPages={totalPages}/>
                    )}
                </div>
            )}
        </div>
    )
}