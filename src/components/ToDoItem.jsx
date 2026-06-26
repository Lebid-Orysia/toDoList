import { Button } from "antd"
import { useEffect } from "react"

export default function ToDoItem(props) {
  const item = props.item


  useEffect(() => {
    console.log('done changed');
    return () => {
      console.log('unmount', item.text)
    }
  }, [props.item.isDone])

  return (
    <li>
      <div className={`todo-item ${item.isDone ? 'item-done' : ''}`}>
        <p>{item.text}</p>
        <div className='actions'>
          {!item.isDone ? <Button color='pink' onClick={() => props.onAction(item.id, 'setDone')} variant='solid'>Done</Button> : null}
          <Button color='primary' onClick={() => props.onAction(item.id, 'copy')} variant='solid'>Copy</Button>
          <Button color='danger' onClick={() => props.onAction(item.id, 'delete')} variant='dashed'>Delete</Button>
        </div>
      </div>
    </li>
  )
}