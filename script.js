document.getElementById('submit').addEventListener('click', years)

let age = 0

function years () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >=17) {
    age = document.getElementById('reveal').innerHTML = 'You are old enough to see R-rated movies by yourself. But that also means you can watch any other movie on your own as well.'
  } 
  else if (age >=13) {
    age = document.getElementById('reveal').innerHTML = 'You are old enough to watch PG-13 movies by yourself. You are not old enough to see R-rated movies yet. You must be 17 to watch R-rated movies.'
  }
  else if (age >=5) {
    age =  document.getElementById('reveal').innerHTML = 'You are only old enough to watch G-rated movies by yourself. You are too young to watch PG-13 or R-rated movies.'
  }
  else {
    alert('You are too young to watch any movies. Please ensure that your age is accurately reported.')
  }
  document.getElementById('thanks').innerHTML = 'Thanks for verifying your age! Have a great day!'
}
