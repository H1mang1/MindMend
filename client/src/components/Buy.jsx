import { useNavigate } from 'react-router-dom';

const Buy = () => {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate('/signUp');
  };

  return (
    <section id="buy" className="py-16 bg-gray-50 flex flex-col items-center">
      <span className="text-lg text-purple-700 font-bold mb-2">Ready to get started?</span>
      <h1 className="text-3xl font-bold mb-6">Create an account now</h1>
      <button
        onClick={goToSignUpPage}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition duration-300"
      >
        Create an account
      </button>
    </section>
  );
};

export default Buy;

