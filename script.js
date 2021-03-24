// Connects button to the function below.
document.getElementById('submit').addEventListener('click', years)

// Variable for the age that the user inputs.
let age = 0

function years () {
  age = document.getElementById('input').value
  // Takes value from the age input box and turns it into an integer instead of a symbol or character.
  age = parseInt(age)
  // If the age is equal to or more than 17, display the message below.
  if (age >= 17) {
    age = document.getElementById('reveal').innerHTML = 'You are old enough to see R-rated movies by yourself. But that also means you can watch any other movie on your own as well.'
  } else if (age >= 13) {
    // If the statement above is not true but the age is equal to or more than 13, display the message below.
    age = document.getElementById('reveal').innerHTML = 'You are old enough to watch PG-13 movies by yourself. You are not old enough to see R-rated movies yet. You must be 17 to watch R-rated movies.'
  } else if (age >= 5) {
    // If the statement above is still false but the age is equal to or more than 5, display the message below.
    age = document.getElementById('reveal').innerHTML = 'You are only old enough to watch G-rated movies by yourself. You are too young to watch PG-13 or R-rated movies.'
  } else {
    // Otherwise, if none of the statements above are true, display the message below in an alert.
    alert('You are too young to watch any movies. Please ensure that your age is accurately reported.')
  }
  // This message will show up no mattter which statement is true or false, as long as the button is clicked.
  document.getElementById('thanks').innerHTML = 'Thanks for verifying your age! Have a great day!'
}
