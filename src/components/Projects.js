export default function Projects() {
    const projects = [
        {
            name: "petspert",
            description:
                "an intelligent pet health rag system with data from wikipedia and national library of medicine covering 150+ species of dogs, cats, birds, and horses",
            tech: "next.js, python, fastapi, postgresql, supabase, langchain, anthropic api",
            link: "https://www.petspert.app/",
            year: "2025",
        },
        {
            name: "jobbin",
            description:
                "chrome extension that tracks job applications on multiple job boards with a user-friendly dashboard",
            tech: "react, node.js, javascript, tailwind, postgresql, express.js, openai api, anthropic api",
            link: "https://chromewebstore.google.com/detail/jobbin/lbfabagnifhinlikbjkddkjindmabcfp",
            year: "2024",
        },
        {
            name: "w lang",
            description:
                "a programming language that is transpiled to c with lexer coded using flex",
            tech: "c, flex",
            link: "https://github.com/moneyrudh/w-lang",
            year: "2024",
        }
    ];

    return (
        <section className="mb-24">
            <h2 className="text-3xl text-maroon-200 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-maroon-500">
                projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-maroon-900/40 backdrop-blur-sm rounded-md p-6 hover:bg-maroon-800/30 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl text-maroon-200">{project.name}</h3>
                            <span className="text-maroon-400 text-sm">{project.year}</span>
                        </div>

                        <p className="text-maroon-300 mb-4">{project.description}</p>

                        <div className="mb-4">
                            <p className="text-maroon-400 text-sm">{project.tech}</p>
                        </div>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-maroon-300 hover:text-maroon-200 transition-colors"
                        >
                            view project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
