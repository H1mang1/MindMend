const Signin=()=>{
    return(
        <form>
            <h1>Login</h1>
            <p>Don`&apos t have an account yet?</p>
            <a href="">Create it here</a>
            <input type="text" name="email-or-username" id="fname" placeholder="Email or Username"/>
            <input type="password" name="password" id="password" placeholder="Password" />
            <a href="">Forgot your password?</a>
            <button>Login</button>
        </form>
    );
};
export default Signin;