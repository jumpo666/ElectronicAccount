import React from 'react';
import './LoginView.less';
import { LoginUtil } from '../../models/LoginUtil'
import { Global } from '../../models/Global';
import { UserData } from '../../models/Database';

export interface LoginViewProps {

}
export interface LoginViewState {
    userName: string,
    password: string
}

export default class LoginView extends React.Component<LoginViewProps, LoginViewState> {
    state = {
        userName: '',
        password: ''
    }

    render() {
        return (
            <div className="Login">
                <header>
                    <div className="background"></div>
                    <div className="container">
                        <img src={require("./images/Group@2x.png")} alt="" className="logo" />
                        <div className="text">电子账户</div>
                    </div>
                </header>
                <section>
                    <h2 className="title">欢迎</h2>
                    <div className="info">登录您的账户</div>
                    <div className="from">
                        <div className="user">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="36px" height="36px" viewBox="0 0 1024 1024" version="1.1"><path fill="#333333" d="M512.015052 90.794767c102.234426 0 210.655299 86.113538 210.655299 150.386359l0 150.446568c0 57.905747-24.083493 168.689813-88.672409 219.536087-16.467088 12.974982-25.016728 33.58142-22.54817 54.398589 2.468558 20.847273 15.609114 38.864736 34.665177 47.625107l261.998295 124.240717c2.032045 0.933235 25.107041 4.801646 25.107041 37.013318l0.030104 58.763722L90.794767 933.25039l0-61.09681c0-23.932971 17.972306-31.44401 25.137145-34.75549l264.391592-124.767544c18.950698-8.700162 32.031045-26.642364 34.574864-47.339115 2.558871-20.696751-5.79509-41.242981-22.0665-54.293224-62.54182-50.214082-91.682846-160.591739-91.682846-219.370513l0-150.446568C301.164075 178.293106 410.668705 90.794767 512.015052 90.794767M512.015052 30.586036c-132.940879 0-271.059709 110.94964-271.059709 210.59509l0 150.446568c0 65.732883 29.999 198.73397 114.200911 266.318271L90.74961 782.728561c0 0-60.163575 26.807938-60.163575 60.178627l0 90.343202c0 33.250272 26.943407 60.178627 60.163575 60.178627l842.500779 0c33.250272 0 60.178627-26.928355 60.178627-60.178627l0-90.343202c0-35.387682-60.178627-60.178627-60.178627-60.178627l-261.998295-124.240717c83.404145-65.642569 111.626988-194.59462 111.626988-266.86015l0-150.446568C782.879083 141.535675 644.940879 30.586036 512.015052 30.586036L512.015052 30.586036z" /></svg>
                            <input type="text" value={this.state.userName} onChange={(e) => { this.setState({ userName: e.currentTarget.value }) }} />
                        </div>
                        <div className="password">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="36px" height="36px" viewBox="0 0 1024 1024" version="1.1"><path fill="#333333" d="M780.8 354.58H665.6v-42.89c0-72.31-19.85-193.3-153.6-193.3-138.87 0-153.6 135.05-153.6 193.3v42.89H243.2v-42.89C243.2 122.25 348.79 0 512 0s268.8 122.25 268.8 311.69v42.89z m-192 314.84c0-43.52-34.58-78.65-76.8-78.65s-76.8 35.13-76.8 78.65c0 29.46 15.4 54.47 38.44 67.82v89.64c0 21.74 17.25 39.7 38.4 39.7s38.4-17.96 38.4-39.7v-89.64c23-13.35 38.36-38.36 38.36-67.82zM896 512v393.61c0 65.26-51.87 118.39-115.2 118.39H243.2c-63.291 0-115.2-53.13-115.2-118.39V512c0-65.22 51.87-118.39 115.2-118.39h537.6c63.33 0 115.2 53.17 115.2 118.39z" /></svg>
                            <input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.currentTarget.value }) }} />
                        </div>
                    </div>
                    <div className="or">or</div>
                    <img src={require("./images/Icon_TouchID@2x.png")} alt="" className="touchId" />
                    <button className="login-btn" onClick={() => { this.onClickLoginBtn() }}>
                        <div className="text">登录</div>
                    </button>
                    <a href="#" className="forget-password">忘记密码了?</a>
                </section>
            </div>
        )
    }

    onClickLoginBtn() {
        let user: UserData;
        LoginUtil.Login(this.state.userName, this.state.password)
            .then(data => {
                user = data;
                Global.history.replace(`/home/${user.id}/${user.walletsId[0]}`);
            }).catch(err => console.log(err.message));
    }

}