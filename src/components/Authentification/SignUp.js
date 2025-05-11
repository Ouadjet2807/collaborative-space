import React, {useState, useRef, useEffect} from 'react'
import { TbEyeClosed } from "react-icons/tb";
import { TbEye } from "react-icons/tb";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";

export default function SignUp() {

  const [passwordInputsShow, setPasswordInputsShow] = useState({
    password: false,
    confirmPassword: false
  })

  const selectRef = useRef(null);
  const choicesInstance = useRef(null);

  console.log(passwordInputsShow);
  
  const teams = [
    {
        id: 1,
        name: 'Marketing',
        value: "marketing"
    }, 
    {
        id: 2,
        name: 'Communication',
        value: "communication"
    }, 
    {
        id: 3,
        name: 'Logistics',
        value: "logistics"
    }, 
    {
        id: 4,
        name: 'Operations',
        value: "operations"
    }, 
    {
        id: 5,
        name: 'Design & Media',
        value: "design-&-media"
    }, 
    {
        id: 6,
        name: 'Technical',
        value: "technical"
    }, 
    {
        id: 7,
        name: 'Finance & sponsorship',
        value: "finance-&-sponsorship"
    }, 
    {
        id: 8,
        name: 'People Management',
        value: "people-management"
    }, 
  ]

  
  useEffect(() => {
    if (selectRef.current) {
      choicesInstance.current = new Choices(selectRef.current, {
        searchEnabled: false,
        itemSelectText: "",
        shouldSort: false,
      });
    }

    return () => {
      // Destroy instance on unmount
      if (choicesInstance.current) {
        choicesInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='signUp'>
        <form>
            <div className="inputBox">
                <input type="text" name="name" id="input_name" placeholder="Your name" />
            </div>
            <div className="inputBox">
                <input type="text" name="lastname" id="input_lastname" placeholder='Your lastname'/>
            </div>
            <div className="inputBox">
                <input type="email" name="email" id="input_email" placeholder='Your email address'/>
            </div>
            <select name="team" id="choices-select" className='choice' ref={selectRef}>
                <div className="options">
                    <option value="">Select your team</option>
                    {teams.map(team => {
                        return <option key={team.id} value={team.value}>{team.name}</option>
                    })}
                </div>
            </select>
            <div className="passwordInputBox">
                <input type={passwordInputsShow.password ? "text" : "password"} name="password" className='passwordInput' id="input_password" placeholder="Choose a password"/>
                <button type="button" className="hideShow" onClick={() => setPasswordInputsShow(prev => ({...prev, password: !prev.password}))}>
                    {passwordInputsShow.password ? 
                    <TbEyeClosed />
                    :
                    <TbEye />
                    }
                </button>
            </div>
            <div className="passwordInputBox">
                <input type={passwordInputsShow.confirmPassword ? "text" : "password"} name="confirm_password" className='passwordInput' id="input_confirm_password" placeholder="Confirm password"/>
                <button type="button" className="hideShow" onClick={() => setPasswordInputsShow(prev => ({...prev, confirmPassword: !prev.confirmPassword}))}>
                    {passwordInputsShow.confirmPassword ? 
                    <TbEyeClosed />
                    :
                    <TbEye />
                    }
                </button>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}
