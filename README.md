## Folder 1 - address-book is react app.
## Folder 2 - mock server containing db.json.
---
## To run react app , navigate into adress-book.
- npm install
- npm start

## To run mock server, navigate into mock-server.
- npm start

---
## Point to note.
users ID is id.
contacts ID is id.

This is for becase json-server fails in post request as it needs "id" insted of "ID".
Not only post request, even put and delete cannout be done by "ID".

Below are JSON
I am using "id" and not "ID"
```
"users": [
    {
      "id": 1,
      "Username": "user",
      "Password": "User1Password"
    },
    {
      "id": 2,
      "Username": "user2",
      "Password": "User2Password"
    }
  ]
```

```
"contacts": [{
      "id": 1,
      "First_Name": "John",
      "Last_Name": "Smith",
      "Birthday": "2001-04-23",
      "Description": "He is my best friend",
      "Emails": [
        "john_smith@gmail.com",
        "jsmith@hotmail.com"
      ],
      "Phones": [
        {
          "Type": "Mobile",
          "Phone_Number": "123-123-1234"
        },
        {
          "Type": "Home",
          "Phone_Number": "123-123-1235"
        }
      ],
      "OwnerId": 1,
      "CreatedDate": "2021-10-13T18:25:43.511Z",
      "UpdatedDate": "2021-10-18T18:25:43.511Z"
    },
    {
      "id": 2,
      "First_Name": "Mary",
      "Last_Name": "Smith",
      "Birthday": "2002-10-01",
      "Description": "She is my best friend's wife",
      "Emails": [
        "mary_smith@gmail.com",
        "msmith@hotmail.com"
      ],
      "Phones": [
        {
          "Type": "Mobile",
          "Phone_Number": "321-3454-1234"
        },
        {
          "Type": "Home",
          "Phone_Number": "123-123-1235"
        }
      ],
      "OwnerId": 1,
      "CreatedDate": "2021-10-13T18:25:43.511Z",
      "UpdatedDate": "2021-10-18T18:25:43.511Z"
    }]
```
---
Functionality : 
 - Loing
 - Logout
 - Display Result on login success.
 - Search & Display result.
 - Delete individual contact
 - Edit Individual contact.
 - Creat new Contact.
 ---
Pages:
- Login
- NotFound page
- Home page with list of contacts.
- Edit View
- Delete View
---

Port Number:
- React runs on port 3000
- json server on port 3001
---

id for creating contacts is mandatory.
so have used random number generation strategy.

---
## Thanks for the opportunity
