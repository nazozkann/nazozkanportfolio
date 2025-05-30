export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-[4.5rem] flex flex-row justify-between items-center bg-[#f9f8f8] text-[#373636] pt-8 pb-4 pr-6 pl-6 border-b border-[#373636] border-opacity-60 font-space">
      <div className="left-nav text-[1.25rem]">
        <p>Naz Ozkan</p>
      </div>
      <div className="rigth-nav flex flex-row items-center gap-4 text-[1rem]">
        <p>About</p>
        <p>Projects</p>
        <p>Experience</p>
      </div>
    </nav>
  );
}
