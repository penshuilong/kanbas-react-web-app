function Add({ a, b }) {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";




  // Make the request using fetch
  fetch(url)
   .then(response => {
     // Check if the request was successful (status code 200)
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
     // Parse the JSON data
     return response.json();
   })
   .then(data => {
     // Log the data to the console
     console.log(data);
   })
   .catch(error => {
     // Log any errors to the console
     console.error('Fetch error:', error);
   });
 
    return (
      <div>
        <h2>Add</h2>
        <p>
          {a} + {b} = {a + b}
        </p>
      </div>
    );
  }
  export default Add;