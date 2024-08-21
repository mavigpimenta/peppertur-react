import React, { forwardRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs.send(
      'service_orwpnp7', 
      'template_r4gq5ac', 
      templateParams,
      'oxSuwVlyyxx1FQMWe' 
    )
    .then((response) => {
      console.log('E-mail enviado com sucesso!', response.status, response.text);
      toast.success('E-mail enviado com sucesso!');
    })
    .catch((error) => {
      console.error('Erro ao enviar o e-mail:', error);
      toast.error('Erro ao enviar o e-mail');
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <section ref={ref} id="contato" className="py-16 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
          Contato
        </h1>
        <div className="flex justify-center px-4">
          <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-lg w-full space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Mensagem"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white p-3 rounded-lg w-full font-semibold hover:bg-red-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          maxWidth: '90%',
          fontSize: '14px',
        }}
      />
    </>
  );
});
