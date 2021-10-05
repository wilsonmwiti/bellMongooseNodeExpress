# Software Design Documents(SDD)

`Objective:`
-----
<br>

Here, all you’re doing is providing a description of the project and the purpose of the SDD.<br><br>
To make an application to access the API calls structed and user-friendly manner  using visual API .

<br>


`Functional Requirements:`
---
<br>

>Complete information about the workflows performed by the system

<br>

```

VisualApi
│ README.md
│ app.js
| package.json
│
└───Model
│ │ UserSchema.js
│ │ ApiSchema.js
│ │ BusinessUnitSchema.js
| | ProgramSchema.js
|
└───Services
│ │ ProgramService.js
| | ApiService.js
│ │ UserService.js
│ │ BusinessUnitService.js
|
|
└───Routes
│  indexRouter.js
|  loginRouter.js
|  userRouter.js
|  appendHandlerRouter.js
|  editHandlerRouter.js
|  businessUnitRouter.js
|  
│

```

<br>


# `ER Models:`

![](https://github.com/ragavi65/picture/blob/main/Screenshot%20(13).png?raw=true)


<br>
# `Models:`


<br>

### **UserSchema.js :**


     Define the structure for the user authentication and token validation.
>Userscheme consists of following 
* first_name
* last_name
* email
* role
* user_name
* password
* description
* mobile
* token


### **ApiSchema.js:**

    The structure of the API's will be defined .

>Api consists of following :
   * api_name
   * api_id 
   * url
   * method
   * body
   * project
   * description
   * params
   * headers
   * authorisation
   * setting

### **BusinessUnitSchema.js:**

    It  defines about the  which unit the  it  belongs  and the programs  of the api .

>BusinessUnitSchema consists of 
* businessunit_id
* businessunit_name
* program_id
* api_id


<br>

### **ProgramSchema.js :** 

       It define about the program in the business users

>ProgramSchema consists of 
 * program_id
 * program_name
 * api_id


# `Services:`
---

<br>

### **ProgramServices.js:**

      All the program related services like create,read,edit,delete (CRUD)  operations will be done .

### **ApiServices.js:**
    
     Api related services such as updation,modifications and fetch  the will be performed . 

### **UserServices.js:**

        Validation of the user and their access.

### **BusinessUnitServices.js :**

         Performs all the business unit operations such as creation , updation and deletion (CRUD) of the business units.

<br>


# `Routes :`
<br>

### **indexRouter.js :**
<br>

![](https://github.com/ragavi65/picture/blob/main/login.png?raw=true)


       It is main router which manages all the other routers and shows the sign in  pages after the clicking the sign in button  it will redirect to login router

### **loginRouter.js :**
<br>

![](https://github.com/ragavi65/picture/blob/main/Screenshot%20(9).png?raw=true)

         It verifies the whether the user is authenticated are or not , If it is successfull login it redirect businessRouter otherwise it wiill be redirected to login page .



<br>

### **businessUnitRouter.js:**
<br>

![](https://github.com/ragavi65/picture/blob/main/home.png?raw=true)


    In business unit router we have businessUnitRouter and program route ,business unit route populates all the programs in it 

    The programrouter will populate all the api's which it contain

    When the user clicks the add button in top right corner it route the new businessunit in the BusinessUnitRouter then the new businessunit is successfully added after clicking the save button.

    Then routing starts and send the post request to add/:businessUnitRouter in the BusinessUnitRouter


### **editHandlerRouter.js :**
<br>

![](https://github.com/ragavi65/picture/blob/main/editRoute.png?raw=true)

 When the edit icon is pressed  it  will send patch request to edit businessunit or businessunit/:program
   

### **appendHandlerRouter.js :**
<br>
![](https://github.com/ragavi65/picture/blob/main/Screenshot%20(10).png?raw=true)

     In modificationRouter , we can specifiy the route for CRUD operation taking place in business unitsprograms  and apis.

### **userRouter.js:**
<br>

![](https://github.com/ragavi65/picture/blob/main/userRoute.png?raw=true)


      When the all user is icon clicked ,userRoter is invoked with  users and  it will display all the users in it.
![](https://github.com/ragavi65/picture/blob/main/Screenshot%20(11).png?raw=true)

      When edit icon is pressed it will route to /edit/:user and it will be edited.

      When add icon is pressed it will route to /join/:user and new user will be added

# `Store MongoDB Credentials As Environment Variables In Node.js`


      NPM package to facilitate the loading and use of environment variables.

>npm install --save dotenv
```
dotenv.config()

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<dbname>`

```


         


# `Naming Convention:`
---

* **folders** :flat case <br>
* **Router** : camelCase <br>
* **Model folder & service folder file name** : PascalCase
* **Schema properties** : snake_case
* **Schema files** : PascalCase




