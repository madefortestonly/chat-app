const generateMessage = (username, text, color) => {
    return {
        username,
        text,
        createdAt: new Date().getTime(),
        color
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}