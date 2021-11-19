import { useState } from 'react'

const ToDoList = () => {
    const [list, setList] = useState(["Mow the lawns you filthy animal", "Walk the dogs", "Wash the car", "Drink beer"])
    const [inputText, setInputText] = useState("")

    const addHandler = () => {
        let storedList = [...list]
        storedList.push(inputText)
        
        setList(storedList)        
        setInputText("")
    }

    const removeHandler = (index) => {
        let storedList = [...list]
        storedList.splice(index, 1)
        
        setList(storedList)
    }

    return (
        <div>
            <h1>ToDo List</h1>
            {list.map((list, index) => {
                return <h2 key={index}>{list}                  
                  <button onClick={() => removeHandler (index)}>delete one</button>
                </h2>
               
            })}
            <input value = {inputText} type="text" onChange={(event) => setInputText(event.target.value)}/>
            
            <button onClick={addHandler}>add to my todo list</button>
            
            
        </div>
    )
}

export default ToDoList
