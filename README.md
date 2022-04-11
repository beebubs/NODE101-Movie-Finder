# NODE101-Movie-Finder-Data


The purpose of this project was to create a server that would make requests to the OMDB API and show the user the selected movie data. If a previous request was made for the same movie, then the data would be retrieved from the cache instead of making the API call again.

Steps Taken: 

1. Created a server using the Express framework
2. Logged all incoming requests with the morgan logging library
3. Created an .env file to store my API key
4. Accepted requests for the Open Movie DataBase (OMDB) API
5. Made the requests to the OMDB using the axios library
6. Cached, or stored, the responses for subsequent requests
7. Ensured the data is updated at least once a day
