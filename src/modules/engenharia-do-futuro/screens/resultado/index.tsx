import { useGetResults } from "@/services/eng-futuro";

export default function EngResultadoScreen() {

  const {data, isLoading } = useGetResults();

  return (
    <>
      <div className=" bg-black min-h-screen w-full pb-20 relative pt-[96px] md:px-7 p-6">
        <div className="flex justify-center border-b border-gray-800 border-solid pb-[45px]">
            <h1 className="text-2xl uppercase md:text-3xl font-korataki">Resultados</h1>
        </div>
        <div className="flex justify-center z-[2] w-full] gap-10  pt-[45px]">
            <div className="relative w-full  max-w-[1280px] overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-400">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                Colocação
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Nota
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && <tr><td colSpan={3} className="py-12 text-2xl font-korataki">Carregando...</td></tr>}
                        {data && data.map((team, index) => {
                            const name = Object.keys(team)[0];
                            const score = team[name].toFixed(2);
                            return (
                            <tr key={team.team_name} className="bg-gray-800 border-b border-gray-700">
                                <td className="px-6 py-4 text-white">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{name}</td>
                                <td className="px-6 py-4">{score}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>

        </div>
      </div>
    </>
  );
}
