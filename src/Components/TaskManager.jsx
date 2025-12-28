import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Fixed import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
   "walking", "coding", "reading" 
  ],uuidv4());


 let[newTask,setNewTask]=useState("");
    let handleAddNewTaskChange=(event)=>{
    //    setToDos([...todos,{task:newTask,id:uuidv4()}]);
    setTasks((prevTodos)=>{
        return [...prevTodos,{task:newTask,id:uuidv4()}]
    })
       setNewTask("");
    }
    
  return (

    <div className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter your task:</Form.Label>
          <Form.Control type="text" placeholder="enter the task" />
          
          {/* OPTION 1: Add Task Button right under the input */}
          <Button variant="primary" className="mt-2" type="submit" onSubmit={handleAddNewTaskChange}>
            Add Task
          </Button>
        </Form.Group>

        <div className="mt-4">
          <h5>Your Tasks:</h5>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              {tasks.map((task) => (
        <ListGroup.Item key={task}>

            {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type="checkbox"
            id={`default-${task}`}
            label={task}
          />  
            

          <Button variant="danger" className="mt-2" type="submit">Edit</Button>
             <Button variant="secondary" className="mt-2" type="submit">Mark as Completed </Button>
        </div>
      ))}
          </ListGroup.Item>
        ))}
        <Button variant="danger" className="mt-2" type="submit">Delete Selected</Button>
            </ListGroup>

            
      </Card>
        </div>
      </Form>
    </div>
  );
}