import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import './login.css'
import Swal from 'sweetalert2';
// import Database from '../database.jsx';




function BasicExample() {
    var [email_, setEmail] = useState('');
    var [password_, setPassword] = useState('');

    //get Token 
    function getToken() {
        const tokenString = sessionStorage.getItem('id');
        // console.log(tokenString);
        return tokenString;
    }



    // handle
    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    // fetch user_data
    function login() {

        var initialState = {
            email: email_,
            password: password_,
        }

        const login_data = fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialState),
        })

        login_data.then(
            function (value) {
                value.json().then((data) => {
                    if (data != false) {
                        if (data[0].role_id == 1) {
                            window.location.href = '/home_seller';
                        } else {
                            window.location.href = '/home';
                        }
                        sessionStorage.setItem('email', data[0].email);
                        sessionStorage.setItem('role_id', data[0].role_id);
                        sessionStorage.setItem('id', data[0].id);

                    }else{
                        Swal.fire({
                            icon: 'warning',
                            title: 'Invalid',
                            text: 'Username or password is invalid',
                        })
                    }
                })
            })
    }

    if (getToken()) {
        const role_id = sessionStorage.getItem('role_id');
        if (role_id == 2) {
            window.location.href = '/home';
        }
        else {
            window.location.href = '/home_seller';
        }
    } else {
        return (
            <>
                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
                <div className=' p-5 rounded-4 login-form'>
                    <center><img src='./img/logo.png' className='img-fluid' /></center>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='text-light'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email_} onChange={handleEmail} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='text-light'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password_} onChange={handlePassword} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <NavLink to={'/register'} className={'text-white '} >Register</NavLink>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="button" value={'LOGIN'} className='btn btn-danger fw-bold' onClick={login} />
                        </Form.Group>

                    </Form>
                </div>


            </>
        );
    }


}





export default BasicExample;