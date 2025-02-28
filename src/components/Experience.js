export default function Experience() {
	const experiences = [
	  {
		title: "software engineer intern",
		company: "juniper networks",
		location: "sunnyvale, california",
		period: "june — august 2024",
		summary: "developed go api services and optimized arangodb queries for network topologies, reducing graph path calculation times by 90% and under 500ms."
	  },
	  {
		title: "software engineer II (full-stack)",
		company: "startup",
		location: "bangalore, india",
		period: "august 2021 — june 2023",
		summary: "built full-stack applications with angular and node.js, optimized server performance by 68%, and mentored junior developers while reducing infrastructure costs."
	  }
	];
  
	return (
	  <section className="mb-24">
		<h2 className="text-3xl text-maroon-200 mb-8 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-maroon-500">
		  experience
		</h2>
		
		<div className="space-y-14">
		  {experiences.map((exp, index) => (
			<div key={index} className="relative">
			  <div className="mb-3">
				<h3 className="text-xl text-maroon-200 mb-1 normal-case">{exp.title}</h3>
				
				<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
				  <span className="text-maroon-300">{exp.company}</span>
				  <span className="text-maroon-400 text-sm">{exp.period}</span>
				</div>
				
				<span className="text-maroon-400 text-sm mb-3">{exp.location}</span>
			  </div>
			  
			  <p className="text-maroon-300 mt-4">
				{exp.summary}
			  </p>
			  
			  {index < experiences.length - 1 && (
				<div className="absolute -bottom-7 left-0 right-0 border-b border-maroon-800/70"></div>
			  )}
			</div>
		  ))}
		</div>
	  </section>
	);
  }