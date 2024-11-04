"use client";
import { useState } from 'react';

export default function CadastroCarro() {
    const [modelo, setModelo] = useState('');
    const [problema, setProblema] = useState('');

    // Função para enviar os dados para a API
    const cadastrarCarro = async (carroData: any) => {
        try {
            const response = await fetch('/api/cad-carro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carroData),
            });

            const data = await response.json();
            alert(data.message); // Exibe a mensagem de sucesso ou erro retornada pela API
        } catch (error) {
            console.error('Erro ao cadastrar o carro:', error);
            alert('Ocorreu um erro ao cadastrar o carro. Tente novamente.');
        }
    };

    // Função para lidar com o envio do formulário
    const handleCadastro = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Dados do carro a serem enviados
        const carroData = {
            modelo,
            problema,
        };
        
        // Chama a função cadastrarCarro passando os dados
        cadastrarCarro(carroData);
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
                />
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                    Cadastrar Carro
                </button>
            </form>
        </div>
    );
}
