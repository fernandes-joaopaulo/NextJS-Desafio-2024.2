import Message from "@/components/Contato/Message";
import { Redes } from "@/components/Contato/Redes";

export default function Contato() {
  return (
    <div className="space-y-24 md:space-y-32 w-full min-h-screen p-10 mx-auto">
      <Message/>
      <Redes/>
    </div>
  );
}
