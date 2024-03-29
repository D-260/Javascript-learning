JavaScript can send network requests to the server and load new information whenever it’s needed.

For example, we can use a network request to:

    Submit an order,
    Load user information,
    Receive latest updates from the server,…etc.
…And all of that without reloading the page!

There are multiple ways to send a network request and get information from the server.

The fetch() method is modern and versatile, so we’ll start with it. It’s not supported by old browsers (can be polyfilled), but very well supported among the modern ones.
fetch() can both send and load data from server. 

To get this data, i.e. response from the server, two steps are involved.
First, we will call fetch and enter the url from where we want data.
Then a response will be generated by server after the server responds to the header(metadata)

This data can be of various data types and thus we'll have to specify it: 
It can be blob(image), array buffer, JSON, text, formdata.
And they are represented as response.blob, response.arraybuffer, etc.
