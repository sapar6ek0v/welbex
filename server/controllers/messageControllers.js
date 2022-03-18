import Message from '../models/messageModels.js'


export const saveMessage = (req, res) => {
    const {message, author} = req.body

    const newMessage = new Message({message, author})

    newMessage.save((error, message) => {
        if (error) return res.status(400).json({report: "Ошибка, сообщение не сохранено!", error})

        res.json({
            report: "Ваше сообщение сохранено успешно",
            message
        })
    })
}

export const getMessage = (req, res) => {

    Message
        .find()
        .populate({
            path: 'author',
            select: '-password'
        })
        .exec((error, message) => {
            if (error) return res.status(401).json({report: "Ошибка!", error})
            if (!message) return res.status(401).json({report: "Сообщение не найдено"})

            console.log(message)

            res.json({
                report: "Ваше сообщение успешно найдено",
                message
            })
        })
}

export const deleteMessage = (req, res) => {
    const {id} = req.params

    Message.findByIdAndDelete(id, (error, message) => {
        if (error) return res.status(401).json({report: "Ошибка удаление сообщение!", error})

        res.json({
            report: "Сообщение успешно удалено",
            message
        })
    })
}

export const editMessage = (req, res) => {
    const {id} = req.params
    const {message} = req.body

    Message.findByIdAndUpdate(id, {message: message}, (error, data) => {
        if (error) return res.status(401).json({report: "Ошибка обновления!", error})

        res.json({
            report: "Успешно обновлено",
            data
        })
    })
}