import IndividualProduct from "@/components/IndividualProduct";
import { fetchProductById } from "../../../../../actions/individualProduct/actions";
export default async function Page({params}: {params: {id: string}}){
    
    const id = parseInt(params.id, 10);

    const produto = await fetchProductById(id);

    return(
        <div className="w-full ">
            <IndividualProduct produto={produto}/>
        </div>
    )
}