export default function Footer() {
  return (
    <footer className="bg-black text-center text-sm text-white  py-6 mt-10 font-medium">
      <div className="flex items-center gap-2">
        <img src="/dwesta.png" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">Dwesta </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-4 font-medium">
        <a href="#">PAGES</a>
        <a href="#">EXPERTISES</a>
        <a href="#">SERVICES</a>
      </div>
      <p>Copyright © 2025 All rights reserved - Skill Flex</p>
    </footer>
  );
}
