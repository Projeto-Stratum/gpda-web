import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const linksFollow = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/gpdaufabc",
    },
    // {
    //   name: "Tiktok",
    //   url: "https://www.tiktok.com/@gpdaufabc",
    // },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/company/grupo-de-pesquisa-e-desenvolvimento-aeroespacial/mycompany/",
    },
    {
      name: "Github",
      url: "https://github.com/Projeto-Stratum",
    },
  ];

  const linkUteis = [
    {
      name: "Linktree",
      url: "https://linktr.ee/gpda_ufabc",
    },
    {
      name: "UFABC",
      url: "https://www.ufabc.edu.br",
    },
  ];

  const linkParceiros = [
    {
      name: "Harpia Aerodesign",
      url: "https://www.instagram.com/harpiaaerodesign/?hl=pt-br",
    },
    {
      name: "Rocket Design",
      url: "https://www.instagram.com/ufabcrocketdesign/",
    },
  ];

  const lorenIpson = ["loren", "ipson", "loren", "ipson", "loren", "ipson"];

  return (
    <footer className="flex flex-col items-center bg-[#161616] text-white">
      <div className="flex flex-col justify-end w-full h-full px-6 max-w-content-wrapper-max">
        <div className="flex gap-8 md:gap-0 md:flex-row flex-col justify-between items-center min-h-[424px] py-12">
          <div className="flex flex-col items-center justify-center min-h-full ">
            <Image
              alt="logo GPDA"
              src="/assets/images/gpda-logo.svg"
              width={80}
              className=""
              height={80}
            />
            <div className="text-2xl opacity-90 font-medium !font-korataki">
              GPDA
            </div>
          </div>
          <div className="flex items-start justify-center gap-20">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Links úteis
              </p>
              {linkUteis.map((link, idx) => (
                <Link target="_blank" href={link.url} key={idx}>
                  <span className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Siga o GPDA
              </p>
              {linksFollow.map((link) => (
                <Link target="_blank" href={link.url} key={link.url}>
                  <span className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex-col hidden gap-2 text-center md:flex">
              <p className="text-[#F4EFEA] mb-2 text-lg font-medium">
                Nossos parceiros
              </p>
              {linkParceiros.map((link) => (
                <Link target="_blank" href={link.url} key={link.url}>
                  <span className="text-sm text-[#F4EFEA]/[.8] hover:text-[#f4efea] cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center md:max-w-[200px] ">
            <p className="font-Oswald font-medium text-[#F4EFEA]/[.9] text-xl md:text-2xl text-center">
              Explorando os limites da Terra e além, aeroespacial é a fronteira
              final da humanidade.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-9 text-[#F4EFEA]/[.9]  border-t border-[#F4EFEA]/[.9]">
        <div className="flex items-center justify-center w-full px-6 md:justify-between max-w-content-wrapper-max">
          <p className="cursor-default">
            Copyright © 2023 GPDA. All Rights Reserved.
          </p>
          <p className="hidden cursor-pointer md:block">
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
