const quotes = [
    "...the inferno where we live every day, that we form by being together. There are two ways to escape suffering it. \n\nThe first is easy for many: accept the inferno and become such a part of it that you can no longer see it. The second is risky and demands constant vigilance and apprehension: seek and learn to recognize who and what, in the midst of the inferno, are not inferno, then make them endure, give them space.",
    "I loved New York, with that powerful love that sometimes leaves you full of uncertainties and hatred: sometimes one needs exile. \n\nAnd then the very smell of New York rain tracks you down in the heart of the most harmonious and familiar towns, to remind you there is at least one place of deliverance in the world, where you, together with a whole people and for as long as you want, can finally lose yourself forever.",
    "The longing for order is at the same time a longing for death, because life is an incessant disruption of order.",
    "As a woman, I can't go to war, and I refuse to send anyone else.",
    "We live but for a short time, we see but very little, and we know almost nothing; so, at least, let's do some dreaming. \n\nHave yourself a very good Sunday, my dear readers.",
    "To love and be loved is to feel the sun from both sides.",
    "A man in his life has no time to have \n time for everything.\n He has no room to have room \n for every desire. Ecclesiastes was wrong to say that. \n\n A man has to hate and love all at once,\n with the same eyes to cry and to laugh, \nwith the same hands to throw stones \nand to gather them, \nto make love in war and war in love.",
    "Only in books have I lived, and my country is the country of the mind.",
    "I just kept on dancing.\nThat was the way I saw it. \n\n You’ve got to dance as long as the music plays.",
    "I am free and that is why I am lost.",
    "You must trust and believe in people or life becomes impossible; you must show life not as it is, but as it should be."
];

const colors = [
    "#f3c039", // Orange
    "#cbe622", // green
    "#c7b0ff", //purple
    "#90be6d", // Light Green
    "#b6d5df",
    "#86b0fc",
    "#a0d6e0",
    "#fcf3e3",//eggshell
    "#eddde2",//light grey
    "#84c8fa",//blue
    "#d8e6ff",//light blue
    "#fbe449"//yellow
];
const authorImages = [
    "ic copy.png", // Image path for the first author
    "ac.png", // Image path for the second author
    "mk.png", // Image path for the third author
    "jr.png", // Image path for the fourth author
    "fp.png",
    "ds.png", // Image path for the fifth author
    "ya.png",
    "sz.png", // Image path for the sixth author
    "mu.png", // Image path for the seventh author
    "kfk.png", // Image path for the eighth author
    "chekov.png"  // Image path for the ninth author
];
const authorNames = [
    "- Italo Calvino", // Image path for the first author
    "- Albert Camus", // Image path for the second author
    "- Milan Kundera", // Image path for the third author
    "- Jeannette Rankin", // Image path for the fourth author
    "- Fernando Pessoa", // Image path for the fifth author
    "- David Viscott", // Image path for the sixth author
    "- Yehuda Amichai", // Image path for the seventh author
    "- Stefan Zweig", // Image path for the eighth author
    "- Haruki Murakami",
    "- Franz Kafka",
    "- Anton Chekhov"  // Image path for the ninth author
];
let currentQuoteIndex = 0;

function changeQuoteAndColor() {
    const lyricsContainer = document.getElementById("lyricsContainer");
    const authorName = document.getElementById("authorName");
    const authorImage = document.getElementById("authorImage");

    // Change the quote
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
    }
    lyricsContainer.querySelector('.quotetext').innerText = quotes[currentQuoteIndex];

    // Change the background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    lyricsContainer.style.backgroundColor = randomColor;
    authorImage.src = authorImages[currentQuoteIndex];
    authorName.innerText = authorNames[currentQuoteIndex];
}

