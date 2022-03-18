import SignUp from "./components/SignUp.js";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/SignIn.js";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {singIn} from "./redux/action/userActions.js";
import Message from "./components/Message.js";
import Main from "./components/Main.js";
import {GlobalStyle, Wrapper} from "./App.styled.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(s => s.user)

    useEffect(() => {
        axios('/api/user/authenticate')
            .then(({data}) => dispatch(singIn(data)))
            .catch(e => console.log(e.response?.data?.error))
    }, [isAuth])


    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <div className="main">
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/sign_up' element={<SignUp/>}/>
                        <Route path='/sign_in' element={<SignIn/>}/>
                        <Route path='/message' element={<Message />}/>
                    </Routes>
                </div>
                <Footer/>
            </Wrapper>
        </>
    )
}

export default App;
