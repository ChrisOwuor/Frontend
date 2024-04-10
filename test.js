const dates = [
  "2024-04-29T14:45:58.482711Z",
  "2024-08-29T16:34:20.832037Z",
  "2024-09-29T17:20:06.999165Z",
  "2024-03-29T17:21:47.089467Z",
];

// Initialize an array with zeros for each month
const new_array = Array.from({ length: 12 }, () => 0);

// Iterate over the dates array
dates.forEach((dateString) => {
  const monthIndex = new Date(dateString).getMonth(); // Get the month index (0-11)
  new_array[monthIndex]++; // Increment the count for the corresponding month
});

console.log(new_array);
