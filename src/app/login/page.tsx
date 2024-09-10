export default function Login()
{
    return(
        <div className="bg-azul items-center justify-center h-screen w-screen pt-40">
            <div className="mx-auto my-auto max-w-80 gap-10 bg-azul text-center flex flex-col">
                <h1 className="text-white font-bold text-2xl xl:text-3xl 2xl:text-4xl">Faça login</h1>
                <div className="w-full border border-black flex flex-col gap-10 items-center p-10 rounded-xl">
                    <div className="flex flex-col text-left gap-2">
                        <label className="text-white font-semibold text-sm xl:text-xl">E-mail</label>
                        <input type="email" className="rounded-md shadow-md p-2"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className="text-white font-semibold text-sm xl:text-xl" >Senha</label>
                        <input type="password" className="rounded-md shadow-md p-2"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <input type="submit" value={"Login"} className="text-white font-bold text-xl rounded-md shadow-md bg-amarelo px-8 py-4"/>
                    </div>
                </div>
            </div>

        </div>
    )
}