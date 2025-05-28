// src/components/Home.tsx
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            ¡Hola! Soy <span className="text-indigo-600">Jorge Luis</span>
          </h1>
          <p className="text-lg text-gray-600">
            Desarrollador web enfocado en crear y aprender más sobre experiencias digitales únicas, modernas y funcionales.
          </p>
          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow-lg"
          >
            Ver proyectos
          </a>
        </motion.div>

        {/* Imagen/Ilustración */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/src/assets/foto.jpg"
            alt="Ilustración"
            className="w-full max-h-[400px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
