//fizzbuzz
const line = (i) => {return document.write("<li>" + i + "</li>")};
for(i = 1; i <= 100; i++){
  if(i % 15 == 0) line("FizzBuzz");
  else if(i % 3 == 0) line("Fizz");
  else if (i % 5 == 0) line("Buzz");
  else line(i);
}
