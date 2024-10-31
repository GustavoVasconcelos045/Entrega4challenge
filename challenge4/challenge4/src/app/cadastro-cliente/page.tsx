import { useState } from 'react';

export default function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  const handleCadastro = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Cliente cadastrado: ${nome}, ${email}`);
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastro do Cliente</h2>
      <form onSubmit={handleCadastro} className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Cadastrar</button>
      </form>
    </div>
  );
}
