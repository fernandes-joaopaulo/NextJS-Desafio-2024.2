'use client'

import {Search as SearchIcon} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search(){

    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = ( query: string) => {
        if(!query) {
            return 
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/produtos/search/?${params.toString()}`)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="flex basis-full" autoComplete="off">
            <div className="flex w-full flex-col items-center gap-6 my-10">
                <div className="relative flex w-full items-center">
                <SearchIcon className="w-7 h-7 absolute left-4"/>
                    <input id="search" 
                    name="search"
                    type="text"
                    className="w-full rounded-3xl px-16 py-6 text-black border border-black/50 transition-all duration-300"
                    placeholder="Buscar produto"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}