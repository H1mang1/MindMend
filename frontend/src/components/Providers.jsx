import { useNavigate } from "react-router-dom";
const Providers=()=>{
    const navigate = useNavigate();

    const goToSignUpPage= () => {
      // Redirect to the "/signUp" page
      navigate('/signUp');
    };
    return(
        <section>
             <h1>For Providers - AI note taking</h1>
             <p>No need to install anything. Wellzy runs on your browser and mobile.</p>
             <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h3>Step 1: Initiate any session</h3>
                        <p>Conduct sessions in-person, via any online calling platform, or within our app. Our adaptable smart features and integrations seamlessly integrate Wellzy into your current workflow.</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Step 2: Choose your note template</h3>
                        <p>Select from various therapy note templates tailored for individuals or couples. Psychiatry note templates are also available.</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Step 3: We generate your AI-assisted notes & insights</h3>
                        <p>Once the session is processed, you `&apos;ll receive a draft to review and edit. Additionally, we provide extra data and insights through Session Analytics. Additional AI documentation options include Intake Notes and Treatment Plans.</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Step 4: Transfer notes to your EHR</h3>
                        <p>After finalizing the note, simply copy and paste it into your EHR. With our browser extension, you can manage your EHR and copy notes within the same tab.</p>
                    </div>      
                </div>
                <img src="" alt="" />
             </div>
             <button onClick={goToSignUpPage}>Register for free Demo</button>
        </section>
    );

};
export default Providers;