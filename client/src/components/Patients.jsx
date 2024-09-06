const Patients = () => {
        return (
        <section className="patient-section p-6 bg-gray-100">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/images/patient.png" alt="patient" className="w-full md:w-1/2" />
                    <div className="side-text md:ml-6 mt-6 md:mt-0">
                        <img src="/images/tickmark.png" alt="" className="w-16 h-16 mb-4 rounded-xl" />
                        <h1 className="text-4xl font-bold mb-4">For Patients</h1>
                        <p className="text-lg mb-6">Use our AI therapist chat app or find a professional nearby</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid-item p-4 bg-white shadow-md rounded-lg">
                                <img src="/images/encryption.png" alt="encryption" className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-semibold mb-2">Encrypted</h3>
                                <p>All of your data is encrypted to HIPAA standards.</p>
                            </div>
                            <div className="grid-item p-4 bg-white shadow-md rounded-lg">
                                <img src="/images/professionalTherapist.png" alt="therapy" className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-semibold mb-2">Find Therapist</h3>
                                <p>Find a professional therapist nearby.</p>
                            </div>
                            <div className="grid-item p-4 bg-white shadow-md rounded-lg">
                                <img src="/images/personalizedCare.png" alt="personalized care" className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
                                <p>Therapy tailored to your unique needs.</p>
                            </div>
                            <div className="grid-item p-4 bg-white shadow-md rounded-lg">
                                <img src="/images/24by7chat.png" alt="24by7 chat" className="w-12 h-12 mb-2" />
                                <h3 className="text-xl font-semibold mb-2">24/7 Chat</h3>
                                <p>Chat with the AI counselor at anytime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Patients;
