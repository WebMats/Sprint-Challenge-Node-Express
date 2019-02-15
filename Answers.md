Q1. Mention two parts of Express that you learned about this week.

    Ans: 
        1. express.Router() allows us to split our API into sub API's that are reached through different routing paths.
        2. express.json() allows our API to transform incoming JSON requests into usable data.

Q2. Describe Middleware?

    Ans: Middleware is a piece of code that sits between the client and the API functionality finally, interprets the 
    client's request and gives them the relevant resources. Middleware can stop, mutate and/or simply pass the client's
    request to the next middleware.

Q3. Describe a Resource?
    
    Ans: A 'resource' is some piece of data that the client seeks in the back-end, usually stored in a DB, but can be a 
    function that lives in the back-end and does some computation (e.g. randomized salt for hashing in the front-end.)

Q4. What can the API return to help clients know if a request was successful?

    Ans: the API can return a status code in the 200s to let the client know the 
    request was successful.

Q5. How can we partition our application into sub-applications?

    Ans: We can breakup our application into moduler routes by making use of express.Router() in each of the sub files,
    and importing them in the main node file under different base paths. 