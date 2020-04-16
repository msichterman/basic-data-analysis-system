# CSCE411-Assignment4-DataAnalysisWorkflow
This assignment is intended to build the following skills: build a web-based interactive data analysis system and understand the three types of data modeling techniques for database design.

# Build An End-to-End E-R Data Analysis Workflow
***Disclaimer: This repository is public to showcase skills developed from this assignment. I am in no way reponsible for any academic integrity issues should any code be re-used or copied from any part of this assignment.**

## Motivation
This site was created to satisfy the requirements of an assignment in my `CSCE 411: Data Modeling for Systems Development` class at the University of Nebraska-Lincoln. The assignment was intended to help build the following skills:

* Build a web-based interactive data analysis system
* Understand the three types of data modeling techniques for database design

In real-world settings, a dataset may not be directly used with a relational database management system (RDBMS). Different datasets can be provided with different formats(e.g., text, binary, images, and so on). In order to use these datasets in RDBMS, data processing and modeling techniques are typically required. In this assignment, we were provided with a dataset in a zip archive file, and after decompression there were about 2,000 data files, named from record_000000.datto to record_001999.dat. Each data file corresponds to a synthesized record containing User ID, User Name, User Location, Number of Messages, and Message information (Send Time and Send Text) in a binary format. After processing these datasets, we were instructed to conceptually, logically, and physically model the data. From there, we added the data to a PostgreSQL database and created a web interface that displays the results of four required database queries.

## Technologies
### Back-End
* Node.js
    * [Express.js](https://expressjs.com/)
* PostgreSQL
    * [node-postgres](https://node-postgres.com/)
    * [pgAdmin 4](https://www.pgadmin.org/download/)
### Front-End
* JavaScript
    * [React](https://reactjs.org/)
* HTML
* CSS

## Getting Started
In order to use the application locally, you'll need to do a few things first.

1. Clone this repository and `cd` into the repository's directory
```
git clone https://github.com/msichterman/auth-and-privileges.git && cd ./auth-and-privileges
```

2. Install all of the `node_modules` required for the project. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.
```
npm install && npm run client-install
```
or
```
sudo npm install && sudo npm run client-install
```

3. Lastly, run the following command to get the project off the ground. This command will not only build your JS files, but it will also auto-compile your files on every file save. This allows for hot reloading on-save when the backend and/or frontend code is updated.

```
npm run dev
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see the application live!

## Get In Touch
* Follow me on [Twitter](https://twitter.com/mattsichterman)
* Connect with me on [LinkedIn](https://www.linkedin.com/in/msichterman/)

