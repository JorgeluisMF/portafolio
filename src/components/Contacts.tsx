// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-40 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8">Contáctame</h2>
        <p className="mb-10 text-gray-700">
          ¿Quieres trabajar conmigo o simplemente saludar? Aquí puedes encontrar mis redes sociales o enviarme un mensaje.
        </p>

        <div className="flex justify-center space-x-8 mb-12">
          <a href="https://github.com/JorgeluisMF" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition">
            GitHub
          </a>
        </div>
        <a
          href="mailto:jorgeluismateo0503@gmail.com.com"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Enviar correo
        </a>
      </div>
    </section>
  );
}
