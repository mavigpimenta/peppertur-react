import React from 'react';

export const Services = React.forwardRef((props, ref) => {
  return (
    <>
        <section ref={ref} id='services' className="py-12 px-6 sm:px-10 lg:px-16 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
                    Nossos Roteiros
                </h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Brusque</h2>
                    <span className="block text-gray-600 mb-4">Estado: <b className='text-red-600'>SC</b></span>
                    <p className="text-gray-700">
                    Os shoppings de atacado de Brusque oferecem uma vasta seleção de produtos, desde roupas casuais até itens
                    de moda praia e moda íntima.
                    </p>
                </li>
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Indaial</h2>
                    <span className="block text-gray-600 mb-4">Estado: <b className='text-red-600'>SC</b></span>
                    <p className="text-gray-700">
                    Descubra Indaial, a cidade próxima a Brusque que também faz parte do nosso roteiro de compras. Com excelentes
                    shoppings e uma variedade de produtos incríveis.
                    </p>
                </li>
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Serra Gaúcha</h2>
                    <span className="block text-gray-600 mb-4">Estado: <b className='text-red-600'>RS</b></span>
                    <p className="text-gray-700">
                    Na Serra Gaúcha, você encontrará uma variedade de malharias que produzem tricôs de alta qualidade, conhecidos
                    por sua beleza, conforto e durabilidade.
                    </p>
                </li>
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Aparecida</h2>
                    <span className="block text-gray-600 mb-4">Estado: <b className='text-red-600'>SP</b></span>
                    <p className="text-gray-700">
                    Embarque em uma jornada espiritual inesquecível rumo a Aparecida, conhecida como o maior santuário mariano do
                    mundo.
                    </p>
                </li>
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Logística de Compras</h2>
                    <span className="block text-gray-600 mb-4">Estado: <b className='text-red-600'>PR</b></span>
                    <p className="text-gray-700">
                    Faça o seu pedido na loja, nos avise e trazemos a mercadoria para você. Com opção de retirada no escritório ou
                    entrega em seu estabelecimento.
                    </p>
                </li>
                <li className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-2">Fretamento</h2>
                    <span className="block text-gray-600 mb-4">Países: <b className='text-red-600'>BR</b> <b className='text-red-600'>AR</b> <b className='text-red-600'>PY</b> <b className='text-red-600'>UY</b> <b className='text-red-600'>BO</b> <b className='text-red-600'>PE</b></span>
                    <p className="text-gray-700">
                    Oferecemos fretamento de ônibus e van dentro do destino de sua escolha. Entre em contato e garanta uma viagem
                    tranquila e segura!
                    </p>
                </li>
                </ul>
            </div>
        </section>
    </>
  );
});
