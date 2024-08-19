
const Footer=()=>{
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scrolling effect
        });
    };
    return(
        <footer>
            <img src="" alt="" />
            <p>Wellzy is an innovative online platform offering a comprehensive suite of mental health tools. It features an AI therapist chatbot for immediate support, a robust search tool to help users find professional therapists nearby, and an AI-driven therapy note-taking tool designed for therapists.</p>
            <p>Company</p>
            <ul>
                <li onClick={() => scrollToTop()}><a href="#">About</a></li>
                <li><a href="#offers">Services</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
            <p>Product</p>
            <ul>
                <li><a href="#buy">Pricing</a></li>
                <li><a href="#offers">Features</a></li>
                <li><a href="#testimonials">Customers</a></li>
            </ul>
            <p>Channels</p>
            <ul>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Support</a></li>
            </ul>
            <p>© 2024 Wellzy Corp. All Rights Reserved</p>
            <ul>
                <li><img src="" alt="" /><a href=""></a></li>
                <li><img src="" alt="" /><a href=""></a></li>
                <li><img src="" alt="" /><a href=""></a></li>
                <li><img src="" alt="" /><a href=""></a></li>
            </ul>
        </footer>
        

        
    );
};
export default Footer;