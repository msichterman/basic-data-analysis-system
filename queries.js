const Pool = require("pg").Pool;

// Sets up the credentials to access the database
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "assignment4",
  password: null,
  port: 5432,
});

// First required query
const getUsersNebraska = (request, response) => {
  pool.query(
    `SELECT * from "user"
     WHERE "user"."User Location" LIKE '%' || 'Nebraska' || '%'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Second required query
const getUsersSent = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    `SELECT DISTINCT message."User ID" FROM message
     WHERE message."Send Time" BETWEEN '08:00:00' AND '09:00:00'
     ORDER BY message."User ID" ASC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Third required query
const getUsersSentNebraska = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    `SELECT DISTINCT "user"."User ID", "user"."User Name"
     FROM "user" NATURAL JOIN message
     WHERE "user"."User Location" LIKE '%' || 'Nebraska' || '%'
     AND message."Send Time" BETWEEN '08:00:00' AND '09:00:00'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Fourth requried query
const getMaxSentNebraska = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    `SELECT "user"."User ID", COUNT("user"."User ID") AS "Message Count"
     FROM "user" NATURAL JOIN message 
     WHERE "user"."User Location" LIKE '%' || 'Nebraska' || '%' AND message."Send Time" BETWEEN '08:00:00' AND '09:00:00'
     GROUP  BY "user"."User ID"
     ORDER  BY "Message Count" DESC`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getUsersNebraska,
  getUsersSent,
  getUsersSentNebraska,
  getMaxSentNebraska,
};
