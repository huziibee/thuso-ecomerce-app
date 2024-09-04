import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/ui/fonts";

export default function ThusoLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeEuropeAfricaIcon className="h-12 w-12 rotate-[15deg]" />
      <p className=" pl-2 text-[26px]">Thuso AI</p>
    </div>
  );
}
