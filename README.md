# **Shapebox Backend Readme**

## Prerequisites

  * Dependencies

    ```zh
      npm install body-parser
      npm install cors
      npm install dotenv
      npm install express
      npm install mongoose
      npm install nodemon
    ```

## How to Use

  * Access all shapes saved in db with `GET` request to `http://localhost:4000/shapes`
  * Access a single shape saved in db with `GET` request to `http://localhost:4000/shapes/:id`
  * Save shape to db with `POST` request to `http://localhost:4000/shapes/`
  * Update an existing shape saved in db with `PUT` request to `http://localhost:4000/shapes/:id`