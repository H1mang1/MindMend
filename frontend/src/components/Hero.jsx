import { useNavigate} from 'react-router-dom';
const Hero=()=>{
    const navigate = useNavigate();
    const goToChatPage = () => {
      navigate('/chat');
    }
    
    return(
        <section>
            <div className="hero-text">
                 <h1>Your Partner in Health and Wellbeing</h1>
                 <p>Empowering patients with AI therapy and doctor search. Simplifying workflow and notes for healthcare professionals.</p>
                 <button onClick={goToChatPage}>Chat</button>
            </div>
            <div className="hero-image">
                <img src="" alt="" />
            </div>
        </section>
    );

};
export default Hero;