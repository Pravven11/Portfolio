import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";


export const Home = () =>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background effects */}
        <Background />
        {/* Navbar */}
        <Navbar />
        {/* Mian content */}

        {/* Footer */}

    </div>
  
};