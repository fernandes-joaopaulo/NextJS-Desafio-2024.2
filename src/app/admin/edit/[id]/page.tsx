import React from "react";
import { updateProduto } from "../../../../../actions/admin/actions";

export default async function Page({params}: {params: {id: string}}) {

    const id = parseInt(params.id, 10);

    const updateProdutoWithId = updateProduto.bind(null, id);

  return (
    <>
           <div className=" items-center justify-center h-screen w-screen pt-40">
            <form action={updateProdutoWithId} className="mx-auto my-auto w-full gap-10 text-center flex flex-col items-center justify-center">
                <h1 className=" font-bold text-2xl xl:text-3xl 2xl:text-4xl">Editar produto</h1>
                <div className="bg-azul w-10/12 border border-black flex flex-col gap-10 p-10 rounded-xl">
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl">Nome</label>
                        <input name="title" type="text" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >Preço</label>
                        <input type="text" name="price" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >URL da imagem</label>
                        <input type="text" name="image" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >Descrição</label>
                        <textarea name="desc" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <input type="submit" value={'Salvar'} className="text-white font-bold text-xl rounded-md shadow-md bg-amarelo px-8 py-4"/>
                    </div>
                </div>

            </form>

        </div>
    </>
  );
}