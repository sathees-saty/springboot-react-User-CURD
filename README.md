# springboot-react-User-CURD
<html>
Create simple Springboot backend User application
<br>
Create simple react application
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
  
</html>
