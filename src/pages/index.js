import Head from 'next/head';
import Header from '../components/Header';
import Summary from '../components/Summary';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>ani | portfolio</title>
        <meta name="description" content="ani's portfolio - software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto px-4 pb-16">
          <Header />
          <Summary />
          <Projects />
          <Experience />
          <Skills />
          
          <footer className="text-center text-maroon-400 text-sm pt-6">
            <p>© {new Date().getFullYear()} ani</p>
          </footer>
        </div>
      </div>
    </>
  );
}