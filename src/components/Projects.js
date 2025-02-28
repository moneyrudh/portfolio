import { useState } from 'react';

export default function Projects() {
    const [activeTab, setActiveTab] = useState('tech');
    
    const softwareProjects = [
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
                "a programming language that is transpiled to c, written in c",
            tech: "c, flex",
            link: "https://github.com/moneyrudh/w-lang",
            year: "2024",
        }
    ];

    const gameProjects = [
        {
            name: "sisyphi",
            description:
                "ai-driven multiplayer game where player-input text prompts generate unique competitive maps with real-time physics and environment-affecting skill moves",
            tech: "unity, c#, netcode for gameobjects, openai api, anthropic api, groq",
            link: "https://www.linkedin.com/posts/anirudhananth_through-an-advanced-project-course-in-collaboration-activity-7268006287957753856-3R2g",
            year: "2024",
        },
        {
            name: "veilmyst",
            description:
                "2d platformer inspired by celeste and hollow knight featuring complex level designs and a custom character movement system",
            tech: "unity, c#",
            link: "https://dotmoney.itch.io/veilmyst",
            year: "2024",
        },
        {
            name: "f22raptor",
            description:
                "infinite-scroll hypercasual strategy based flight game written in pure c, compiled to webassembly with daily leaderboards and submission tracking",
            tech: "c, sdl",
            link: "https://f22raptor.xyz",
            year: "2024",
        }
    ];

    const moreProjectsLinks = {
        'tech': "https://github.com/moneyrudh",
        'games': "https://dotmoney.itch.io/"
    };

    const projectsByTab = {
        'tech': softwareProjects,
        'games': gameProjects
    };

    return (
        <section className="mb-24">
            <h2 className="text-3xl text-maroon-200 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-maroon-500">
                projects
            </h2>

            {/* Tabs */}
            <div className="flex mb-8 border-b border-maroon-800/40 w-full">
                {['tech', 'games'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`w-1/2 py-2 text-lg transition-colors relative text-center hover:bg-maroon-500 hover:bg-opacity-15 hover:rounded-sm ${
                            activeTab === tab 
                                ? 'text-maroon-200 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-maroon-500' 
                                : 'text-maroon-400 hover:text-maroon-300'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Regular project cards */}
                {projectsByTab[activeTab].map((project, index) => (
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

                {/* "More projects" card */}
                <div className="backdrop-blur-sm rounded-md p-6 transition-colors flex flex-col justify-center items-center">
                    <h3 className="text-lg text-maroon-200 mb-6">check out more</h3>
                    
                    <div className="flex justify-center w-full">
                        <a
                            href={moreProjectsLinks[activeTab]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 border border-maroon-500 rounded text-maroon-300 hover:text-maroon-200 hover:bg-maroon-800/50 transition-colors"
                        >
                            {activeTab === 'tech' ? 'github →' : 'itch →'}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}