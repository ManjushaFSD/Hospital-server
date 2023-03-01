# Hospital-server
:dizzy: CRUD on Hospital data JSON file using Core modules from Node JS and Express


The requirement is as follows :memo:

* Set up Hospital Data in JSON file with following information: Name of the hospital, Patient Count and Hospital location <br/>
* Perform CRUD(GET,POST,PUT,DELETE) operations on the dataset<br/>
* Use the core modules available in NodeJS to read,write to the JSON file.


***GET request - **Read** list of all hospitals***

:arrow_right:  **GET** http://localhost:3000/api/hospitals

POSTMAN results:
![GET Request](https://user-images.githubusercontent.com/120376714/222120343-34484440-4857-47c1-a7ac-bf9690a73b22.jpg)
<br/>

***GET request - **Read** a single hospital***

:arrow_right:  **GET** http://localhost:3000/api/hospitals/:id

POSTMAN result:

![GET Request anyone hospital](https://user-images.githubusercontent.com/120376714/222120902-cebabb67-4ca2-4dba-be5a-80be5344ca58.jpg)
<br/>

***POST request - **Create** a new Hospital***
<br/>

:arrow_right: **POST** http://localhost:3000/api/hospitals

POSTMAN result:

![POST Request](https://user-images.githubusercontent.com/120376714/222122978-402245c3-30d4-4099-8419-15971041a046.jpg)
<br/>

***PUT request - **Update** an existing Hospital***

:arrow_right: **PUT** http://localhost:3000/api/hospitals/:id

POSTMAN result:

***Before PUT request is sent***
<br/>

![Before PUT request is send](https://user-images.githubusercontent.com/120376714/222127599-748f7679-6819-4f10-a3d4-f44cd3011619.jpg)
<br/>

***After PUT request is sent***
<br/>

![After PUT request is send](https://user-images.githubusercontent.com/120376714/222127807-ef1d802a-11fa-40da-a4c0-2e4d9134e44e.jpg)

<br/>

***DELETE request - **Delete** an existing hospital***

:arrow_right: **DELETE** http://localhost:3000/api/hospitals/:id
<br/>

POSTMAN result:

***Before DELETE request is sent***

![Before Sending the DELETE Request](https://user-images.githubusercontent.com/120376714/222128321-3d62fa35-71e0-4618-96b7-f2e76fd3228b.jpg)
<br/>

***After DELETE request is sent***

![DELETE Request](https://user-images.githubusercontent.com/120376714/222128584-9184dea6-3ad3-46d4-8e7d-c7fd86468997.jpg)
