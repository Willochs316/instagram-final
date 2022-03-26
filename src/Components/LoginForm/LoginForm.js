import Input from './Input';
import Label from './Label';
import LoginButton from './LoginButton';
import LoginTxt from './LoginTxt';
import './LoginForm.css';
import LoginIcons from './LoginIcons';
import { FaChevronDown } from 'react-icons/fa';

const LoginForm = ({ loginSlides }) => {
  const userLoginImages = (userId) => {
    const existingLoginImages = loginSlides.filter(
      (loginSlide) => loginSlide.id === userId
    );
    return existingLoginImages;
  };

  return (
    <div className='login-container'>
      <div className='loginForm-container'>
        <div className='form-image'>
          {userLoginImages(5).map((loginSlide) => (
            <img src={loginSlide.image} alt='' width='250px' />
          ))}
        </div>
        <div>
          <div className='login-form'>
            <span className='header'></span>

            <div className='login-input'>
              <form className='loginForm' method='POST'>
                <div className='field'>
                  <Label
                    className='label'
                    title='Phone number, username, or email'
                  />
                  <Input
                    type='text'
                    className='cm-input'
                    name='text'
                    placeholder='Phone number, username or email address'
                    required
                  />
                  <LoginButton className='field-btn' />
                </div>

                <div className='field'>
                  <label className='label'>Password</label>
                  <Input
                    type='password'
                    className='cm-input'
                    name='password'
                    placeholder='Password'
                    required
                  />
                  <LoginButton className='field-btn2' title='show' />
                </div>

                <div className='btn-container'>
                  <LoginButton
                    className='login-btn'
                    type='submit'
                    title='Log In'
                    disabled
                  />

                  {/* <button type='submit' className='login-btn' disabled>
                    Log In
                  </button> */}
                </div>

                <div className='separator'>
                  <div className='line'></div>
                  <LoginTxt className='or' title='OR' />
                  <div className='line'></div>
                </div>

                <div className='login-alt'>
                  <div className='login-icon'>
                    {userLoginImages(1).map((loginSlide) => (
                      <img
                        className='facebook-icon'
                        src={loginSlide.image}
                        alt=''
                        width='20'
                      />
                    ))}
                    <LoginTxt
                      className='icon-text'
                      text='Log in with Facebook'
                    />
                  </div>
                </div>
              </form>

              <div className='forgot-password-container'>
                <a className='forgot-password' href='wink'>
                  Forgotten your password?
                </a>
              </div>
            </div>
          </div>

          <div className='account-container'>
            <div className='account'>
              <p className='account-text'>
                Don't have an account?<span className='sign-up'>Sign up</span>
              </p>
            </div>
          </div>

          <div className='app-container'>
            <div className='getApp'>
              <LoginTxt className='app-text' title='Get the app.' />
            </div>

            <div className='appStore'>
              {userLoginImages(2).map((loginSlide) => (
                <img
                  className='app-image'
                  src={loginSlide.image}
                  alt=''
                  height='40'
                />
              ))}
              {userLoginImages(3).map((loginSlide) => (
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
          <LoginTxt className='fm-item' title='Meta' />
          <LoginTxt className='fm-item' title='About' />
          <LoginTxt className='fm-item' title='Blog' />
          <LoginTxt className='fm-item' title='Jobs' />
          <LoginTxt className='fm-item' title='Help' />
          <LoginTxt className='fm-item' title='Api' />
          <LoginTxt className='fm-item' title='Privacy' />
          <LoginTxt className='fm-item' title='Terms' />
          <LoginTxt className='fm-item' title='Top accounts' />
          <LoginTxt className='fm-item' title='Hashtags' />
          <LoginTxt className='fm-item' title='Locations' />
          <LoginTxt className='fm-item' title='Instagram Lite' />
        </div>

        <div className='footer-items2'>
          <LoginTxt className='fm-item' title='Dance' />
          <LoginTxt className='fm-item' title='Food & drink' />
          <LoginTxt className='fm-item' title='Home & garden' />
          <LoginTxt className='fm-item' title='Music' />
          <LoginTxt className='fm-item' title='Visual arts' />
        </div>

        <div className='footer-items3'>
          <div className='select-container'>
            <LoginTxt className='select-text' title='English (UK)' />

            <div className='select-language'>
              <Input type='text' className='language-input' />
              <LoginIcons icons={FaChevronDown} className='fa-chevron-down' />
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
            <LoginTxt className='fm-item9' title='© 2022 Instagram from Meta' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
