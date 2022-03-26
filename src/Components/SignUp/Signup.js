import Input from './Input';
import SignupBtn from './SignupBtn';
import SignupText from './SignupText';
import './Signup.css';

const Signup = ({ signinSlides }) => {
  const userSignupImages = (userId) => {
    const existingLoginImages = signinSlides.filter(
      (signinSlide) => signinSlide.id === userId
    );
    return existingLoginImages;
  };

  return (
    <div className='signup-container'>
      <div className='signForm-container'>
        <div>
          <div className='signup-form'>
            <span className='signup-header'></span>

            <SignupText
              className='signup-h2'
              content='Sign up to see photos and videos from your friends.'
            />

            <div className='signupBtn-container'>
              <div className='signup-icon'>
                {userSignupImages(7).map((loginSlide) => (
                  <img
                    src={loginSlide.image}
                    alt=''
                    width='16px'
                    height='16px'
                  />
                ))}
              </div>
              <SignupBtn
                className='signup-btn'
                type='submit'
                title='Log in with Facebook'
              />
            </div>
            <div className='signup-separator'>
              <div className='line'></div>
              <SignupText className='sign-or' title='OR' />
              <div className='line'></div>
            </div>

            <div className='signup-input'>
              <form className='signupForm' method='POST'>
                <div className='input-field'>
                  <Input
                    type='text'
                    className='sm-input'
                    name='text'
                    placeholder='Mobile number or email address'
                    required
                  />
                </div>

                <div className='input-field'>
                  <Input
                    type='name'
                    className='sm-input'
                    name='name'
                    placeholder='Fullname'
                    required
                  />
                </div>

                <div className='input-field'>
                  <Input
                    type='name'
                    className='sm-input'
                    name='name'
                    placeholder='Username'
                    required
                  />
                </div>

                <div className='input-field'>
                  <Input
                    type='password'
                    className='sm-input'
                    name='password'
                    placeholder='Password'
                    required
                  />
                </div>

                <div className='signbtn-container'>
                  <SignupBtn
                    className='signup-btn2'
                    type='submit'
                    title='Sign Up'
                    disabled
                  />
                </div>

                <div className='signin-alt'>
                  <div className='signin-icon'>
                    <SignupText
                      className='policy-text'
                      title='By signing up, you agree to our Terms, Data Policy and Cookie Policy'
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='account-container'>
            <div className='account'>
              <p className='account-text'>
                Have an account?<span className='sign-up'>Log in</span>
              </p>
            </div>
          </div>

          <div className='app-container'>
            <div className='getApp'>
              <SignupText className='app-text' title='Get the app.' />
            </div>

            <div className='appStore'>
              {userSignupImages(2).map((loginSlide) => (
                <img
                  className='app-image'
                  src={loginSlide.image}
                  alt=''
                  height='40'
                />
              ))}
              {userSignupImages(3).map((loginSlide) => (
                <img
                  className='app-image'
                  src={loginSlide.image}
                  alt=''
                  height='40'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
