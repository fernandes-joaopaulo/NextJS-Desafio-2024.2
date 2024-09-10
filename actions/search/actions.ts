import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredProducts(query: string, currentPage: number) {
    const skip = (currentPage - 1) * itemsPerPage;

    const products = await prisma.product.findMany({
        where: {
            OR: [{ title: { contains: query, mode: 'insensitive' } }]
        },
        orderBy: {
            title: 'asc'
        },
        skip,
        take: itemsPerPage
    });

    const count = await prisma.product.count({
        where: {
            OR: [{ title: { contains: query, mode: 'insensitive' } }]
        }
    });

    return { products, count };
}
