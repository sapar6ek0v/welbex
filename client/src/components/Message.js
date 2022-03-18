import React, {useState} from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Container from "./Container.js";
import {Wrapper} from "./styles/Message.styled.js";
import {useForm} from "react-hook-form";


const Message = () => {
    const [message, setMessage] = useState('')
    const {user} = useSelector(s => s.user)
    const navigate = useNavigate()

    const onSave = () => {
        const dataMessage = {
            message: message,
            author: user._id
        }
        axios.post('/api/message/save', dataMessage)
            .then(({data}) => {
                alert(data.report)
                setMessage('')
                navigate('/')
            })
            .catch((e) => alert(e.response?.data?.report))
    }


    return (
        <Container>
            <Wrapper>
                <p>Name: {user?.name}</p>
                      <textarea
                          cols="30"
                          rows="10"
                          placeholder="Введите свой текст..."
                          onChange={(e) => setMessage(e.target.value)}
                          id='message'
                      >
                    </textarea>
                    <div>
                        <button onClick={onSave}>Save</button>
                    </div>
            </Wrapper>
        </Container>
    );
};

export default Message;