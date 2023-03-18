import { FormEvent, useState } from 'react'
import Password from '../components/Password'
import apiClient from '../axios'
import { Link } from '@tanstack/react-router'
import FormInput from '../components/FormInput'
import CustomAlert from '../components/CustomAlert'
import { router } from '../router'
import Progress from '../components/Progress'


export default function Login() {
    const [state, setState] = useState({
        isAnimating: false,
        key: 0
    })

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        startLoader()

        const form = new FormData(e.target as HTMLFormElement)

        const data = {
            username: form.get('Username'),
            password: form.get('Password')
        }

        apiClient.post('/open/auth/login', data)
            .then((res) => {
                localStorage.setItem('token', res.data.info.token)
                localStorage.setItem('user', JSON.stringify(res.data.info.user))

                setTimeout(() => {
                    stopLoader()
                    router.navigate({
                        from: '/login',
                        to: '/'
                    })
                }, 3000)
            })
            .catch((err) => {
                stopLoader()
                if (err.response) {
                    setErrMsg(err.response.data.message)
                    setShowAlert(true)
                }
            })
    }

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

    const [showAlert, setShowAlert] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    return (
        <div className="start">
            <Progress isAnimating={state.isAnimating} key={state.key} />
            <div className="wrapper">
                <div id="login">
                    <div className="container">
                        <div className="page-content text-white">
                            <div className="loginPG">
                                <div className="logo text-center pt-20"> <img src="/images/tutu-sm-white.svg" width="200" />  </div>
                                <br />
                                <h4 className="text-center"> <i className="fa fa-wallet"></i> wallet </h4>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <CustomAlert variant={"danger"} show={showAlert} errMsg={errMsg} onDismiss={() => setShowAlert(false)}/>
                                    <FormInput label="Username" type="text" />
                                    <Password label="Password" />
                                    <div className="form-group mt-3 mb-3 text-center">
                                        <button type="submit" className="cusbtn2">Login &nbsp;&nbsp; <i className="fa fa-arrow-right"></i></button>
                                    </div>

                                </form>

                                <div className="form-group mt-3 mb-3 text-center lbtm">
                                    Don't have an account? <Link to="/signup">  Create Account </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}