
import user from '../icons/user.png';
import passward from '../icons/passward.png';
import email from '../icons/email.png';
import "./Loginsignup.css";
const Signup = () => {
  return (
    <div className="Container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user} alt="" />
          <input type="text" placeholder='Name' />
        </div>
        <div className="input">
          <img src={email} alt=""  />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passward} alt=""  />
          <input type="password" placeholder='Password' />
        </div>
      </div>
      <div className='forget-passward'>Forget passward <span>Click Here</span></div>
      <div className='submit-container'>
        <div className='submit'>Signup</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  )
}
export default Signup