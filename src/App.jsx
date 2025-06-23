import "./styles/index.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import ResumeProvider from "./context/ResumeProvider";
import Experiences from "./components/Experiences";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        <ResumeProvider>
          <Header />
          <Summary />
          <Skills />
          <Experiences level="professional" />
          <Experiences level="personal" />
          <Education />
        </ResumeProvider>
      </div>
    </div>
  );
};

export default App;
