import { Link } from "@tanstack/react-router"
import apiClient from '../axios'
import { FormEvent, useState } from "react"
import Password from "../components/Password"
import FormInput from "../components/FormInput"
import CustomAlert from "../components/CustomAlert"
import Progress from "../components/Progress"

export default function Signup() {
    const [state, setState] = useState({
        isAnimating: false,
        key: 0
    })

    function startLoader() {
        setState({
            isAnimating: true,
            key: 1
        })
    }

    function stopLoader() {
        setState({
            isAnimating: false,
            key: 0
        })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        startLoader()

        const form = new FormData(e.target as HTMLFormElement)

        const data = {
            ref: "?",
            username: form.get('Username'),
            fname: form.get('First Name'),
            lname: form.get('Last Name'),
            email: form.get('Email Address'),
            mobile: form.get('Mobile'),
            wallet: [
                {
                    name: "saving",
                    nick: "personal savings",
                    currency: 1
                }
            ],
            security: {
                padlock: form.get('padlock'),
                password: form.get('Password'),
            },
            mode: {
                strict: true,
                verification: false
            }
        }

        apiClient.post('/open/reg/start', data)
            .then((res) => {
                apiClient.post('/open/reg/conclude', {
                    olid: res.data.info.otp.olid,
                    ulid: res.data.info.user.ulid,
                    code: res.data.info.otp.code
                })
                .then(() => {
                    stopLoader()
                    setMsg("Account created successfully")
                    setShowAlert(true)
                    setVariant("success")
                })
                .catch((err) => {
                    stopLoader()
                    
                })
            })
            .catch((err) => {
                stopLoader()
                if (err.response) {
                    setMsg(err.response.data.message)
                    setShowAlert(true)
                }
            })
    }

    const [showAlert, setShowAlert] = useState(false)
    const [Msg, setMsg] = useState("")
    const [variant, setVariant] = useState("danger")

    return (
        <div className="start">
            <Progress isAnimating={state.isAnimating} key={state.key} />
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
                                    <div className="position-fixed top-0">
                                        <CustomAlert variant={variant} show={showAlert} errMsg={Msg} onDismiss={() => setShowAlert(false)}/>
                                    </div>
                                    <FormInput label="First Name" type="text"/>
                                    <FormInput label="Last Name" type="text"/>
                                    <FormInput label="Username" type="text"/>
                                    <FormInput label="Email Address" type="email"/>
                                    <FormInput label="Mobile" type="tel"/>

                                    <div className="mb-3 password-group">
                                        <label htmlFor="Padlock" className="form-label">
                                            Padlock&nbsp;
                                            <span
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="secret pin to approve transactions">
                                                <i className="fa-solid fa-circle-info"></i>
                                            </span>
                                        </label>
                                        <input type={'number'} className="cus-input" id='padlock'
                                               name='padlock'/>
                                    </div>

                                    <Password label="Password" />
                                    <Password label="Confirm Password" />
                                    
                                    <div className="form-group mt-3 mb-3 text-center">
                                        <button type="submit" className="cusbtn2">Sign up &nbsp;&nbsp; <i className="fa fa-arrow-right"></i></button>
                                    </div>

                                </form>

                                <div className="form-group mt-3 mb-3 text-center lbtm">
                                    Already have an account? <Link to="/login"> Sign in </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}