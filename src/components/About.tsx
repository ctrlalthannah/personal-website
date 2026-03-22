 import { aboutText } from '../paragraphs/About';
 import { ImageList } from '@mui/material';

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-center max-w-2xl">
                {aboutText.map((paragraph, index) => (
                    <span key={index} className="block mb-4">
                        {paragraph}
                    </span>
                ))}
            </p>
        </div>
    );
}
