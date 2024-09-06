import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const goToChatPage = () => {
        navigate('/chat');
    }

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="hero-text text-center md:text-left md:w-1/2 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">Your Partner in Health and Wellbeing</h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-6">Empowering patients with AI therapy and doctor search. Simplifying workflow and notes for healthcare professionals.</p>
                    <button 
                        onClick={goToChatPage} 
                        className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300"
                    >
                        Chat
                    </button>
                </div>
                <div className="hero-image md:w-1/2 px-4 mt-8 md:mt-0">
                    <img src="/images/therapy.png" alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
