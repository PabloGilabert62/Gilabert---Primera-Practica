class Mensajes {
  mensajes = 
    [
      {
        "email": "pablo@hotmail.com",
        "message": "Hi",
        "date": "28/2/2023, 14:19:02",
        "id": 1
      },
      {
        "email": "someone@hotmail.com",
        "message": "Hi",
        "date": "28/2/2023, 14:19:07",
        "id": 2
      },
      {
        "email": "someone2@hotmail.com",
        "message": "Hi",
        "date": "28/2/2023, 14:26:53",
        "id": 3
      }
    ]

    generateId() {
      const lastMessage = this.mensajes[this.mensajes.length - 1]
      console.log(lastMessage)
      let id = 1
      if (lastMessage) {
        id = lastMessage.id + 1
      }
      return id
    }
  
    addMessage(newData) {
      newData.id = this.generateId()
  
      this.mensajes.push(newData)
  
      return this.mensajes
    }
  
    getById(id) {
      return this.mensajes.find(mensaje => mensaje.id === parseInt(id))
    }
  
    update(id, data) {
      let updatedMessage
  
      const updatedMessages = this.mensajes.map(mensaje => {
        if (mensaje.id === parseInt(id)) {
          mensaje = Object.assign(mensaje, data)
  
          updatedMessage = mensaje
        }
        return mensaje
      })
  
      this.mensajes = updatedMessages
  
      return updatedMessage
    }
  
    getAll() {
      return this.mensajes
    }
  
    deleteById(id) {
      const newMessages = this.mensajes.filter(
        mensaje => mensaje.id !== parseInt(id)
      )
  
      this.mensajes = newMessages
  
      return this.mensajes
    }
}
  
module.exports = Mensajes