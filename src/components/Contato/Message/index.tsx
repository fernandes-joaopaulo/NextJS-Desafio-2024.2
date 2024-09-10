export default function Message()
{
    return(
        <div className="items-center justify-center flex flex-col lg:flex-row gap-20">
            <div className="gap-10 text-center flex flex-col">
                <h1 className=" font-bold text-3xl 2xl:text-4xl justify-center">Fale conosco</h1>
                <div className="w-full border bg-amarelo shadow-md flex flex-col gap-10 py-5 px-10 rounded-xl">
                    <div className="flex flex-col text-left gap-2">
                        <label className=" font-semibold text-sm xl:text-xl" >Assunto</label>
                        <input type="text" className="rounded-md shadow-md p-2"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className=" font-semibold text-sm xl:text-xl">E-mail</label>
                        <input type="email" className="rounded-md shadow-md p-2"/>
                    </div>
                    <div className="flex flex-col text-left gap-2">
                        <label className=" font-semibold text-sm xl:text-xl">Mensagem</label>
                        <textarea className="rounded-md shadow-md" rows={8}/>
                    </div>
                    <div className="flex flex-col text-left gap-2 items-center">
                        <input type="submit" value={"Enviar"} className=" font-bold text-xl rounded-md shadow-md bg-white text-amarelo w-1/2"/>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197353583144!2d-46.65906385957563!3d-23.561354478888063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1725631162944!5m2!1spt-BR!2sbr" 
            width="600" height="450" className="rounded-xl shadow-md" loading="lazy"></iframe>
        </div>
    )
}