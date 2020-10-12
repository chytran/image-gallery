// Array 1
var url = [
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Jerry.jpg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Kareem.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Magic.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Shaq.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Kobe.jpeg",
  "https://cis3110-01.s3-us-west-1.amazonaws.com/Assignment+2/Lebron.jpeg",
];
// Array 2
var title = [
    "Jerry West",
    "Kareem Abdul-Jabbar",
    "Magic Johnson",
    "Shaquille O'Neal",
    "Kobe Bryant",
    "LeBron James",
];
// Array 3
var sentences = [
    "Jerry West was a phenomenal basketball player. He brought Los Angeles Lakers their first title in 1972. Eventually, he became famously known as the NBA Logo.",
    "Kareem Abdul-Jabbar was one of the best centers in the game. He came to the Lakers in 1975 and guided them to 5 championships. He is currently first on the all time scoring list.",
    "Magic Johnson is the greatest point guard in NBA history. He brought 5 NBA Championships to Los Angeles. He currently advises the Lakers and owns a part of the Dodgers.",
    "Shaquille O'Neal was a dominant force in the NBA. When he joined the Lakers in 1996 he brought 3 Championships during his tenure. Shaq is now an entrepreneur who owns multiple businessess.",
    "Kobe Bryant is the greatest Laker player who ever played. Kobe has given the Lakers 5 championships and won many accolades. May Kobe Bryant's soul rest in peace for being an amazing athlete and person.",
    "Lebron James is currently the best player in the NBA. Ever since he has arrived to Los Angeles, he has only thing in mind. Now that he has won the 2020 NBA Championship for the Lakers his mission has been fulfilled."
]

function start (url, title) {
    for (i = 0; i < url.length; i++) {
        console.log(title[i] + ": " + url[i]);
    }
}

start(url, title);