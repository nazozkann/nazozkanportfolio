export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="sticky top-0 z-50 w-full h-[4.5rem] flex flex-row justify-between items-center bg-[#f9f8f8] text-[#373636] pt-8 pb-4 pr-6 pl-6 border-b border-[#373636] border-opacity-60 font-space">
      <div className="left-nav text-[1.25rem]">
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("section-home")}
        >
          Naz Ozkan
        </button>
      </div>
      <div className="rigth-nav hidden md:flex flex-row items-center gap-4 text-[1rem]">
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("section-about")}
        >
          About
        </button>
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("section-projects")}
        >
          Projects
        </button>
        <button
          className="cursor-pointer"
          onClick={() => scrollToSection("section-experience")}
        >
          Experience
        </button>
      </div>
    </nav>
  );
}
