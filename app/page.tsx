export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-6xl font-extrabold text-blue-700 mb-6">
          CVMadurorooms
        </h1>

        <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
          Crie um currículo profissional em poucos minutos e aumente as suas
          hipóteses de conseguir emprego.
        </p>

        <a
          href="/criar-cv"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-10 py-4 rounded-xl shadow-lg"
        >
          Criar Currículo Grátis
        </a>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">
              Modelos Profissionais
            </h3>
            <p className="text-gray-600">
              Currículos modernos e atrativos para qualquer área.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">
              Download em PDF
            </h3>
            <p className="text-gray-600">
              Exporte o seu currículo pronto para enviar.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">
              Fácil de Utilizar
            </h3>
            <p className="text-gray-600">
              Preencha os seus dados em poucos minutos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">
              100% Online
            </h3>
            <p className="text-gray-600">
              Sem instalações, funciona em qualquer dispositivo.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-blue-700 text-white py-16 mt-10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Comece já a criar o seu currículo
          </h2>

          <p className="text-xl mb-8">
            Gratuito, rápido e profissional.
          </p>

          <a
            href="/criar-cv"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Criar Currículo
          </a>
        </div>
      </section>
    </main>
  );
}
