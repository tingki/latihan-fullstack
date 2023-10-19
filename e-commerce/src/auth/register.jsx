import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, redirect } from 'react-router-dom';
import { useQuery } from 'react-query';

import useSWRMutation from 'swr/mutation';
import Swal from 'sweetalert2'







function BasicExample() {

    var [firstname, setFirstname] = useState('');
    var [lastname, setLastname] = useState('');
    var [phoneNumber, setPhonenumber] = useState('');
    var [role, setRole] = useState('');
    var [email_, setEmail] = useState('');
    var [password_, setPassword] = useState('');
    var [retype, setRetypePassword] = useState('');
    var [registered_email, setRegisteredEmail] = useState(undefined);

    var empty_input = true;
    var check_password = true;
    var register_email = true;

    var initialState = {
        first_name: firstname,
        last_name: lastname,
        phone_number: phoneNumber,
        role_id: role,
        email: email_,
        password: password_,
    }
    var [user, setUser] = useState(initialState);



    function handelFirstname(e) {
        setFirstname(e.target.value)
    }
    function handleLastname(e) {
        setLastname(e.target.value)
    }
    function handlePhonenumber(e) {
        setPhonenumber(e.target.value)

    }
    function handleRole(e) {
        setRole(e.target.value)

    }
    function handleEmail(e) {
        setEmail(e.target.value)

    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleRetypePassword(e) {
        setRetypePassword(e.target.value)
    }


    function saved_data() {
        fetch('http://localhost:8080/createUsers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(initialState),
        })

        Swal.fire({
            title: "Registered",
            text: "Register account sucessful!",
            icon: "success",
        }).then(() => {
            window.location.href = '/';
        })
    }


    function saveAccount() {

        // check not empty 
        const keytocheck = ['first_name', 'last_name', 'phone_number', 'email', 'password', 'role_id'];
        if (!areKeysNotEmpty(initialState, keytocheck)) {
            empty_input = false;
            Swal.fire({
                title: 'Invalid',
                text: 'Please fill all input form',
                icon: 'warning',
            })
        }

        // check if email registered
        if (email_ != '') {
            const email_registered = fetch('http://localhost:8080/getUsersByEmail/' + email_, {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/Json',
                },
            })


            email_registered.then(
                function (value) {
                    value.json().then((data) => {
                        if (data[0]) {
                            register_email = false;
                            Swal.fire({
                                title: 'Invalid',
                                text: 'Email used',
                                icon: 'warning',
                            })
                        }else{
                            if (register_email === true && check_password === true && empty_input === true) {
                                saved_data();
                            }
                        }
                    })
                }
            )
        }


        // check password and retype password
        if (retype != password_) {
            check_password = false;
            Swal.fire({
                title: 'Invalid',
                text: 'Please input same password',
                icon: 'warning',
            })
           
        }

        // save user data


    }





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
            <div className=' p-5 rounded-4 register-form'>
                <center><img src='/img/logo.png' className='img-fluid' /></center>
                <Form>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Form.Group controlId="formBasicFirstName">
                                <Form.Label className='text-light'>FirstName</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={firstname} onChange={handelFirstname} />
                            </Form.Group>
                        </div>
                        <div className='col-md-6'>
                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label className='text-light'>Lastname</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={lastname} onChange={handleLastname} />
                            </Form.Group>
                        </div>
                        <div className='col-md-12'>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Label className='text-light'>Phone Number</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={phoneNumber} onChange={handlePhonenumber} />
                            </Form.Group>
                        </div>
                        <div className='col-md-12'>
                            <Form.Label className='text-light'>Role</Form.Label>
                            <Form.Group className="mb-3" controlId="formBasicRole" onChange={handleRole}>
                                <Form.Select aria-label="Default select example">
                                    <option value={''}> Choose </option>
                                    <option value={1}>Seller</option>
                                    <option value={2}>Buyers</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className='col-md-12'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-light'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email_} onChange={handleEmail} />
                            </Form.Group>
                        </div>
                        <div className='col-md-6'>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='text-light'>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password_} onChange={handlePassword} />
                            </Form.Group>
                        </div>
                        <div className='col-md-6'>
                            <Form.Group className="mb-3" controlId="formBasicRetype">
                                <Form.Label className='text-light'>Retype Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={retype} onChange={handleRetypePassword} />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <NavLink to={'/'} className={'text-white '} >Have an Account ? Login</NavLink>
                        </Form.Group>
                        <div className='col-md-12'>
                            <Form.Group className="mb-3">
                                <Form.Control type="button" value={'SAVE'} className='btn btn-danger fw-bold' onClick={saveAccount} />
                            </Form.Group>
                        </div>
                    </div>
                </Form>
            </div>


        </>
    );
}

function areKeysNotEmpty(obj, keys) {
    return (
        obj &&
        Array.isArray(keys) &&
        keys.every((key) => obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '')
    );
}





export default BasicExample;