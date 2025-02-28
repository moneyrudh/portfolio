export default function Skills() {
    const skillCategories = [
        {
            name: "frameworks/tools",
            skills: ["angular", "react", "next.js", "express.js", "node.js", "mongodb", "arangodb", "gcp"]
        },
        {
            name: "languages",
            skills: ["javascript", "typescript", "go", "java", "c", "c++", "c#", "python", "sql"]
        },
        {
            name: "web technologies",
            skills: ["html5", "css", "tailwind"]
        },
        {
            name: "databases",
            skills: ["mongodb", "postgresql", "mysql", "redis"]
        }
    ];

    return (
        <section className="mb-20">
            <h2 className="text-3xl text-maroon-200 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-maroon-500">
                skills
            </h2>

            <div className="space-y-8">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-lg text-maroon-200 mb-3">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-maroon-800/40 px-3 py-1 rounded text-maroon-300 text-sm hover:bg-maroon-700/40 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}