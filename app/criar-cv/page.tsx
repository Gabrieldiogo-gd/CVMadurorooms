
"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
export default function CriarCV() {

const [idiomas, setIdiomas] = useState([
  {
    nome: "",
  },
]);
const adicionarIdioma = () => {
  setIdiomas([
    ...idiomas,
    {
      nome: "",
    },
  ]);
};

const removerIdioma = (index: number) => {
  if (idiomas.length === 1) return;

  const novos = idiomas.filter((_, i) => i !== index);
  setIdiomas(novos);
};


const [modelo, setModelo] = useState("moderno");
const [foto, setFoto] = useState<string | null>(null);  
const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [experiencias, setExperiencias] = useState([
  {
    empresa: "",
    cargo: "",
    descricao: "",
  },
]);
const adicionarExperiencia = () => {
  setExperiencias([
    ...experiencias,
    {
      empresa: "",
      cargo: "",
      descricao: "",
    },
  ]);
};

const removerExperiencia = (index: number) => {
  if (experiencias.length === 1) return;

  const novas = experiencias.filter((_, i) => i !== index);
  setExperiencias(novas);
};

const [carta, setCarta] = useState("");


  const [formacoes, setFormacoes] = useState([
  {
    escola: "",
    curso: "",
  },
]);

const adicionarFormacao = () => {
  setFormacoes([
    ...formacoes,
    {
      escola: "",
      curso: "",
    },
  ]);
};

const removerFormacao = (index: number) => {
  if (formacoes.length === 1) return;

  const novas = formacoes.filter((_, i) => i !== index);
  setFormacoes(novas);
};

const [competencias, setCompetencias] = useState([
  {
    nome: "",
  },
]);
 
const adicionarCompetencia = () => {
  setCompetencias([
    ...competencias,
    {
      nome: "",
    },
  ]);
};

const removerCompetencia = (index: number) => {
  if (competencias.length === 1) return;

  const novas = competencias.filter((_, i) => i !== index);
  setCompetencias(novas);
};

 const gerarPDF = async () => {
  try {
    const element = document.getElementById("curriculo-preview");

    if (!element) {
      alert("Não foi encontrada a pré-visualização do currículo.");
      return;
    }

    const canvas = await html2canvas(element, {
  scale: 2,
  useCORS: true,
  backgroundColor: "#ffffff",
});

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = 190;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);

    pdf.save("curriculo.pdf");
  } catch (error) {
    console.error(error);
    alert("Erro ao gerar PDF. Ver consola.");
  }
};
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
          
          <input
  type="text"
  placeholder="LinkedIn"
  value={linkedin}
  onChange={(e) => setLinkedin(e.target.value)}
  className="w-full border p-3 rounded mb-6"
/>
          <h2 className="text-xl font-bold mb-4">
            Experiência Profissional
          </h2>

          {experiencias.map((exp, index) => (
  <div key={index} className="mb-6 border-b pb-4">
    <div className="flex justify-between items-center mb-2">
  <h3 className="font-bold">
    Experiência {index + 1}
  </h3>

  <button
    type="button"
    onClick={() => removerExperiencia(index)}
    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
  >
    Remover
  </button>
</div>

    <input
      type="text"
      placeholder="Empresa"
      value={exp.empresa}
      onChange={(e) => {
        const novas = [...experiencias];
        novas[index].empresa = e.target.value;
        setExperiencias(novas);
      }}
      className="w-full border p-3 rounded mb-4"
    />

    <input
      type="text"
      placeholder="Cargo"
      value={exp.cargo}
      onChange={(e) => {
        const novas = [...experiencias];
        novas[index].cargo = e.target.value;
        setExperiencias(novas);
      }}
      className="w-full border p-3 rounded mb-4"
    />

    <textarea
      placeholder="Descrição das funções"
      value={exp.descricao}
      onChange={(e) => {
        const novas = [...experiencias];
        novas[index].descricao = e.target.value;
        setExperiencias(novas);
      }}
      className="w-full border p-3 rounded mb-4"
      rows={4}
    />
  </div>
))}

<button
  type="button"
  onClick={adicionarExperiencia}
  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mb-4"
>
  Adicionar Experiência
</button>



          <h2 className="text-xl font-bold mb-4">
            Formação Académica
          </h2>

          {formacoes.map((formacao, index) => (
  <div key={index} className="mb-6 border-b pb-4">
    

<div className="flex justify-between items-center mb-2">
  <h3 className="font-bold">
    Formação {index + 1}
  </h3>

  <button
    type="button"
    onClick={() => removerFormacao(index)}
    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
  >
    Remover
  </button>
</div>

    <input
      type="text"
      placeholder="Escola ou Universidade"
      value={formacao.escola}
      onChange={(e) => {
        const novas = [...formacoes];
        novas[index].escola = e.target.value;
        setFormacoes(novas);
      }}
      className="w-full border p-3 rounded mb-4"
    />

    <input
      type="text"
      placeholder="Curso"
      value={formacao.curso}
      onChange={(e) => {
        const novas = [...formacoes];
        novas[index].curso = e.target.value;
        setFormacoes(novas);
      }}
      className="w-full border p-3 rounded mb-4"
    />
  </div>
))}

<button
  type="button"
  onClick={adicionarFormacao}
  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mb-4"
>
   Adicionar Formação Académica
</button>



          <h2 className="text-xl font-bold mb-4">
            Competências
          </h2>

          {competencias.map((competencia, index) => (
  <div key={index} className="mb-4">
    

     <div className="flex justify-between items-center mb-2">
  <h3 className="font-bold">
    Competência {index + 1}
  </h3>

  <button
    type="button"
    onClick={() => removerCompetencia(index)}
    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
  >
    Remover
  </button>
</div>

    <input
      type="text"
      placeholder="Ex: Excel"
      value={competencia.nome}
      onChange={(e) => {
        const novas = [...competencias];
        novas[index].nome = e.target.value;
        setCompetencias(novas);
      }}
      className="w-full border p-3 rounded"
    />
  </div>
))}


<button
  type="button"
  onClick={adicionarCompetencia}
  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mb-4"
>
   Adicionar Competências
</button>


          <h2 className="text-xl font-bold mb-4 mt-6">
  Idiomas
</h2>

{idiomas.map((idioma, index) => (
  <div key={index} className="mb-4">
    

    <div className="flex justify-between items-center mb-2">
  <h3 className="font-bold">
    Idioma {index + 1}
  </h3>

  <button
    type="button"
    onClick={() => removerIdioma(index)}
    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm"
  >
    Remover
  </button>
</div>

    <input
      type="text"
      placeholder="Ex: Português"
      value={idioma.nome}
      onChange={(e) => {
        const novos = [...idiomas];
        novos[index].nome = e.target.value;
        setIdiomas(novos);
      }}
      className="w-full border p-3 rounded"
    />
  </div>
))}
        

<button
  type="button"
  onClick={adicionarIdioma}
  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mb-4"
>
   Adicionar Idiomas      
</button>



<h2 className="text-xl font-bold mb-4 mt-6">
  Carta de Condução
</h2>

<input
  type="text"
  placeholder="Ex: Categoria B"
  value={carta}
  onChange={(e) => setCarta(e.target.value)}
  className="w-full border p-3 rounded"
/>



</div>

       {/* Pré-visualização */}
<div
  id="curriculo-preview"
  style={{ backgroundColor: "#ffffff", color: "#000000" }}
  className="bg-white p-8 rounded-xl shadow"
>
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
            <p>{linkedin || "linkedin.com/in/perfil"}</p>  
        </div>

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Experiência Profissional
          </h3>

          
          {experiencias.map((exp, index) => (
  <div key={index} className="mb-4">
    <p className="font-semibold">
      {exp.cargo || `Cargo ${index + 1}`}
    </p>

    <p>
      {exp.empresa || `Empresa ${index + 1}`}
    </p>

    <p className="text-gray-600">
      {exp.descricao || "Descrição das funções"}
    </p>
  </div>
))}
          

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Formação Académica
          </h3>

          {formacoes.map((formacao, index) => (
  <div key={index} className="mb-4">
    <p className="font-semibold">
      {formacao.curso || `Curso ${index + 1}`}
    </p>

    <p>
      {formacao.escola || `Instituição ${index + 1}`}
    </p>
  </div>
))}

          <hr className="my-6" />

          <h3 className="text-xl font-bold mb-2">
            Competências
          </h3>
          <hr className="my-6" />

<h3 className="text-xl font-bold mb-2">
  Idiomas
</h3>

{competencias.map((competencia, index) => (
  <p key={index}>
    {competencia.nome || `Competência ${index + 1}`}
  </p>
))}

{idiomas.map((idioma, index) => (
  <p key={index}>
    {idioma.nome || `Idioma ${index + 1}`}
  </p>
))}

<hr className="my-6" />

<h3 className="text-xl font-bold mb-2">
  Carta de Condução
</h3>

<p>
  {carta || "Categoria B"}
</p>

        <div className="mt-8 text-center">
  <button
    onClick={gerarPDF}
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg"
  >
    📄 Descarregar PDF
  </button>
</div>
        </div>

      </div>
    </main>
  );
}
