import { useState } from 'react';

export default function CadastroCarro() {
  const [modelo, setModelo] = useState('');
  const [problema, setProblema] = useState('');

  const handleCadastro = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Carro cadastrado: ${modelo} - Problema: ${problema}`);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastro do Carro</h2>
      <form onSubmit={handleCadastro} className="space-y-4">
        <input
          type="text"
          placeholder="Modelo do Carro"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Descrição do Problema"
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Cadastrar Carro</button>
      </form>
    </div>
  );
}
