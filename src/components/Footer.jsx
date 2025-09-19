const Footer = () => {
  return (
    <footer className="bg-background py-4 md:px-12">
      <p className="font-body border-border text-offwhite flex justify-between border-t p-3 pb-0 text-sm md:border-t-2 md:p-8 md:pb-4 md:text-base">
        <span>© {new Date().getFullYear()} Treasure</span>
        <span>Designed & Built with ❤️</span>
      </p>
    </footer>
  );
};

export default Footer;
