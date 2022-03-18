import React from 'react';
import {Wrapper} from "./styles/Header.styled.js";
import Container from "./Container.js";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut, singIn} from "../redux/action/userActions.js";

const Header = () => {
    const {user, isAuth} = useSelector(s => s.user)
    const {message} = useSelector(s => s.message)
    const dispatch = useDispatch()

    const onLogOut = () => {
        dispatch(logOut)
        dispatch(singIn)
    }

    return (
        <Wrapper>
            <Container>
                <div className="header">
                    <Link to='/' className="header_btn">
                        HOME
                    </Link>
                    {
                        isAuth &&
                        <Link to='/message' className="header_btn">
                            CREATE MESSAGE
                        </Link>
                    }
                    {
                        !isAuth ?
                           <>
                              <Link to='/sign_up'  className="header_btn">
                                 SIGN UP
                              </Link>
                              <Link to='/sign_in' className="header_btn">
                                  SIGN IN
                             </Link>
                          </> : <button onClick={onLogOut} className="header_btn">LOG OUT</button>
                    }

                    <div className="header_logout">
                        {
                            user && <span className='text-white'>{user?.name}</span>
                        }
                    </div>
                </div>
            </Container>
        </Wrapper>

    );
};

export default Header;