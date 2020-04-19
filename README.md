# Build An End-to-End E-R Data Analysis Workflow
***Disclaimer: This repository is public to showcase skills developed from this assignment. I am in no way reponsible for any academic integrity issues should any code be re-used or copied from any part of this assignment.**

## Motivation
This site was created to satisfy the requirements of an assignment in my `CSCE 411: Data Modeling for Systems Development` class at the University of Nebraska-Lincoln. The assignment was intended to help build the following skills:

* Build a web-based interactive data analysis system
* Understand the three types of data modeling techniques for database design

In real-world settings, a dataset may not be directly used with a relational database management system (RDBMS). Different datasets can be provided with different formats(e.g., text, binary, images, and so on). In order to use these datasets in RDBMS, data processing and modeling techniques are typically required. In this assignment, we were provided with a dataset in a zip archive file, and after decompression there were about 2,000 data files, named from record_000000.datto to record_001999.dat. Each data file corresponds to a synthesized record containing User ID, User Name, User Location, Number of Messages, and Message information (Send Time and Send Text) in a binary format. After processing these datasets, we were instructed to conceptually, logically, and physically model the data. From there, we added the data to a PostgreSQL database and created a web interface that displays the results of four required database queries.

![](End-to-EndAppDemo.gif)

## Technologies
### Data Preprocessing
* C
### Back-End
* Node.js
    * [Express.js](https://expressjs.com/)
* PostgreSQL
    * [node-postgres](https://node-postgres.com/)
    * [pgAdmin 4](https://www.pgadmin.org/download/)
### Front-End
* JavaScript
* HTML
* CSS

## Getting Started
In order to use the application locally, you'll need to do a few things first.

1. Clone this repository and `cd` into the repository's directory
```
git clone https://github.com/msichterman/CSCE411-Assignment4-DataAnalysisWorkflow.git && cd ./CSCE411-Assignment4-DataAnalysisWorkflow
```

2. Install all of the `node_modules` required for the project. Depending on your computer's configuration, you may need to prefix this command with a `sudo`.
```
npm install
```
or
```
sudo npm install
```

3. Lastly, run the following command to get the project off the ground. This command will not only build your JS files, but it will also auto-compile your files on every file save. This allows for hot reloading on-save when the backend and/or frontend code is updated.

```
npm run start
```

4. Head over to [http://localhost:3000](http://localhost:3000) to see the application live!

## Data Preprocessing
The data for this assignment was provided in a zip archive file (Assignment4_Dataset_Code.zip). After decompression, there are about 2,000 data files, named from record_000000.dat to record_001999.dat. Each data file corresponds to a synthesized record containing User ID, User Name, User Location, Number of Messages, and Message information (Send Time and Send Text) in a binary format. In order to import this data, we had to preprocess it into .csv files, where each file represents a table in our database, namely ```user``` and ```message```. We were given a few C language files as the code stubs for the assignment and the files were able to read in the data from the binary files and print the data from each file. We extended this functionality by creating the .csv files and adding the necessary information to each. These files could then be imported into our PostgreSQL database. These are the steps to run the preprocessing code:
1. ```cd``` into the ```Assignment4_Dataset_Code``` folder.
* ```cd Assignment4_Dataset_Code```

2. A makefile was generated in order to simplify the build process:
* ```make read_record``` - builds the ```read_record``` executable which prints the contents of a specified record.
   * ```./read_record <record_number>``` - For example, running ```./read_record 999``` will print the record of User ID: 999. The program also shows the processing time at the end of its output.
* ```make process_record``` - builds the ```process_record``` executable which we modified to generate the .csv files for each of our tables given a range of records.
   * ```./process_record <start_record_number> <end_record_number>``` - For example, running ```./process_record 14 223``` simply goes through all records from 14 to 223 and generates the .csv files.
* ```make distclean``` - removes the exectutables from the directory

3. Process all records from 0 to 1999 to generate the .csv files for our user and message tables.
* ```make process_record && ./process_record 0 1999```

4. The .csv files are generated and ready to be imported to PostgresSQL

## Importing Assignment4Dump.sql to Create the Database
### Installation
If you’re using Windows, download a [Windows installer](https://www.postgresql.org/download/windows/) of PostgreSQL.

If you’re using a Mac, this tutorial assumes you have [Homebrew](https://brew.sh/) installed on your computer as a package manager for installing new programs. If you don’t, simply click on the link and follow the instructions to install Homebrew.

Open up the Terminal and install ```postgresql``` with ```brew```.
```
brew install postgresql
```
After the installation is complete, we’ll want to get the ```postgresql``` up and running, which we can do with ```services start```.
```
brew services start postgresql
==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)
```
If at any point you want to stop the ```postgresql``` service, you can run ```brew services stop postgresql```.

PostgreSQL is installed now, so the next step is to connect to the postgres command line, where we can run SQL commands to import the database.

**Note:** This installation guide was found [here](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/), much thanks to the [author](http://tania.dev).

### Importing the Database with the PostgreSQL Command Prompt
1. Start PostgreSQL using the command ```psql```
2. Create a new database called ```assignment4``` using the command ```CREATE DATABASE assignment4;```
3. Connect to the created database using the command ```\c assignment4```
4. Insert the contents of the ```Assignment4CompleteDump.sql``` file into the new database using the command:
```
\i /<PATH TO LOCAL REPO>/CSCE411-Assignment4-DataAnalysisWorkflow/Assignment4_Dataset_Code/Assignment4CompleteDump.sql
```
   * **Note:** This may take a few minutes since there are over 98,000 message records
5. Now the database should be populated and running, head over to the web application to see the queries in action

## Get In Touch
* Follow me on [Twitter](https://twitter.com/mattsichterman)
* Connect with me on [LinkedIn](https://www.linkedin.com/in/msichterman/)

