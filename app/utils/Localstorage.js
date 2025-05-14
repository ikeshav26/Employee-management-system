
     const employees= [
           
              {
                "id": 1,
                "email": "employee1@example.com",
                "password": "123",
                "FirstName":"Bravo",
                "taskCounts":{
                  "active":2,
                  "newTask":1,
                  "completed":1,
                  "failed":0
                },
                "tasks": [
                  {
                    "active": true,
                    "newtask": true,
                    "completed": false,
                    "failed": false,
                    "task_title": "Task 1",
                    "task_description": "Complete the project documentation.",
                    "task_date": "2025-02-20",
                    "category": "Documentation"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": true,
                    "failed": false,
                    "task_title": "Task 2",
                    "task_description": "Fix the website layout bug.",
                    "task_date": "2025-02-18",
                    "category": "Bug Fix"
                  },
                  {
                    "active": false,
                    "newtask": false,
                    "completed": false,
                    "failed": true,
                    "task_title": "Task 3",
                    "task_description": "Update the product database.",
                    "task_date": "2025-02-19",
                    "category": "Database"
                  }
                ]
              },
              {
                "id": 2,
                "email": "e@e.c",
                "password": "123",
                "FirstName":"John",
                "taskCounts":{
                  "active":2,
                  "newTask":1,
                  "completed":0,
                  "failed":1
                },
                "tasks": [
                  {
                    "active": true,
                    "newtask": true,
                    "completed": false,
                    "failed": false,
                    "task_title": "Task 1",
                    "task_description": "Write test cases for the new feature.",
                    "task_date": "2025-02-22",
                    "category": "Testing"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": false,
                    "failed": true,
                    "task_title": "Task 2",
                    "task_description": "Review the latest pull request.",
                    "task_date": "2025-02-18",
                    "category": "Code Review"
                  }
                ]
              },
              {
                "id": 3,
                "email": "employee3@example.com",
                "password": "123",
                "FirstName":"Michael",
                "taskCounts":{
                  "active":3,
                  "newTask":1,
                  "completed":1,
                  "failed":1
                },
                "tasks": [
                  {
                    "active": true,
                    "newtask": true,
                    "completed": false,
                    "failed": false,
                    "task_title": "Task 1",
                    "task_description": "Implement new payment gateway.",
                    "task_date": "2025-02-25",
                    "category": "Development"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": true,
                    "failed": false,
                    "task_title": "Task 2",
                    "task_description": "Update user interface designs.",
                    "task_date": "2025-02-20",
                    "category": "UI/UX"
                  },
                  {
                    "active": false,
                    "newtask": false,
                    "completed": false,
                    "failed": true,
                    "task_title": "Task 3",
                    "task_description": "Deploy application to production.",
                    "task_date": "2025-02-17",
                    "category": "Deployment"
                  }
                ]
              },
              {
                "id": 4,
                "email": "employee4@example.com",
                "password": "123",
                "FirstName":"Donald",
                "taskCounts":{
                  "active":3,
                  "newTask":1,
                  "completed":1,
                  "failed":1
                },
                "tasks": [
                  {
                    "active": true,
                    "newtask": true,
                    "completed": false,
                    "failed": false,
                    "task_title": "Task 1",
                    "task_description": "Setup CI/CD pipeline.",
                    "task_date": "2025-02-23",
                    "category": "DevOps"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": true,
                    "failed": false,
                    "task_title": "Task 2",
                    "task_description": "Refactor code for better performance.",
                    "task_date": "2025-02-18",
                    "category": "Code Refactoring"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": false,
                    "failed": true,
                    "task_title": "Task 3",
                    "task_description": "Integrate third-party APIs.",
                    "task_date": "2025-02-21",
                    "category": "API Integration"
                  }
                ]
              },
              {
                "id": 5,
                "email": "employee5@example.com",
                "password": "123",
                "FirstName":"Franklin",
                "taskCounts":{
                  "active":2,
                  "newTask":1,
                  "completed":0,
                  "failed":1
                },
                "tasks": [
                  {
                    "active": true,
                    "newtask": true,
                    "completed": false,
                    "failed": false,
                    "task_title": "Task 1",
                    "task_description": "Create user authentication system.",
                    "task_date": "2025-02-26",
                    "category": "Security"
                  },
                  {
                    "active": true,
                    "newtask": false,
                    "completed": false,
                    "failed": true,
                    "task_title": "Task 2",
                    "task_description": "Optimize database queries.",
                    "task_date": "2025-02-18",
                    "category": "Performance"
                  }
                ]
              }
        ];

     const admin=[
        {
      "id": 1,
      "email": "a@a.c",
      "password": "123",
      "FirstName":"Keshav"
    }
];

export const setLocalstorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalstorage=()=>{
   const employeedata = JSON.parse(localStorage.getItem('employees'));
   const admindata = JSON.parse(localStorage.getItem('admin'));
    return{employeedata,admindata}
}