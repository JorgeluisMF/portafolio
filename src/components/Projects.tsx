// src/components/Projects.tsx
``
export default function Projects() {
    
  const projects = [
    { id: 1, title: 'JournalApp', description: 'Projecto de notas, creado con react y firebase, sistema de authenticacion y sistema de CRUD para las notas', image:'/public/assets/JournalApp.png', link: 'https://react-proyects-6fedb.web.app' },
    { id: 2, title: 'Agencia de Viajes', description: 'Projecto en Nodejs, y pug de una agencia de viajes', image: '/public/assets/AgenciaViajes.png', link: 'https://agencia-de-viajes-ohyl.onrender.com/' },
    { id: 3, title: 'School System', description: 'Sistema de Gestion de Clases, usando Django, Html y Tailwindcss', image: '/public/assets/SchoolSystem.png', link: 'https://github.com/JorgeluisMF/SchoolSystem' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-600 mb-12 text-center">Proyectos</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, description, image, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Imagen placeholder o real */}
              <div className="h-48 bg-indigo-100 flex items-center justify-center text-indigo-300 font-bold text-xl">
                {image ? (
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                  'Imagen'
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
