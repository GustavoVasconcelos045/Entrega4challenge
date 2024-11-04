"use client";
import { useState } from 'react';

export default function cadastrarCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    // Função para enviar os dados do cliente para a API
    const cadastrarCliente = async (clienteData: any) => {
        try {
            const response = await fetch('/api/cad-cliente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clienteData),
            });

            const data = await response.json();
            alert(data.message); // Exibe a mensagem de sucesso ou erro retornada pela API
        } catch (error) {
            console.error('Erro ao cadastrar o cliente:', error);
            alert('Ocorreu um erro ao cadastrar o cliente. Tente novamente.');
        }
    };

    // Função para lidar com o envio do formulário
    const handleCadastro = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Dados do cliente a serem enviados
        const clienteData = {
            nome,
            email,
            telefone,
        };
        
        // Chama a função cadastrarCliente passando os dados
        cadastrarCliente(clienteData);
    };

    return (
        <div className="p-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Cadastro do Cliente</h2>
            <form onSubmit={handleCadastro} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nome do Cliente"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="email"
                    placeholder="Email do Cliente"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Telefone do Cliente"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Cadastrar Cliente
                </button>
            </form>
        </div>
    );
}
