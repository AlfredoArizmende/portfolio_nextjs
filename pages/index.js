import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{`<Alfredo Arizmende />`}</title>
        <meta
          name="description"
          content="Soy Alfredo, desarrollador web apasionado por crear sitios web increíbles, funcionales y centrados en las necesidades del usuario."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`<Alfredo Arizmende />`} />
        <meta
          property="og:description"
          content="Soy Alfredo, desarrollador web apasionado por crear sitios web increíbles, funcionales y centrados en las necesidades del usuario."
        />
        <meta
          property="og:image"
          content="https://alfredo-arizmende.vercel.app/_next/image?url=%2FAlfredoAbout.webp&w=1200&q=75"
        />
        <meta property="og:image:alt" content="Alfredo Arizmende" />
        <meta property="og:image:type" content="image/png" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-16 sm:bottom-2 w-full">
          <div className="flex items-center justify-end">
            <Image
              src="/AlfredoHome.WEBP"
              width={500}
              height={500}
              priority
              alt="Alfredo Arizmende"
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
