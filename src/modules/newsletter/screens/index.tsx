export default function NewsLetterScreen() {
  const array = ["lore", "ipsum", "dolor", "sit", "amet", "consectetur"];

  return (
    <>
      <div className=" bg-black relative px-[104px] md:pt-[120px] pt-[90px]">
        <div className="flex justify-center mb-16 text-4xl uppercase">
          <h1 className="text-center font-Jost">Artigos recentes</h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
          <div className="flex justify-center w-full">
            <div className="xl:w-[660px] md:w-[450px] w-full bg-gray-300 rounded-lg md:h-[450px] h-[300px]"></div>
          </div>
          <div className="flex flex-col justify-center w-full gap-2 md:gap-4">
            <span className="opacity-80">eCommerce - December 18, 2020</span>
            <h1 className="text-3xl font-medium xl:text-6xl md:text-5xl">
              Titulo adasodaso dhasddaosuhda
            </h1>
            <p className="opacity-80">
              Loren ipson dolor sit amet, consectetur adipiscing elit. Donec ac
            </p>
            <button className="px-4 py-3 md:mt-7 mt-4 focus:bg-white focus:text-black text-sm font-bold w-72 min-w-[10rem] uppercase border-2 border-white rounded">
              ver mais
            </button>
          </div>
        </div>
        <div className="mt-20">
          <h1>Texto</h1>
          <div>
            {array.map((item, index) => {
              return (
                <div key={index}>
                  <h1>{item}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
