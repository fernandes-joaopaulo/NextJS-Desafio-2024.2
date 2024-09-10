import SearchPage from "@/components/search.page";
import { fetchFilteredProducts } from "../../../../actions/search/actions";

export default async function Page({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const { products, count } = await fetchFilteredProducts(query, currentPage);

    // Calcular o total de páginas
    const itemsPerPage = 4; // Deve corresponder ao valor usado na função fetchFilteredProducts
    const totalPages = Math.ceil(count / itemsPerPage);

    return (
        <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto">
            <SearchPage products={products} count={count} totalPages={totalPages} />
        </div>
    );
}
