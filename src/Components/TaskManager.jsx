import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), task: "walking", completed: false },
    { id: uuidv4(), task: "coding", completed: false },
    { id: uuidv4(), task: "reading", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null); // Tracks which task is being edited
  const [tempText, setTempText] = useState("");    // Holds text while editing

  // 1. Add New Task
  const addNewTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: uuidv4(), task: newTask, completed: false }]);
    setNewTask("");
  };

  //delete task
 const deleteTask=(id)=>{
    const updatedTasks=tasks.filter(task=>task.id !== id);
    setTasks(updatedTasks);

 }   

  return (
    <div className="p-4 d-flex flex-column align-items-center">
      <Form onSubmit={addNewTask} className="mb-4" style={{ width: '22rem' }}>
        <Form.Group>
          <Form.Label className="fw-bold">New Task</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="What needs to be done?" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button variant="primary" className="mt-2 w-100" type="submit">
            Add Task
          </Button>
        </Form.Group>
      </Form>

      <Card style={{ width: '22rem' }}>
        <Card.Header className="bg-primary text-white">Your Tasks</Card.Header>
        <ListGroup variant="flush">
          {tasks.map((todo) => (
            <ListGroup.Item key={todo.id} className="p-3">
              {editingId === todo.id ? (
                /* --- EDIT MODE (TEXT AREA) --- */
                <div className="edit-section">
                  <Form.Control 
                    as="textarea" 
                    rows={2}
                    value={tempText}
                    onChange={(e) => setTempText(e.target.value)}
                    autoFocus
                  />
                  <div className="mt-2 d-flex gap-2">
                    <Button variant="success" size="sm" onClick={() => saveEdit(todo.id)}>Save</Button>
                    <Button variant="outline-secondary" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
                  </div>
                </div>
              ) : (
                /* --- VIEW MODE --- */
                <div className="view-section">
                  <div className="d-flex align-items-center mb-3">
                    <Form.Check 
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      label={
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                          {todo.task}
                        </span>
                      }
                    />
                  </div>
                  <div className="d-flex gap-2">
                    
                    <Button variant="outline-secondary" size="sm" onClick={() => startEdit(todo.id, todo.task)}>
                      Edit
                    </Button>
                    
                    <Button variant="outline-danger" size="sm" onClick={()=>deleteTask(todo.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}