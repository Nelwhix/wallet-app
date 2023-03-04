import { Link } from "@tanstack/react-router"
import apiClient from '../axios'
import { FormEvent } from "react"
import Password from "../components/Password"
import FormInput from "../components/FormInput"

export default function Signup() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault()

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
                padlock: "000000",
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
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data.message)
                }
            })
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
                                    <FormInput label="First Name" type="text"/>
                                    <FormInput label="Last Name" type="text"/>
                                    <FormInput label="Username" type="text"/>
                                    <FormInput label="Email Address" type="email"/>
                                    <FormInput label="Mobile" type="tel"/>
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