# springboot-react-User-CURD
<html>
Create simple Springboot backend User application
<br>
Create simple react application (project name: my-test-get)
<br>
Download source from github:
<br>
Import springboot application as Maven and run the application as Springboot application: started in localhost:8080
<br>
Refer springboot-react-mysql-CURD repoitory and create frontend application
<br>
Test the Springboot webservices using Postman and ensure it's working: it's simple application to learn React.js and Webservice call. The output logged into console. we are not using DB.
<br>
GET: http://localhost:8080/api/users
<br>
PUT: http://localhost:8080/api/users/2
<br> Input -> Body->Raw
<br>
  {
        "id": 2,
        "name": "kumar@gmail.com",
        "city": "New Delhi",
        "email": "kumar@gmail.com"
    }  
<br>

  Output: Status 200 OK
<br>
POST: http://localhost:8080/api/users
<br> Input -> Body->Raw
<br>
  {
        "id": 2,
        "name": "kumar@gmail.com",
        "city": "New Delhi",
        "email": "kumar@gmail.com"
    }  
<br>
  Output: Status 200 OK
<br>
DELETE: http://localhost:8080/api/users/1
<br>
    Output: Status 200 OK
<br>
Now change App-User-Get-All.js to App.js and run the front end application.
<br>
Now change App-User-Update.js to App.js and run the front end application.
<br>
Now change App-User-Insert.js to App.js and run the front end application.
<br>
Now change App-User-Delete.js to App.js and run the front end application.
<br>
GET
<br>
<img src="https://github.com/sathees-saty/springboot-react-User-CURD/assets/65384711/0fa440ae-f8fc-4c48-8836-14e043c36379" alt="GET" width="500" height="600">
<br>
PUT (update)
<br>
<img src="https://github.com/sathees-saty/springboot-react-User-CURD/assets/65384711/4d99dfcb-a43e-4df3-8ecf-072ba1374a2d" alt="PUT" width="500" height="600">
<br>
POST (insert)
<br>
<img src="https://github.com/sathees-saty/springboot-react-User-CURD/assets/65384711/5f313c99-3cdc-4b49-b2a4-b2a1458306f4" alt="POST" width="500" height="600">
<br>
DELETE
<br>
<img src="https://github.com/sathees-saty/springboot-react-User-CURD/assets/65384711/b1adbbbf-b759-4e0f-99ff-030db8087af5" alt="DELETE" width="500" height="600">
<br>
</html>
