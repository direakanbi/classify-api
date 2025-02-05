# Classify API

This project is a RESTful API built with Node.js and Express that takes a number as input and returns interesting mathematical properties about it, along with a fun fact. The API provides information such as whether the number is prime, perfect, or an Armstrong number, its parity, the sum of its digits, and a fun mathematical fact.

## Features

- **Mathematical Properties**: Determine if a number is prime, perfect, or an Armstrong number.
- **Digit Sum Calculation**: Calculate the sum of the digits of a number.
- **Parity Check**: Check if a number is even or odd.
- **Fun Facts**: Retrieve a fun mathematical fact about the number from an external API.

## Technologies Used

- Node.js
- Express
- CORS
- Fetch API
- Async/Await for asynchronous operations

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/direakanbi/classify-api.git
   cd classify-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following line:
   ```plaintext
   NUMBERS_API_URI=https://numbersapi.com
   ```

4. **Start the server**:
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:8000` (or the port specified in your environment).

## API Endpoints

### `GET /classify-api`

This endpoint takes a number as a query parameter and returns its mathematical properties and a fun fact.

#### Query Parameters

- `number`: The number to classify (required).

#### Example Request

```http
GET http://localhost:8000/classify-api?number=5
```

#### Example Response

```json
{
    "number": 5,
    "is_prime": true,
    "is_perfect": false,
    "properties": ["odd"],
    "digit_sum": 5,
    "fun_fact": "5 is a prime number."
}
```

#### Error Responses

- **400 Bad Request**: If the input is not a valid number.
  
```json
{
    "number": "abc",
    "error": true
}
```

- **500 Internal Server Error**: If there is an issue fetching the fun fact.

```json
{
    "message": "Internal Server Error",
    "error": true
}
```

## Testing

You can test the API using tools like Postman or curl. Make sure to provide a valid number as a query parameter.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Numbers API](http://numbersapi.com/) - A great source for fun facts about numbers.
