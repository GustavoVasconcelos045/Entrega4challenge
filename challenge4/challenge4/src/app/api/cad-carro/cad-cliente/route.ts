

import { NextResponse } from 'next/server';

let clientes: any[] = []; // Armazena temporariamente os dados dos clientes

export async function POST(request: Request) {
    const cliente = await request.json();
    clientes.push(cliente);
    return NextResponse.json({ message: 'Cliente cadastrado com sucesso!', cliente });
}

export async function GET() {
    return NextResponse.json(clientes);
}
