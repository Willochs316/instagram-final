import { useState, useEffect } from 'react';
// import axios from 'axios';
import SignupBtn from './SignupBtn';
import SignupText from './SignupText';
import './Signup.css';
import SignUpIcon from './SignUpIcon';
import Input from './Input';
import { FaChevronDown } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../redux/features/auth/authSlice';
import Spinner from '../Spinner/Spinner';

const Signup = ({ signinSlides }) => {
  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    mobileNumberOrEmail: '',
    fullName: '',
    username: '',
    password: '',
  });

  const { mobileNumberOrEmail, fullName, username, password } = signUpInfo;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [errors, setErrors] = useState({
    mobileNumberOrEmailError: '',
    mobileNumberOrEmailTouched: false,
    fullNameError: '',
    fullNameTouched: false,
    usernameError: '',
    usernameTouched: false,
    passwordError: '',
    passwordTouched: false,
  });

  const [signingUp, setSigningUp] = useState(false);

  const userSignupImages = (userId) => {
    const existingLoginImages = signinSlides.filter(
      (signinSlide) => signinSlide.id === userId
    );
    return existingLoginImages;
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setSignUpInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      /\S+@\S+\.\S+/.test(signUpInfo.mobileNumberOrEmail) ||
      /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(
        signUpInfo.mobileNumberOrEmail
      )
    ) {
      setErrors((prevState) => ({
        ...prevState,
        mobileNumberOrEmailError: '',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        mobileNumberOrEmailError: 'Please enter a valid email or phone number',
      }));
    }

    if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(signUpInfo.fullName)) {
      setErrors((prevState) => ({
        ...prevState,
        fullNameError: '',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        fullNameError: 'Please enter your first & lastname',
      }));
    }

    if (signUpInfo.username.match(/^[a-zA-Z0-9]+$/)) {
      setErrors((prevState) => ({
        ...prevState,
        usernameError: '',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        usernameError: 'Please enter an alphanumeric username',
      }));
    }

    if (signUpInfo.password.length > 6) {
      setErrors((prevState) => ({
        ...prevState,
        passwordError: '',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        passwordError: 'Password must be more than 6 characters',
      }));
    }
  };

  const handleTouched = (event) => {
    const { name } = event.target;

    if (name === 'mobileNumberOrEmail') {
      setErrors((prevState) => ({
        ...prevState,
        mobileNumberOrEmailTouched: true,
      }));
    }

    if (name === 'fullName') {
      setErrors((prevState) => ({
        ...prevState,
        fullNameTouched: true,
      }));
    }

    if (name === 'username') {
      setErrors((prevState) => ({
        ...prevState,
        usernameTouched: true,
      }));
    }

    if (name === 'password') {
      setErrors((prevState) => ({
        ...prevState,
        passwordTouched: true,
      }));
    }
  };

  const handleSubmit = (event) => {
console.log(handleSubmit, 'prevent default')

    event.preventDefault();

    if (
      errors.mobileNumberOrEmailError ||
      errors.fullNameError ||
      errors.usernameError ||
      errors.passwordError
    ) {
      return toast.error('Invalid credentials');
    } else {
      const userData = {
        mobileNumberOrEmail,
        fullName,
        username,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSigningUp(true);

  //   if (
  //     errors.mobileNumberOrEmailError ||
  //     errors.fullNameError ||
  //     errors.usernameError ||
  //     errors.passwordError
  //   ) {
  //     setSigningUp(false);
  //     return;
  //   }

  //   axios
  //     .post('http://localhost:5000/users', signUpInfo)
  //     .then((response) => {
  //       console.log(response, 'RO: ');
  //       setSigningUp(false);

  //       // toast.success('signup successfull');
  //       //...use the response
  //       // later save response to redux
  //     })
  //     .catch((error) => {
  //       setSigningUp(false);
  //       console.log(error, 'error message');
  //     });

  //   setSigningUp(false);

  //   const submitForm = '';
  // };

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
                <div>
                  <div className='input-field'>
                    <Input
                      type='text'
                      className='sm-input'
                      name='mobileNumberOrEmail'
                      onChange={handleChange}
                      onBlur={validateForm}
                      value={signUpInfo.mobileNumberOrEmail}
                      onFocus={handleTouched}
                      placeholder='Mobile number or email address'
                      required
                    />
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      textAlign: 'center',
                      color: 'red',
                    }}
                  >
                    {errors.mobileNumberOrEmailError &&
                    errors.mobileNumberOrEmailTouched
                      ? errors.mobileNumberOrEmailError
                      : ''}
                  </div>
                </div>

                <div className='input-field'>
                  <Input
                    type='text'
                    className='sm-input'
                    name='fullName'
                    onChange={handleChange}
                    value={signUpInfo.fullName}
                    onBlur={validateForm}
                    onFocus={handleTouched}
                    placeholder='Fullname'
                    required
                  />
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'red',
                  }}
                >
                  {errors.fullNameError && errors.fullNameTouched
                    ? errors.fullNameError
                    : ''}
                </div>

                <div className='input-field'>
                  <Input
                    type='text'
                    className='sm-input'
                    name='username'
                    onChange={handleChange}
                    value={signUpInfo.username}
                    onBlur={validateForm}
                    onFocus={handleTouched}
                    placeholder='Username'
                    required
                  />
                </div>

                <div
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'red',
                  }}
                >
                  {errors.usernameError && errors.usernameTouched
                    ? errors.usernameError
                    : ''}
                </div>

                <div className='input-field'>
                  <Input
                    type='password'
                    className='sm-input'
                    name='password'
                    onChange={handleChange}
                    onBlur={validateForm}
                    onFocus={handleTouched}
                    value={signUpInfo.password}
                    placeholder='Password'
                    required
                  />
                </div>

                <div
                  style={{
                    fontSize: '12px',
                    textAlign: 'center',
                    color: 'red',
                  }}
                >
                  {errors.passwordError && errors.passwordTouched
                    ? errors.passwordError
                    : ''}
                </div>

                <div className='signbtn-container'>
                  <SignupBtn
                    className='signup-btn2'
                    title='Sign Up'
                    type='submit'
                    onSubmit={handleSubmit}
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

      <div className='footer-container'>
        <div className='footer-items'>
          <SignupText className='fm-item' title='Meta' />
          <SignupText className='fm-item' title='About' />
          <SignupText className='fm-item' title='Blog' />
          <SignupText className='fm-item' title='Jobs' />
          <SignupText className='fm-item' title='Help' />
          <SignupText className='fm-item' title='Api' />
          <SignupText className='fm-item' title='Privacy' />
          <SignupText className='fm-item' title='Terms' />
          <SignupText className='fm-item' title='Top accounts' />
          <SignupText className='fm-item' title='Hashtags' />
          <SignupText className='fm-item' title='Locations' />
          <SignupText className='fm-item' title='Instagram Lite' />
        </div>

        {/* <div className='footer-items2'>
          <SignupText className='fm-item' title='Dance' />
          <SignupText className='fm-item' title='Food & drink' />
          <SignupText className='fm-item' title='Home & garden' />
          <SignupText className='fm-item' title='Music' />
          <SignupText className='fm-item' title='Visual arts' />
        </div> */}

        <div className='footer-items3'>
          <div className='select-container'>
            <SignupText className='select-text' title='English (UK)' />

            <div className='select-language'>
              <Input type='text' className='language-input' />
              <SignUpIcon icons={FaChevronDown} className='fa-chevron-down' />
              {false && (
                <div
                  className='select-options'
                  placeholder='select a language...'
                >
                  <option value='AF'>Afrikaans</option>
                  <option value='SQ'>Albanian</option>
                  <option value='AR'>Arabic</option>
                  <option value='HY'>Armenian</option>
                  <option value='EU'>Basque</option>
                  <option value='BN'>Bengali</option>
                  <option value='BG'>Bulgarian</option>
                  <option value='CA'>Catalan</option>
                  <option value='KM'>Cambodian</option>
                  <option value='ZH'>Chinese (Mandarin)</option>
                  <option value='HR'>Croatian</option>
                  <option value='CS'>Czech</option>
                  <option value='DA'>Danish</option>
                  <option value='NL'>Dutch</option>
                  <option value='EN'>English</option>
                  <option value='ET'>Estonian</option>
                  <option value='FJ'>Fiji</option>
                  <option value='FI'>Finnish</option>
                  <option value='FR'>French</option>
                  <option value='KA'>Georgian</option>
                  <option value='DE'>German</option>
                  <option value='EL'>Greek</option>
                  <option value='GU'>Gujarati</option>
                  <option value='HE'>Hebrew</option>
                  <option value='HI'>Hindi</option>
                  <option value='HU'>Hungarian</option>
                  <option value='IS'>Icelandic</option>
                  <option value='ID'>Indonesian</option>
                  <option value='GA'>Irish</option>
                  <option value='IT'>Italian</option>
                  <option value='JA'>Japanese</option>
                  <option value='JW'>Javanese</option>
                  <option value='KO'>Korean</option>
                  <option value='LA'>Latin</option>
                  <option value='LV'>Latvian</option>
                  <option value='LT'>Lithuanian</option>
                  <option value='MK'>Macedonian</option>
                  <option value='MS'>Malay</option>
                  <option value='ML'>Malayalam</option>
                  <option value='MT'>Maltese</option>
                  <option value='MI'>Maori</option>
                  <option value='MR'>Marathi</option>
                  <option value='MN'>Mongolian</option>
                  <option value='NE'>Nepali</option>
                  <option value='NO'>Norwegian</option>
                  <option value='FA'>Persian</option>
                  <option value='PL'>Polish</option>
                  <option value='PT'>Portuguese</option>
                  <option value='PA'>Punjabi</option>
                  <option value='QU'>Quechua</option>
                  <option value='RO'>Romanian</option>
                  <option value='RU'>Russian</option>
                  <option value='SM'>Samoan</option>
                  <option value='SR'>Serbian</option>
                  <option value='SK'>Slovak</option>
                  <option value='SL'>Slovenian</option>
                  <option value='ES'>Spanish</option>
                  <option value='SW'>Swahili</option>
                  <option value='SV'>Swedish </option>
                  <option value='TA'>Tamil</option>
                  <option value='TT'>Tatar</option>
                  <option value='TE'>Telugu</option>
                  <option value='TH'>Thai</option>
                  <option value='BO'>Tibetan</option>
                  <option value='TO'>Tonga</option>
                  <option value='TR'>Turkish</option>
                  <option value='UK'>Ukrainian</option>
                  <option value='UR'>Urdu</option>
                  <option value='UZ'>Uzbek</option>
                  <option value='VI'>Vietnamese</option>
                  <option value='CY'>Welsh</option>
                  <option value='XH'>Xhosa</option>
                </div>
              )}
            </div>
          </div>

          <div className='trademark'>
            <SignupText
              className='fm-item9'
              title='© 2022 Instagram from Meta'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
