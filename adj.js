const adjectives = [
    { german: 'klein', correct: 'small', incorrect1: 'large', incorrect2: 'tall' },
    { german: 'groß', correct: 'big', incorrect1: 'small', incorrect2: 'narrow' },
    { german: 'alt', correct: 'old', incorrect1: 'young', incorrect2: 'new' },
    { german: 'neu', correct: 'new', incorrect1: 'old', incorrect2: 'ancient' },
    { german: 'hässlich', correct: 'ugly', incorrect1: 'beautiful', incorrect2: 'handsome' },
    { german: 'anders', correct: 'different', incorrect1: 'similar', incorrect2: 'identical' },
    { german: 'ähnlich', correct: 'similar', incorrect1: 'different', incorrect2: 'unrelated' },
    { german: 'schön', correct: 'pretty', incorrect1: 'ugly', incorrect2: 'plain' },
    { german: 'gesund', correct: 'healthy', incorrect1: 'sick', incorrect2: 'ill' },
    { german: 'krank', correct: 'sick', incorrect1: 'healthy', incorrect2: 'well' },
    { german: 'langsam', correct: 'slow', incorrect1: 'fast', incorrect2: 'quick' },
    { german: 'sauber', correct: 'clean', incorrect1: 'dirty', incorrect2: 'messy' },
    { german: 'dreckig', correct: 'dirty', incorrect1: 'clean', incorrect2: 'neat' },
    { german: 'schnell', correct: 'fast', incorrect1: 'slow', incorrect2: 'sluggish' },
    { german: 'arm', correct: 'poor', incorrect1: 'rich', incorrect2: 'wealthy' },
    { german: 'reich', correct: 'rich', incorrect1: 'poor', incorrect2: 'broke' },
    { german: 'schwach', correct: 'weak', incorrect1: 'strong', incorrect2: 'powerful' },
    { german: 'stark', correct: 'strong', incorrect1: 'weak', incorrect2: 'fragile' },
    { german: 'flach', correct: 'flat', incorrect1: 'deep', incorrect2: 'steep' },
    { german: 'tief', correct: 'deep', incorrect1: 'shallow', incorrect2: 'superficial' },
    { german: 'breit', correct: 'broad', incorrect1: 'narrow', incorrect2: 'slim' },
    { german: 'einfach', correct: 'easy', incorrect1: 'difficult', incorrect2: 'complex' },
    { german: 'schwierig', correct: 'difficult', incorrect1: 'easy', incorrect2: 'simple' },
    { german: 'früh', correct: 'early', incorrect1: 'late', incorrect2: 'tardy' },
    { german: 'spät', correct: 'late', incorrect1: 'early', incorrect2: 'timely' },
    { german: 'gemütlich', correct: 'cozy', incorrect1: 'uncomfortable', incorrect2: 'cold' },
    { german: 'klar', correct: 'clear', incorrect1: 'cloudy', incorrect2: 'murky' },
    { german: 'laut', correct: 'loud', incorrect1: 'quiet', incorrect2: 'soft' },
    { german: 'leise', correct: 'quiet', incorrect1: 'loud', incorrect2: 'noisy' },
    { german: 'natürlich', correct: 'natural', incorrect1: 'artificial', incorrect2: 'synthetic' },
    { german: 'warm', correct: 'warm', incorrect1: 'cold', incorrect2: 'cool' },
    { german: 'kalt', correct: 'cold', incorrect1: 'warm', incorrect2: 'hot' },
    { german: 'gut', correct: 'good', incorrect1: 'bad', incorrect2: 'poor' },
    { german: 'schlecht', correct: 'bad', incorrect1: 'good', incorrect2: 'terrible' },
    { german: 'toll', correct: 'great', incorrect1: 'awful', incorrect2: 'mediocre' },
    { german: 'wundervoll', correct: 'wonderful', incorrect1: 'terrible', incorrect2: 'horrible' },
    { german: 'cool', correct: 'cool', incorrect1: 'uncool', incorrect2: 'lame' },
    { german: 'fein', correct: 'fine', incorrect1: 'rough', incorrect2: 'coarse' },
    { german: 'mittelmäßig', correct: 'mediocre', incorrect1: 'excellent', incorrect2: 'outstanding' },
    { german: 'durchschnittlich', correct: 'average', incorrect1: 'extraordinary', incorrect2: 'unique' },
    { german: 'anständig', correct: 'decent', incorrect1: 'disgraceful', incorrect2: 'shameful' },
    { german: 'furchtbar', correct: 'awful', incorrect1: 'great', incorrect2: 'fantastic' },
    { german: 'schrecklich', correct: 'terrible', incorrect1: 'pleasant', incorrect2: 'lovely' },
    { german: 'grottenschlecht', correct: 'abysmal', incorrect1: 'excellent', incorrect2: 'fantastic' },
    { german: 'wahnsinnig', correct: 'amazing', incorrect1: 'boring', incorrect2: 'dull' },
    { german: 'fantastisch', correct: 'fantastic', incorrect1: 'mediocre', incorrect2: 'terrible' },
    { german: 'phänomenal', correct: 'phenomenal', incorrect1: 'average', incorrect2: 'ordinary' },
    { german: 'unglaublich', correct: 'incredible', incorrect1: 'believable', incorrect2: 'credible' },
    { german: 'außergewöhnlich', correct: 'exceptional', incorrect1: 'ordinary', incorrect2: 'common' },
    { german: 'exzellent', correct: 'excellent', incorrect1: 'poor', incorrect2: 'average' },
    { german: 'super', correct: 'super', incorrect1: 'mediocre', incorrect2: 'average' },
    { german: 'perfekt', correct: 'perfect', incorrect1: 'flawed', incorrect2: 'imperfect' },
    { german: 'glücklich', correct: 'happy', incorrect1: 'sad', incorrect2: 'miserable' },
    { german: 'traurig', correct: 'sad', incorrect1: 'happy', incorrect2: 'joyful' },
    { german: 'nervös', correct: 'nervous', incorrect1: 'calm', incorrect2: 'relaxed' },
    { german: 'entspannt', correct: 'relaxed', incorrect1: 'tense', incorrect2: 'nervous' },
    { german: 'froh', correct: 'glad', incorrect1: 'sad', incorrect2: 'unhappy' },
    { german: 'fröhlich', correct: 'joyful', incorrect1: 'miserable', incorrect2: 'depressed' },
    { german: 'verliebt', correct: 'in love', incorrect1: 'angry', incorrect2: 'indifferent' },
    { german: 'aufgeregt', correct: 'excited', incorrect1: 'bored', incorrect2: 'apathetic' },
    { german: 'überrascht', correct: 'surprised', incorrect1: 'expectant', incorrect2: 'predictable' },
    { german: 'begeistert', correct: 'thrilled', incorrect1: 'uninterested', incorrect2: 'displeased' },
    { german: 'entzückt', correct: 'delighted', incorrect1: 'displeased', incorrect2: 'annoyed' },
    { german: 'euphorisch', correct: 'euphoric', incorrect1: 'depressed', incorrect2: 'apathetic' },
    { german: 'zufrieden', correct: 'satisfied', incorrect1: 'discontent', incorrect2: 'dissatisfied' },
    { german: 'friedlich', correct: 'peaceful', incorrect1: 'chaotic', incorrect2: 'angry' },
    { german: 'genervt', correct: 'irritated', incorrect1: 'calm', incorrect2: 'pleased' },
    { german: 'wütend', correct: 'angry', incorrect1: 'calm', incorrect2: 'content' },
    { german: 'rasend', correct: 'furious', incorrect1: 'calm', incorrect2: 'composed' },
    { german: 'eifersüchtig', correct: 'jealous', incorrect1: 'content', incorrect2: 'satisfied' },
    { german: 'verzweifelt', correct: 'desperate', incorrect1: 'hopeful', incorrect2: 'content' },
    { german: 'besorgt', correct: 'worried', incorrect1: 'carefree', incorrect2: 'unconcerned' },
    { german: 'ruhig', correct: 'calm', incorrect1: 'anxious', incorrect2: 'nervous' },
    { german: 'nüchtern', correct: 'sober', incorrect1: 'drunk', incorrect2: 'intoxicated' },
    { german: 'dunkel', correct: 'dark', incorrect1: 'light', incorrect2: 'bright' },
    { german: 'hell', correct: 'bright', incorrect1: 'dark', incorrect2: 'dim' },
    { german: 'kalt', correct: 'cold', incorrect1: 'warm', incorrect2: 'hot' },
    { german: 'fett', correct: 'fat', incorrect1: 'thin', incorrect2: 'skinny' },
    { german: 'dünn', correct: 'thin', incorrect1: 'fat', incorrect2: 'chubby' },
    { german: 'toll', correct: 'great', incorrect1: 'awful', incorrect2: 'terrible' },
    { german: 'lästig', correct: 'annoying', incorrect1: 'pleasant', incorrect2: 'enjoyable' }
];


let currentVerbIndex = 0;
let shuffledOptions = [];

function startGame() {
    currentVerbIndex = 0;
    showVerb();
}


function showVerb() {
    const verb = adjectives[currentVerbIndex];
    const options = shuffleOptions([verb.correct, verb.incorrect1, verb.incorrect2]);

    document.getElementById('verb-display').innerText = `What is the meaning of "${verb.german}"?`;
    document.getElementById('option1').innerText = options[0];
    document.getElementById('option2').innerText = options[1];
    document.getElementById('option3').innerText = options[2];
    
    shuffledOptions = options;
    document.getElementById('next-button').disabled = true;
    document.getElementById('feedback').innerText = '';
}

function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}



function checkAnswer(optionIndex) {
    const verb = adjectives[currentVerbIndex];
    const selectedOption = shuffledOptions[optionIndex - 1];
    const feedback = selectedOption === verb.correct ? 'Correct!' : 'Incorrect!';
    
    document.getElementById('feedback').innerText = feedback;
    document.getElementById('next-button').disabled = false;
}

function nextVerb() {
    currentVerbIndex++;
    if (currentVerbIndex < adjectives.length) {
        showVerb();
    } else {
        document.getElementById('verb-display').innerText = 'You have completed the game!';
        document.getElementById('options').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    startGame();
});
