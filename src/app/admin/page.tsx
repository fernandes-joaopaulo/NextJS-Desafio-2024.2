"use server";

import React from "react";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import fetchProdutos, { deleteProduto } from "../../../actions/admin/actions";
import { DeleteButton } from "@/components/buttons";

export default async function Admin() {

  const {produtos} = await fetchProdutos();

  return (
    <>
      <div className="space-y-24 md:space-y-32 w-full py-20 min-h-screen mx-auto">
        <h1 className="font-bold text-3xl 2xl:text-4xl text-center">
          Gerenciamento de Produtos
        </h1>
        <div className="items-center flex flex-col lg:flex-row">
          <div className="text-center flex flex-col w-screen">
            <Link href={"/admin/create"}>
              <FaPlusCircle size={30} className="mb-4 ml-4" />
            </Link>

            {produtos.map((produto, index) => (
                <div key={index} className="flex justify-between gap-1 border py-10 px-8">
                <span className="font-semibold text-xl xl:text-2xl text-left">
                  {produto.title}
                </span>
                <div className="flex flex-row gap-4">
                  <Link
                    href={`/admin/view/${produto.id}`}
                    className="bg-azul rounded-md text-white p-2 font-bold max-h-10"
                  >
                    Visualizar
                  </Link>
                  <DeleteButton id={produto.id}/>
                </div>
              </div>             
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
