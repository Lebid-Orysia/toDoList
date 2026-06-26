import { Button, Card, Col, Input, Row } from 'antd'
import { useState } from 'react';

export default function ToDoForm(props) {
  const [value, setValue] = useState('')
  const changeHeandler = (e) => {
    setValue(e.target.value);
    
  }

  const clickHendler = () => {
    if (value !== ''){
     const isAdded = props.onAdd(value)
     if(isAdded){
      setValue('')
     }else{
      alert('This task already exists')
     }
    } else {
      alert('Enter to do text')
    }
  }
  
  return(
      <Card style={{ marginBottom: '30px' }}>
        <Row>
          <Col span={20}>
            <Input value={value} onChange={changeHeandler}/>
          </Col>
          <Col span={4}>
            <Button color='pink' variant='solid' onClick={clickHendler}>Add</Button>
          </Col>
        </Row>
      </Card>
  )
}