"use client";

import { useState } from "react";

export default function CriarCV() {
const [modelo, setModelo] = useState("moderno");
const [foto, setFoto] = useState<string | null>(null);  
const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");

  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [escola, setEscola] = useState("");
  const [curso, setCurso] = useState("");

  const [competencias, setCompetencias] = useState("");

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Formulário */}
        <div
  className={`p-8 rounded-xl shadow ${
    modelo === "executivo"
      ? "bg-gray-100"
      : modelo === "criativo"
      ? "bg-blue-50"
      : "bg-white"
  }`}
>
          <h1 className="text-3xl font-bold mb-6">
  Criar Currículo
</h1>

<select
  value={modelo}
  onChange={(e) => setModelo(e.target.value)}
  className="w-full border p-3 rounded mb-6"
>
  <option value="moderno">Moderno</option>
  <option value="minimalista">Minimalista</option>
  <option value="executivo">Executivo</option>
  <option value="criativo">Criativo</option>
</select>

<h2 className="text-xl font-bold mb-4">
  Dados Pessoais
</h2>
<select
  value={modelo}
  onChange={(e) => setModelo(e.target.value)}
  className="w-full border p-3 rounded mb-6"
>
  <option value="moderno">Moderno</option>
  <option value="minimalista">Minimalista</option>
  <option value="executivo">Executivo</option>
  <option value="criativo">Criativo</option>
</select>
          <h2 className="text-xl font-bold mb-4">
            Dados Pessoais
          </h2>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
    }
  }}
  className="w-full border p-3 rounded mb-4"
/>

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
            className="w-full border p-3 rounded mb-6"
          />

          <h2 className="text-xl font-bold mb-4">
            Experiência Profissional
          </h2>

          <input
            type="text"
            placeholder="Empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            placeholder="Descrição das funções"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="w-full border p-3 rounded mb-6"
            rows={4}
          />

          <h2 className="text-xl font-bold mb-4">
            Formação Académica
          </h2>

          <input
            type="text"
            placeholder="Escola ou Universidade"
            value={escola}
            onChange={(e) => setEscola(e.target.value)}
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="text"
            placeholder="Curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            className="w-full border p-3 rounded mb-6"
          />

          <h2 className="text-xl font-bold mb-4">
            Competências
          </h2>

          <input
            type="text"
            placeholder="Ex: Excel, Word, Atendimento ao Cliente"
            value={competencias}
            onChange={(e) => setCompetencias(e.target.value)}
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Pré-visualização */}
        <div className="bg-white p-8 rounded-xl shadow">
{foto && (
  <img
    src={foto}
    alt="Foto"
    className="w-32 h-32 rounded-full object-cover mb-4 border"
  />
)}

          <h2
  className={`text-4xl font-bold ${
    modelo === "minimalista"
      ? "text-black"
      : modelo === "executivo"
      ? "text-gray-800"
      : "text-blue-700"
  }`}
>
  {nome || "O Seu Nome"}
</h2>
          <div className="mt-4 text-gray-700">
            <p>{email || "email@exemplo.com"}</p>
            <p>{telefone || "000 000 000"}</p>
            <p>{cidade || "Cidade"}</p>
          </div>

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Experiência Profissional
          </h3>

          <p className="font-semibold">
            {cargo || "Cargo"}
          </p>

          <p>
            {empresa || "Empresa"}
          </p>

          <p className="text-gray-600">
            {descricao || "Descrição das funções"}
          </p>

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Formação Académica
          </h3>

          <p className="font-semibold">
            {curso || "Curso"}
          </p>

          <p>
            {escola || "Instituição"}
          </p>

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Competências
          </h3>

          <p>
            {competencias || "Competências do candidato"}
          </p>
        </div>

      </div>
    </main>
  );
}
