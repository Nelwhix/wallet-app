import { FormEvent, useState } from 'react'
import Password from '../components/Password'
import { router } from '../router'
import apiClient from '../axios'


export default function Login() {
    if (localStorage.getItem('token')) {
        router.navigate({
            from: '/login',
            to: '/'
        })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const form = new FormData(e.target as HTMLFormElement)

        const data = {
            username: form.get('username'),
            password: form.get('password')
        }

        apiClient.post('/open/auth/login', data)
            .then((res) => {
                console.log(res)
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
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label"> Username</label>
                                    <input type="text" className="cus-input" id="username" name="username" />
                                </div>
                                <Password />
                                <div className="form-group mt-3 mb-3 text-end lbtm">
                                    <a href="#">Login as guest</a>
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