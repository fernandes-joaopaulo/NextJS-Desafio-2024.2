import { Destaque } from "@/components/Destaque";
import About from "@/components/aboutUs";
import getProdutos from "../../../actions/home/actions";

export default async function Home() {

  const produtos = await getProdutos();

  return (
    <div className="space-y-24 md:space-y-32 w-full md:w-10/12 py-8 min-h-screen mx-auto">
      <Destaque produtos={produtos}/>
      <About/>
    </div>
  );
}