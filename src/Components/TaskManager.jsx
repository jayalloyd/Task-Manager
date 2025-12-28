import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; // Fixed import
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), task: "walking", completed: false },
    { id: uuidv4(), task: "coding", completed: false },
    { id: uuidv4(), task: "reading", completed: false }
  ]);
  const[newTask,setNewTask]=useState("");


 let handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // 3. Handle adding the new task
  let addNewTask = (e) => {
    e.preventDefault(); // Prevents page refresh
    if (newTask.trim() === "") return;

    // Create the new object and update state
    setTasks([...tasks, { id: uuidv4(), task: newTask, completed: false }]);
    setNewTask(""); // Clear input
  };
    
  return (

    <div className="p-4">
      <Form onSubmit={addNewTask}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter your task:</Form.Label>
          <Form.Control type="text" placeholder="enter the task" value={newTask} 
            onChange={handleInputChange}/>
          
 
          <Button variant="primary" className="mt-2" type="submit" onChange={addNewTask}>
            Add Task
          </Button>
        </Form.Group>

        <div className="mt-4">
          <h5>Your Tasks:</h5>
          <Card style={{ width: '22rem' }}>
            <ListGroup variant="flush">
              {tasks.map((todo) => (
                <ListGroup.Item key={todo.id}>
                  <div className="mb-2">
                    <Form.Check 
                      type="checkbox"
                      id={todo.id}
                      label={todo.task} 
                      checked={todo.completed}
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <Button variant="secondary" size="lg">Edit</Button>
                    <Button variant="primary" size="lg">Complete</Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
     
         
        <Button variant="danger" className="mt-2" type="submit">Delete Selected</Button>
         

            
  
        </div>
      </Form>
    </div>
  );
}