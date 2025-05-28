// src/components/About.tsx
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'JavaScript (ES6+)', level: 75 },
  { name: 'Angular', level: 80 },
  { name: 'Python/Django', level: 80 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen o avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" // reemplaza con tu foto o ilustración
            alt="Foto de perfil"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800"
        >
          <h2 className="text-3xl font-bold text-indigo-600">Sobre mí</h2>
          <p className="text-lg leading-relaxed">
            Soy un desarrollador apasionado por crear soluciones digitales modernas y eficientes. Me encanta trabajar con tecnologías como React, TypeScript y Tailwind CSS para construir aplicaciones web que sean visualmente atractivas y altamente funcionales.
          </p>
          <p className="text-lg leading-relaxed">
            Tengo experiencia en proyectos front-end, diseño responsivo, y buenas prácticas para ofrecer una experiencia de usuario impecable.
          </p>

          <div className="mt-6">
            <h3 className="font-semibold text-xl mb-4">Habilidades principales</h3>
            <div className="space-y-4">
              {skills.map(({ name, level }) => (
                <div key={name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-indigo-700">{name}</span>
                    <span className="text-sm text-gray-600">{level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-4 bg-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
