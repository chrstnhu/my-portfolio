import { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState(
    window.location.hash.replace("#", "") || "home",
  );

  useEffect(() => {
    function handleHashChange() {
      const page = window.location.hash.replace("#", "") || "home";

      setCurrentPage(page);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function renderPage() {
    switch (currentPage) {
      case "home":
        return <Home />;

      case "about":
        return <About />;

      case "skills":
        return <Skills />;

      case "projects":
        return <Projects />;

      case "contact":
        return <Contact />;

      default:
        return <Home />;
    }
  }

  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-white
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <Header />

      <main className="flex-1">{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
