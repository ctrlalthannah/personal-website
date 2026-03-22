import { motion } from "motion/react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Reusable StyledTypography Component
type StyledTypographyProps = {
  text: string;

  textColor?: string;

};

const StyledTypography = ({ text, textColor }: StyledTypographyProps) => {
  return (
    <Typography
    sx={{fontSize: "40px", fontFamily: "monospace", color: textColor|| "#f8edbe" }}
      variant="h1"
    >
      {text}
    </Typography>
  );
};

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ scale: 1.0 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="h-screen flex flex-col sm:justify-center md:justify-center xl:justify-center "
    >
      <Box className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Image Section */}
        <Box
          component="img"
          src="./hannah-img.jpg"
          className="grayscale w-100 h-100 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover rounded-full"
        />
        {/* Text Section */}
        <Box className="flex flex-col text-center">
          <StyledTypography
            text="Hej! I'm Hannah."
            
      
        
          />
          <StyledTypography
            text="A software developer."
            textColor="#a50367"
            
   
          />
          <StyledTypography
            text="Welcome to my portfolio!"
       
          />
          <NavBar /> {/* Add the NavBar component here */}
          <div className="flex gap-4 justify-center mt-4" style={{ color: '#f8edbe' }}>
           <a
              href="https://www.linkedin.com/in/hannah-lindback/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
                        <a
              href="https://github.com/hannah-lindback"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <GitHubIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            </a>
          </div>
        </Box>
      </Box>
    </motion.div>
  );
}