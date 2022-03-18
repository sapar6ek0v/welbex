import React, {useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../redux/action/messageActions.js";
import {Wrapper} from "./styles/MessageCard.styled.js";
import {BsFillTrashFill, BsSaveFill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai"
import notFound from '../images/no_image.jpg'

const MessageCard = ({it, onDelete}) => {
    const dispatch = useDispatch()
    const {message} = useSelector(s => s.message)
    const {isAuth, user} = useSelector(s => s.user)
    const [update, setUpdate] = useState(false)
    const [updateText, setUpdateText] = useState(it.message)


    const onEdit = () => {
        setUpdate(true)
    }

    const onUpdate = (id) => {
        axios.put(`/api/message/edit/${id}`, {message: updateText})
            .then(({data}) => {
                dispatch(getMessages({
                    ...data,
                    message: Object.values(message).map(it => it._id === id ? {...it, message: updateText} : it)
                }))
            })
            .catch(e => console.log(e.response?.data?.report || 'Ошибка'))
        setUpdate(false)
    }

    const handleInput = (e) => {
        setUpdateText(e.target.value)
    }

    return (
        <Wrapper>
            <div className="card">
                <img src={it.image ? it.image : notFound} alt=""/>
                <p>{it.author?.name}</p>
                <hr/>
                <div>
                    {
                        update
                            ? <input
                                value={updateText}
                                onChange={(e) => handleInput(e)}
                                type="text"
                              />
                            : <span className='d-inline-block px-3 overflow-auto'>
                                   {it.message}
                              </span>
                    }
                </div>
                <hr/>
                <div className='d-flex justify-content-between px-5'>
                    <div>
                        {
                            update
                                ? <button onClick={() => onUpdate(it._id)} className='green'>
                                    <BsSaveFill />
                                  </button>
                                : <button onClick={onEdit}>
                                    <AiFillEdit />
                                  </button>
                        }
                    </div>
                    <div>
                        {
                            isAuth && (user._id === it.author?._id) &&
                            (<button onClick={() => onDelete(it._id)} className='red'>
                                <BsFillTrashFill />
                            </button>)
                        }
                    </div>

                </div>
            </div>
        </Wrapper>
    );
};

export default MessageCard;