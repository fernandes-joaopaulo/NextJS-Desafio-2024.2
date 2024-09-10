import Search from "@/components/Search";
import Produto from "../../components/Produto";
import getProdutos from "../../../actions/produtos/action";

export default async function ProdutosPage(){

    const produtos = await getProdutos();

    return(
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 min-h-screen mx-auto">
            <Search/>
            <div className="flex flex-wrap gap-12 items-center justify-center">
            {produtos.map((produto, index) => (
                     <Produto image={produto.image} key={index} id={produto.id} title={`${produto.title}`} price={`${produto.price}`}/>
                ))}
            </div>
        </div>
    )
}