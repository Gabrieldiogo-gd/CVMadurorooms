"use client";

import { useState } from "react";

export default function CriarCV() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Formulário */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-6">
            Criar Currículo
          </h1>

          <input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Pré-visualização */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-4xl font-bold text-blue-700">
            {nome || "O Seu Nome"}
          </h2>

          <div className="mt-4 text-gray-700">
            <p>{email || "email@exemplo.com"}</p>
            <p>{telefone || "000 000 000"}</p>
            <p>{cidade || "Cidade"}</p>
          </div>

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Perfil Profissional
          </h3>

          <p className="text-gray-600">
            Aqui aparecerá o resumo profissional do candidato.
          </p>
        </div>

      </div>
    </main>
  );
}
