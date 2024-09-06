import { useNavigate } from "react-router-dom";

const Providers = () => {
    const navigate = useNavigate();

    const goToSignUpPage = () => {
        // Redirect to the "/signUp" page
        navigate('/signUp');
    };

    return (
        <section className="p-10 pt-10 bg-gray-100 text-center">
            <h1 className="text-3xl font-bold mb-4">For Providers - AI note taking</h1>
            <p className="mb-6 text-gray-500">No need to install anything. MindMend runs on your browser and mobile.</p>
            <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col space-y-6 w-22 md:w-1/3">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/step1.png" alt="step1" className="w-22 h-12 object-cover mb-4 mx-auto " />
                        <h3 className="text-xl font-semibold mb-2">Step 1: Initiate any session</h3>
                        <p>Conduct sessions in-person, via any online calling platform, or within our app. Our adaptable smart features and integrations seamlessly integrate Wellzy into your current workflow.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/step2.png" alt="step2" className="w-22 h-12 object-cover mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 2: Choose your note template</h3>
                        <p>Select from various therapy note templates tailored for individuals or couples. Psychiatry note templates are also available.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/step3.png" alt="step3" className="w-22 h-12 object-cover mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 3: We generate your AI-assisted notes & insights</h3>
                        <p>Once the session is processed, you`apos;ll receive a draft to review and edit. Additionally, we provide extra data and insights through Session Analytics. Additional AI documentation options include Intake Notes and Treatment Plans.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/images/step4.png" alt="step4" className="w-22 h-12 object-cover mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Step 4: Transfer notes to your EHR</h3>
                        <p>After finalizing the note, simply copy and paste it into your EHR. With our browser extension, you can manage your EHR and copy notes within the same tab.</p>
                    </div>
                </div>
                <div className="w-22 md:w-2/3">
                    <img src="/images/provider.png" alt="Provider" className="w-100 h-22 object-cover mb-4" />
                </div>
            </div>
            <button onClick={goToSignUpPage} className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">Register for free Demo</button>
        </section>
    );
};

export default Providers;

