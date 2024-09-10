import Image from "next/image";
import prod01 from "../../assets/img/produto_01.png"
import Link from "next/link";

type CardProps = 
{
    id: number,
    title: string;
    price: string;
    image: string;
}

export default function Produto({title, price, id, image}: CardProps) 
{
    return(
        <div className="flex flex-col max-w-[8rem] xl:max-w-[10rem]">
            <Link href={`/produtos/produto/${id}`}>
                <div className="transition-shadow duration-200 rounded-lg border hover:shadow p-5 cursor-pointer">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300}
                        className={"mx-auto h-[140px]"}
                    />
                </div>

                <div>
                    <h1 className=" font-bold line-clamp-2 cursor-pointer">{title}</h1>
                    <p className="text-verde font-bold xl:text-xl cursor-pointer">{price}</p>
                </div>
            </Link>
        </div>
    )
}