const SignUp=()=>{
    return(
        <form>
          <input type="text" name="FirstName" id="fname" placeholder="First-Name"/>
          <input type="text" name="LastName" id="fname" placeholder="Last-Name"/>
          <input type="email" name="email" id="email" />
          <div className="passwords">
            <input type="password" name="password" id="password" placeholder="password" />
            <input type="password" name="confirm password" id="confirm-password" placeholder="confirmPassword" />
          </div>
          <p>I am a</p>
          <div className="chose">
            <button>Patient</button>
            <button>Provider</button>
          </div>
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms and conditions</p>
          <button>Register</button>
          <p>By signing up, you agree to the Terms of Service</p>
        </form>
    );
};
export default SignUp;