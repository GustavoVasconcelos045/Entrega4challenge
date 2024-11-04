// src/app/api/cad-cliente/route.ts

import { NextResponse } from 'next/server';

let carros: any[] = []; // Armazena temporariamente os dados dos clientes

export async function POST(request: Request) {
    const carro = await request.json();
    carros.push(carros);
    return NextResponse.json({ message: 'Cliente cadastrado com sucesso!', carro });
}

export async function GET() {
    return NextResponse.json(carros);
}
