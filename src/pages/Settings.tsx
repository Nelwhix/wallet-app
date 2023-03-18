import { ChangeEvent, useState } from "react"
import { Link } from "@tanstack/react-router"

// declare module 'react' {
//     interface ChangeEvent {
//         target: {
//             files: Array<File>
//         }
//     }
// }

export default function Settings() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    

    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    const [avatarStyle, setAvatarStyle] = useState({
        backgroundImage:  "url('https://lab.aibox.systems/tutu/v1/daemon/image/identicon/:ref')"
    })

    function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
        const fileURL = e.target.files[0]
        setAvatarStyle({
            backgroundImage: `url(${URL.createObjectURL(fileURL)})`
        })
    }

   

    return <div className="container">
            <h2 className="page-title text-dark pt-30"> Settings </h2>
            <div className="page-content">
                <div className="User">
                    <div className="user-p">
                        <div className="avatar-upload">
                            <div className="avatar-edit">
                                <input onChange={handleFileUpload} type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                <label htmlFor="imageUpload"><i className="fas fa-pencil-alt"></i> </label>
                            </div>
                            <div className="avatar-preview">
                                <div id="imagePreview" style={avatarStyle}>
                                </div>
                               
                            </div>
                            <p className="mt-2" style={{marginLeft: '20px'}}>@{user.username}</p>
                        </div>
                    </div>
                    

                    <div className="user-setting">
                        <div className="clearfix">
                            <ul>
                                <li>
                                    <a href="#"> <i className="far fa-user"></i> &nbsp;&nbsp; User settings </a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-wallet"></i>&nbsp;&nbsp; Wallet settings </a>
                                </li>
                                <li>
                                    <Link to="/login" onClick={logout}> <i className="fa fa-power-off"></i>&nbsp;&nbsp; Log out </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
}