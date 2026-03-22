import { motion } from "motion/react";

const HeaderChip = ({ label }: { label: string }) => {
  const handleScroll = () => {
    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: "1.2" }}
      whileTap={{ scale: "0.8" }}
      animate={{ opacity: 1, scale: 1 }}
      className="display-flex flex-col"
    >
      <div
        className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl justify-center items-center p-2"
        title={label}
        onClick={handleScroll} // Trigger smooth scrolling
        style={{
          color: "#f8edbe",
          backgroundColor: "#5e5959",
          fontFamily: "monospace",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          textAlign: "center",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};

export default function NavBar() {
  return (
    <nav className=" hidden flex gap-4 mt-6 width-full justify-center items-center sm:flex">
      <HeaderChip label="<About/>" />
      <HeaderChip label="<Projects/>" />
      <HeaderChip label="<Contact/>" />
    </nav>
  );
}