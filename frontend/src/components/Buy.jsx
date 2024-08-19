import { useNavigate } from 'react-router-dom';
const Buy=()=>{
    const navigate = useNavigate();

    const goToSignUpPage = () => {
      // Redirect to the "/about" page
      navigate('/signUp');
    };
    return(
        <section id="buy">
            <h2>Ready to get started?</h2>
            <h1>Create an account now</h1>
            <button onClick={goToSignUpPage}>Create an account</button>
        </section>
    );
};
export default Buy;