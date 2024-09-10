"use client";

import Link from "next/link";
import { deleteProduto } from "../../../actions/admin/actions";

export default function EditButton({ id }: { id: number | undefined }) {
  return (
    <Link href={`/admin/edit/${id}`}>
      <div className="flex flex-col text-left gap-2">
        <button className="text-white font-bold text-xl rounded-md shadow-md bg-amarelo px-8 py-4">
          Editar
        </button>
      </div>
    </Link>
  );
}

export function DeleteButton({ id }: { id: number | undefined }) {
  return (
    <button onClick={() => deleteProduto(id)} className="bg-vermelho rounded-md text-white p-2 font-bold max-h-10">
        Excluir
    </button>
  );
}
