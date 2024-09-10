import React from "react";
import { createProduto } from "../../../../actions/admin/actions";

export default function Create() {

  return (
    <>
           <form action={createProduto} className=" items-center justify-center h-screen w-screen pt-40">
            <div className="mx-auto my-auto w-full gap-10 text-center flex flex-col items-center justify-center">
                <h1 className=" font-bold text-2xl xl:text-3xl 2xl:text-4xl">Novo produto</h1>
                <div className="bg-azul w-10/12 border border-black flex flex-col gap-10 p-10 rounded-xl">
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl">Nome</label>
                        <input name="name" type="text" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >Preço</label>
                        <input name="price" type="text" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >Imagem</label>
                        <input name="image" type="text" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="font-semibold text-sm xl:text-xl" >Descrição</label>
                        <textarea name="desc" className="rounded-md shadow-md p-2 w-10/12"/>
                    </div>
                    <div className="flex gap-10">
                      <div className="flex flex-col text-left gap-2">
                          <input type="submit" value={"Salvar"} className="text-white cursor-pointer font-bold text-xl rounded-md shadow-md bg-amarelo px-8 py-4"/>
                      </div>
                    </div>
                    
                </div>
            </div>

        </form>
    </>
  );
}
