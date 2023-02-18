import { FormEvent, useState } from 'react'
import Eye from '../components/Eye'
import { router } from '../router'

export default function Login() {
    const [visible, setVisible] = useState(false)

    function toggleEye() {
        setVisible(!visible)
    }
    if (localStorage.getItem('token')) {
        router.navigate({
            from: '/login',
            to: '/'
        })
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        console.log("processing")
    }

    return (
        <div className="start">
            <div className="wrapper">
                <div id="login">
                    <div className="container">
                        <div className="page-content text-white">
                            <div className="loginPG">
                                <div className="logo text-center"> <img src="/images/tutu-sm-white.svg" width="200" />  </div>
                                <br />
                                <h4 className="text-center"> <i className="fa fa-wallet"></i> wallet </h4>
                                <br />
                                <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label"> Username</label>
                                    <input type="text" className=" cus-input" id="" placeholder="" />
                                </div>
                                <div className="mb-3 password-group">
                                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                                    <input type="password" className="cus-input" id="" placeholder="" />
                                    <Eye onEyeClick={toggleEye} show={visible}/>                                                  
                                </div>
                                <div className="form-group mt-3 mb-3 text-end lbtm">
                                    <a href="#">   Forgot Password? </a>
                                </div>
                                <div className="form-group mt-3 mb-3 text-center">
                                    <button type="submit" className="cusbtn2">Login &nbsp;&nbsp; <i className="fa fa-arrow-right"></i></button>
                                </div>

                                </form>
                             
                                <div className="form-group mt-3 mb-3 text-center lbtm">
                                    Don't have an account? <a href="#">  Create Account </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}