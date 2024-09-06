const Testimonials = () => {
    return (
        <section id="testimonials" className="bg-purple-500 py-12">
            <div className="max-w-4xl mx-auto text-center px-4 flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="text-white md:w-1/2">
                    <p className="text-lg italic mb-4">
                        “Progress notes can be one of the most challenging tasks for a therapist. However, Wellzy has transformed it into a task that therapists can look forward to completing.”
                    </p>
                    <hr />
                    <p className="font-semibold mt-4">Elmhurst Psychology Clinic</p>
                    <p className="mb-6">Using Wellzy since 2024</p>
                </div>
                <div className="md:w-1/2">
                    <img src="/images/testimonials.png" alt="testimonials" className="border-2 border-gray-300 rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
