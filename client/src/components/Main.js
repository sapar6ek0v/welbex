import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getMessages} from "../redux/action/messageActions.js";
import MessageCard from "./MessageCard.js";
import {Wrapper} from "./styles/Main.styled.js";
import Container from "./Container.js";
import Loader from "./Loader.js";

const Main = () => {
    const {message, isLoading} = useSelector(s => s.message)
    const dispatch = useDispatch()


    useEffect(() => {
        axios('api/message/get')
            .then(({data}) => {
                dispatch(getMessages(data))
            })
            .catch(e => console.log(e.response?.data?.report || 'Ошибка'))
    }, [])

    const onDelete = (id) => {
        axios.delete(`/api/message/delete/${id}`)
            .then(({data}) => {
                dispatch(getMessages(
                    {
                        ...data,
                        message: Object.values(message).filter(it => it._id !== id)
                    }
                ))
            })
            .catch(e => console.log(e.response?.data?.report || 'Ошибка'))
    }

    if (isLoading) return <Loader/>

    return (
        <Container>
            <Wrapper>
                {
                    Object.values(message).map(it => {
                        return (
                            <MessageCard key={it._id} it={it} onDelete={onDelete} />
                        )
                    })
                }
            </Wrapper>
        </Container>
    );
};

export default Main;