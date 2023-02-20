import { useState } from "react"

export default function Password() {
    const [visible, setVisible ] = useState(false)

    function togglePassword() {
        setVisible(!visible)
    }

    return <div className="mb-3 password-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input type={visible ? 'text' : 'password'} className="cus-input" id="password" name="password" />
        <span onClick={togglePassword} className='eye'>
            <i className={visible ? 'fa fa-eye' : 'fa fa-eye-slash'}></i>
           </span>
    </div>
}