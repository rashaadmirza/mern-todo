# mern-todo

[Repository](https://github.com/rashaadmirza/mern-todo)

## MERN Flow Diagram

```markdown
React Frontend
|
| Axios / Fetch (HTTP Requests)
v
Express Backend (Node + Express)
|
| Mongoose (Object Document Mapper)
v
MongoDB Atlas (Database)
```

## Project Setup

- Created `mern-todo` folder
- Created `server` folder for backend
- Initialized Node with `npm init -y`
- Installed dependencies:
    - `express` → for server/routes
    - `mongoose` → to talk to MongoDB
    - `cors` → to allow frontend requests
    - `dotenv` → to securely store secrets

## **Express Server and Routes**

- Created `server.js`
- Configured Express app with `app.use(cors())` and `app.use(express.json())`
- Routes implemented so far:
    - `GET /` → Test route to see if server is running
    - `POST /tasks` → Add a new task to MongoDB
    - `GET /tasks` → Fetch all tasks from MongoDB
- Learned how `async/await` works with Mongoose
- Tested with Postman

## CRUD Operations

- CREATE
- READ
- UPDATE
- DELETE

## HTTP Methods

- GET
- POST
- PUT
- PATCH
- DELETE

## The Full Flow (Example)

Let’s trace ONE click.

User clicks “Complete”.

1. React calls:
    
    ```
    axios.patch("/tasks/:id")
    ```
    
2. Express receives:
    
    ```
    app.patch("/tasks/:id")
    ```
    
3. Express calls:
    
    ```
    Task.findByIdAndUpdate()
    ```
    
4. MongoDB updates document
5. Express sends JSON response
6. React refreshes state
7. React re-renders UI

> Frontend state is temporary; MongoDB is the permanent storage

That’s the entire loop. Frontend never touches DB directly. Backend never touches DOM. Database never sees UI. That separation is the architecture.

A *frontend client* talking to a *stateless backend API*  which communicates with a *persistent database.*

This pattern is called Client–Server Architecture. More specifically: RESTful API architecture.
