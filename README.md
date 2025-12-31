# My Awesome Task Manager

**Task Manager (React + Bootstrap)**

A clean, responsive CRUD (Create, Read, Update, Delete) application built with React and styled with React-Bootstrap. This project demonstrates modern React state management, including conditional rendering for edit modes and immutable state updates.


Live At-> https://my-awesome-task-manager.netlify.app/
---

## 🚀 Features

- **Create**  
  Add new tasks using a managed form.

- **Read**  
  View a list of tasks with a clear, card-based interface.

- **Update**  
  - *Inline editing*: Swap the task view for a textarea to modify task content.

- **Completion Toggle**  
  Checkbox to strike through completed items.

- **Delete**  
  Remove tasks from the list instantly.

- **UUID Integration**  
  Uses `uuidv4` to ensure unique keys for every task, preventing rendering bugs.

- **Responsive Design**  
  Fully styled with Bootstrap for mobile and desktop compatibility.

---

## 🛠️ Tech Stack

- **Library:** React (Functional Components & Hooks)  
- **Styling:** React-Bootstrap  
- **Icons / Components:** Bootstrap 5 CSS  
- **ID Generation:** UUID  

---

## 📦 Installation & Setup

### Clone the repository
```bash
git clone https://github.com/jayalloyd/task-manager.git
cd task-manager
Install dependencies


pnpm install
Install required libraries

pnpm install react-bootstrap bootstrap uuid
Run the application


pnpm run dev
```
## 🧠 Code Logic Overview
State Management
The app uses three primary pieces of state:

tasks
The main array of task objects.

editingId
Tracks which specific task is currently being edited to toggle the UI.

tempText
Buffers the text while typing in edit mode before saving.

Key Functions
saveEdit(id)
Uses .map() to find the specific task by ID and merge the tempText change while keeping other task properties (like completed) intact.

deleteTask(id)
Uses .filter() to create a new array excluding the selected ID.

toggleComplete(id)
Reverses the boolean completed value for the selected task.

## 📝 License
This project is available under the MIT License.
