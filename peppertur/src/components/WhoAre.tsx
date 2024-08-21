import React from 'react';

// Definindo o tipo das propriedades esperadas
interface WhoAreProps {}

export const WhoAre = React.forwardRef<HTMLOptionElement, WhoAreProps>((_props, ref) => {
  return (
    <>
        <section ref={ref} id='whoare' className="py-12 px-6 sm:px-10 lg:px-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
                    Quem Somos?
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 text-center">
                Somos uma empresa familiar que oferece uma experiência única aos nossos clientes. Com destinos cuidadosamente
                selecionados, proporcionamos a oportunidade de conhecer os melhores shoppings atacadistas. Contamos com uma
                equipe de guias registrados no Cadastur e motoristas altamente qualificados e capacitados.
                </p>
                <div className="flex justify-center mb-8">
                    <iframe
                        width="100%"
                        height="325"
                        src="https://www.youtube.com/embed/KnfHyNlYK_Y?si=dP1zEEOvjNycYlUB"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full max-w-lg"
                    ></iframe>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <li className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Visão</h2>
                        <p className="text-gray-700">
                        Ser uma instituição de excelência, reconhecida nos locais onde atua, alcançando padrões elevados de
                        qualidade e cultivando relacionamentos duradouros com nossos clientes.
                        </p>
                    </li>
                    <li className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Missão</h2>
                        <p className="text-gray-700">
                        Ser referência como Transportadora Turística, bem como divulgar os pólos atacadistas de confecções do
                        Brasil, para o setor de varejo, sendo um facilitador entre suas negociações.
                        </p>
                    </li>
                    <li className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Valores</h2>
                        <p className="text-gray-700">
                        <strong>Evangelho:</strong> Deus em nosso comando.<br />
                        <strong>Conforto:</strong> Priorização do bem-estar de nossos clientes.<br />
                        <strong>Qualidade:</strong> Padrões superiores em cada processo.<br />
                        <strong>Família:</strong> Cultivo de laços solidários internos.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    </>
  );
});
