const verbs = [
    { german: 'sein', correct: 'to be', incorrect1: 'to have', incorrect2: 'to see' },
    { german: 'haben', correct: 'to have', incorrect1: 'to be', incorrect2: 'to go' },
    { german: 'werden', correct: 'to become', incorrect1: 'to stay', incorrect2: 'to eat' },
    { german: 'können', correct: 'can', incorrect1: 'to know', incorrect2: 'to think' },
    { german: 'müssen', correct: 'must', incorrect1: 'to want', incorrect2: 'to give' },
    { german: 'sagen', correct: 'to say', incorrect1: 'to take', incorrect2: 'to read' },
    { german: 'machen', correct: 'to make', incorrect1: 'to speak', incorrect2: 'to find' },
    { german: 'geben', correct: 'to give', incorrect1: 'to get', incorrect2: 'to lose' },
    { german: 'kommen', correct: 'to come', incorrect1: 'to go', incorrect2: 'to send' },
    { german: 'sollen', correct: 'should', incorrect1: 'to know', incorrect2: 'to take' },
    { german: 'wollen', correct: 'to want', incorrect1: 'to run', incorrect2: 'to stop' },
    { german: 'gehen', correct: 'to go', incorrect1: 'to make', incorrect2: 'to show' },
    { german: 'wissen', correct: 'to know', incorrect1: 'to hear', incorrect2: 'to wait' },
    { german: 'sehen', correct: 'to see', incorrect1: 'to talk', incorrect2: 'to buy' },
    { german: 'lassen', correct: 'to let', incorrect1: 'to play', incorrect2: 'to use' },
    { german: 'stehen', correct: 'to stand', incorrect1: 'to put', incorrect2: 'to try' },
    { german: 'finden', correct: 'to find', incorrect1: 'to build', incorrect2: 'to understand' },
    { german: 'bleiben', correct: 'to stay', incorrect1: 'to leave', incorrect2: 'to start' },
    { german: 'liegen', correct: 'to lie', incorrect1: 'to sit', incorrect2: 'to throw' },
    { german: 'heißen', correct: 'to be called', incorrect1: 'to cook', incorrect2: 'to drive' },
    { german: 'denken', correct: 'to think', incorrect1: 'to feel', incorrect2: 'to listen' },
    { german: 'nehmen', correct: 'to take', incorrect1: 'to push', incorrect2: 'to climb' },
    { german: 'tun', correct: 'to do', incorrect1: 'to catch', incorrect2: 'to show' },
    { german: 'dürfen', correct: 'may', incorrect1: 'to drink', incorrect2: 'to run' },
    { german: 'glauben', correct: 'to believe', incorrect1: 'to explain', incorrect2: 'to wait' },
    { german: 'halten', correct: 'to hold', incorrect1: 'to break', incorrect2: 'to sleep' },
    { german: 'nennen', correct: 'to name', incorrect1: 'to search', incorrect2: 'to jump' },
    { german: 'mögen', correct: 'to like', incorrect1: 'to read', incorrect2: 'to think' },
    { german: 'zeigen', correct: 'to show', incorrect1: 'to find', incorrect2: 'to start' },
    { german: 'führen', correct: 'to lead', incorrect1: 'to follow', incorrect2: 'to choose' },
    { german: 'sprechen', correct: 'to speak', incorrect1: 'to work', incorrect2: 'to play' },
    { german: 'bringen', correct: 'to bring', incorrect1: 'to send', incorrect2: 'to touch' },
    { german: 'leben', correct: 'to live', incorrect1: 'to learn', incorrect2: 'to fall' },
    { german: 'fahren', correct: 'to drive', incorrect1: 'to walk', incorrect2: 'to fly' },
    { german: 'meinen', correct: 'to mean', incorrect1: 'to answer', incorrect2: 'to hear' },
    { german: 'fragen', correct: 'to ask', incorrect1: 'to tell', incorrect2: 'to receive' },
    { german: 'kennen', correct: 'to know', incorrect1: 'to send', incorrect2: 'to draw' },
    { german: 'gelten', correct: 'to apply', incorrect1: 'to count', incorrect2: 'to measure' },
    { german: 'stellen', correct: 'to place', incorrect1: 'to break', incorrect2: 'to help' },
    { german: 'spielen', correct: 'to play', incorrect1: 'to sing', incorrect2: 'to call' },
    { german: 'arbeiten', correct: 'to work', incorrect1: 'to eat', incorrect2: 'to paint' },
    { german: 'brauchen', correct: 'to need', incorrect1: 'to buy', incorrect2: 'to sleep' },
    { german: 'folgen', correct: 'to follow', incorrect1: 'to teach', incorrect2: 'to speak' },
    { german: 'lernen', correct: 'to learn', incorrect1: 'to run', incorrect2: 'to read' },
    { german: 'bestehen', correct: 'to pass', incorrect1: 'to fail', incorrect2: 'to lose' },
    { german: 'verstehen', correct: 'to understand', incorrect1: 'to ignore', incorrect2: 'to break' },
    { german: 'setzen', correct: 'to set', incorrect1: 'to catch', incorrect2: 'to move' },
    { german: 'bekommen', correct: 'to get', incorrect1: 'to give', incorrect2: 'to hold' },
    { german: 'beginnen', correct: 'to begin', incorrect1: 'to end', incorrect2: 'to continue' },
    { german: 'erklären', correct: 'to explain', incorrect1: 'to question', incorrect2: 'to demand' },
    { german: 'entsprechen', correct: 'to correspond', incorrect1: 'to deviate', incorrect2: 'to diverge' },
    { german: 'schreiben', correct: 'to write', incorrect1: 'to read', incorrect2: 'to listen' },
    { german: 'laufen', correct: 'to run', incorrect1: 'to walk', incorrect2: 'to fly' },
    { german: 'scheinen', correct: 'to shine', incorrect1: 'to dim', incorrect2: 'to glow' },
    { german: 'fallen', correct: 'to fall', incorrect1: 'to climb', incorrect2: 'to stand' },
    { german: 'gehören', correct: 'to belong', incorrect1: 'to leave', incorrect2: 'to arrive' },
    { german: 'entstehen', correct: 'to arise', incorrect1: 'to vanish', incorrect2: 'to cease' },
    { german: 'erhalten', correct: 'to receive', incorrect1: 'to send', incorrect2: 'to give' },
    { german: 'treffen', correct: 'to meet', incorrect1: 'to miss', incorrect2: 'to hit' },
    { german: 'suchen', correct: 'to search', incorrect1: 'to find', incorrect2: 'to show' },
    { german: 'legen', correct: 'to lay', incorrect1: 'to stand', incorrect2: 'to throw' },
    { german: 'vorstellen', correct: 'to imagine', incorrect1: 'to remember', incorrect2: 'to forget' },
    { german: 'handeln', correct: 'to act', incorrect1: 'to pause', incorrect2: 'to wait' },
    { german: 'erreichen', correct: 'to reach', incorrect1: 'to miss', incorrect2: 'to lose' },
    { german: 'tragen', correct: 'to carry', incorrect1: 'to drop', incorrect2: 'to throw' },
    { german: 'schaffen', correct: 'to create', incorrect1: 'to destroy', incorrect2: 'to remove' },
    { german: 'lesen', correct: 'to read', incorrect1: 'to write', incorrect2: 'to speak' },
    { german: 'verlieren', correct: 'to lose', incorrect1: 'to find', incorrect2: 'to win' },
    { german: 'darstellen', correct: 'to represent', incorrect1: 'to exclude', incorrect2: 'to simplify' },
    { german: 'erkennen', correct: 'to recognize', incorrect1: 'to forget', incorrect2: 'to ignore' },
    { german: 'entwickeln', correct: 'to develop', incorrect1: 'to halt', incorrect2: 'to regress' },
    { german: 'reden', correct: 'to talk', incorrect1: 'to listen', incorrect2: 'to sing' },
    { german: 'aussehen', correct: 'to look', incorrect1: 'to sound', incorrect2: 'to smell' },
    { german: 'bilden', correct: 'to form', incorrect1: 'to break', incorrect2: 'to ignore' },
    { german: 'warten', correct: 'to wait', incorrect1: 'to hurry', incorrect2: 'to delay' },
    { german: 'vergehen', correct: 'to pass', incorrect1: 'to remain', incorrect2: 'to start' },
    { german: 'helfen', correct: 'to help', incorrect1: 'to hinder', incorrect2: 'to avoid' },
    { german: 'gewinnen', correct: 'to win', incorrect1: 'to lose', incorrect2: 'to draw' },
    { german: 'schließen', correct: 'to close', incorrect1: 'to open', incorrect2: 'to find' },
    { german: 'fühlen', correct: 'to feel', incorrect1: 'to ignore', incorrect2: 'to think' },
    { german: 'bieten', correct: 'to offer', incorrect1: 'to take', incorrect2: 'to steal' },
    { german: 'interessieren', correct: 'to interest', incorrect1: 'to bore', incorrect2: 'to tire' },
    { german: 'erinnern', correct: 'to remember', incorrect1: 'to forget', incorrect2: 'to ignore' },
    { german: 'ergeben', correct: 'to result in', incorrect1: 'to avoid', incorrect2: 'to mislead' },
    { german: 'anbieten', correct: 'to offer', incorrect1: 'to refuse', incorrect2: 'to demand' },
    { german: 'studieren', correct: 'to study', incorrect1: 'to teach', incorrect2: 'to learn' },
    { german: 'verbinden', correct: 'to connect', incorrect1: 'to separate', incorrect2: 'to distinguish' },
    { german: 'ansehen', correct: 'to look at', incorrect1: 'to avoid', incorrect2: 'to touch' },
    { german: 'fehlen', correct: 'to miss', incorrect1: 'to hit', incorrect2: 'to find' },
    { german: 'bedeuten', correct: 'to mean', incorrect1: 'to sound', incorrect2: 'to appear' },
    { german: 'vergleichen', correct: 'to compare', incorrect1: 'to separate', incorrect2: 'to blend' },
    { german: 'leisten', correct: 'to achieve', incorrect1: 'to lose', incorrect2: 'to fail' },
    { german: 'brauchen', correct: 'to need', incorrect1: 'to discard', incorrect2: 'to refuse' },
    { german: 'laufen', correct: 'to run', incorrect1: 'to stop', incorrect2: 'to walk' },
    { german: 'bringen', correct: 'to bring', incorrect1: 'to take', incorrect2: 'to lose' },
    { german: 'denken', correct: 'to think', incorrect1: 'to forget', incorrect2: 'to ignore' },
    { german: 'halten', correct: 'to hold', incorrect1: 'to drop', incorrect2: 'to release' },
    { german: 'lassen', correct: 'to let', incorrect1: 'to prevent', incorrect2: 'to avoid' },
    { german: 'tun', correct: 'to do', incorrect1: 'to avoid', incorrect2: 'to neglect' },
    { german: 'arbeiten', correct: 'to work', incorrect1: 'to play', incorrect2: 'to rest' },
    { german: 'leben', correct: 'to live', incorrect1: 'to die', incorrect2: 'to leave' },
    { german: 'spielen', correct: 'to play', incorrect1: 'to work', incorrect2: 'to rest' },
    { german: 'suchen', correct: 'to search', incorrect1: 'to find', incorrect2: 'to ignore' },
    { german: 'bekommen', correct: 'to get', incorrect1: 'to lose', incorrect2: 'to give' },
    { german: 'verstehen', correct: 'to understand', incorrect1: 'to confuse', incorrect2: 'to misunderstand' },
        { german: 'bringen', correct: 'to bring', incorrect1: 'to take', incorrect2: 'to give' },
        { german: 'denken', correct: 'to think', incorrect1: 'to know', incorrect2: 'to guess' },
        { german: 'fahren', correct: 'to drive', incorrect1: 'to walk', incorrect2: 'to fly' },
        { german: 'finden', correct: 'to find', incorrect1: 'to lose', incorrect2: 'to search' },
        { german: 'fliegen', correct: 'to fly', incorrect1: 'to run', incorrect2: 'to swim' },
        { german: 'helfen', correct: 'to help', incorrect1: 'to hinder', incorrect2: 'to ignore' },
        { german: 'lassen', correct: 'to let', incorrect1: 'to forbid', incorrect2: 'to take' },
        { german: 'liegen', correct: 'to lie (down)', incorrect1: 'to stand', incorrect2: 'to sit' },
        { german: 'nehmen', correct: 'to take', incorrect1: 'to give', incorrect2: 'to drop' },
        { german: 'sehen', correct: 'to see', incorrect1: 'to hear', incorrect2: 'to feel' },
        { german: 'sprechen', correct: 'to speak', incorrect1: 'to listen', incorrect2: 'to write' },
        { german: 'stehen', correct: 'to stand', incorrect1: 'to sit', incorrect2: 'to lie (down)' },
        { german: 'tragen', correct: 'to carry', incorrect1: 'to drop', incorrect2: 'to push' },
        { german: 'treffen', correct: 'to meet', incorrect1: 'to avoid', incorrect2: 'to call' },
        { german: 'trinken', correct: 'to drink', incorrect1: 'to eat', incorrect2: 'to sip' },
        { german: 'vergessen', correct: 'to forget', incorrect1: 'to remember', incorrect2: 'to ignore' },
        { german: 'verstehen', correct: 'to understand', incorrect1: 'to confuse', incorrect2: 'to misunderstand' },
        { german: 'waschen', correct: 'to wash', incorrect1: 'to dry', incorrect2: 'to dirty' },
        { german: 'bleiben', correct: 'to stay', incorrect1: 'to leave', incorrect2: 'to go' },
        { german: 'brechen', correct: 'to break', incorrect1: 'to fix', incorrect2: 'to make' },
        { german: 'brennen', correct: 'to burn', incorrect1: 'to extinguish', incorrect2: 'to heat' },
        { german: 'fallen', correct: 'to fall', incorrect1: 'to rise', incorrect2: 'to climb' },
        { german: 'fangen', correct: 'to catch', incorrect1: 'to throw', incorrect2: 'to release' },
        { german: 'fliehen', correct: 'to flee', incorrect1: 'to chase', incorrect2: 'to stay' },
        { german: 'geschehen', correct: 'to happen', incorrect1: 'to stop', incorrect2: 'to undo' },
        { german: 'gewinnen', correct: 'to win', incorrect1: 'to lose', incorrect2: 'to play' },
        { german: 'halten', correct: 'to hold', incorrect1: 'to drop', incorrect2: 'to release' },
        { german: 'heißen', correct: 'to be called', incorrect1: 'to say', incorrect2: 'to name' },
        { german: 'kennen', correct: 'to know (a person)', incorrect1: 'to meet', incorrect2: 'to see' },
        { german: 'laufen', correct: 'to run', incorrect1: 'to walk', incorrect2: 'to stop' },
        { german: 'leihen', correct: 'to lend', incorrect1: 'to borrow', incorrect2: 'to keep' },
        { german: 'lesen', correct: 'to read', incorrect1: 'to write', incorrect2: 'to draw' },
        { german: 'raten', correct: 'to guess', incorrect1: 'to know', incorrect2: 'to tell' },
        { german: 'riechen', correct: 'to smell', incorrect1: 'to taste', incorrect2: 'to see' },
        { german: 'rufen', correct: 'to call', incorrect1: 'to answer', incorrect2: 'to whisper' },
        { german: 'schlafen', correct: 'to sleep', incorrect1: 'to wake', incorrect2: 'to rest' },
        { german: 'schreiben', correct: 'to write', incorrect1: 'to read', incorrect2: 'to draw' },
        { german: 'schwimmen', correct: 'to swim', incorrect1: 'to sink', incorrect2: 'to dive' },
        { german: 'singen', correct: 'to sing', incorrect1: 'to speak', incorrect2: 'to hum' },
        { german: 'sitzen', correct: 'to sit', incorrect1: 'to stand', incorrect2: 'to lie (down)' },
        { german: 'springen', correct: 'to jump', incorrect1: 'to walk', incorrect2: 'to fall' },
        { german: 'stehlen', correct: 'to steal', incorrect1: 'to give', incorrect2: 'to borrow' },
        { german: 'sterben', correct: 'to die', incorrect1: 'to live', incorrect2: 'to recover' },
        { german: 'stinken', correct: 'to stink', incorrect1: 'to smell good', incorrect2: 'to be fragrant' },
        { german: 'streiten', correct: 'to argue', incorrect1: 'to agree', incorrect2: 'to converse' },
        { german: 'tragen', correct: 'to wear', incorrect1: 'to remove', incorrect2: 'to tear' },
        { german: 'vergessen', correct: 'to forget', incorrect1: 'to remember', incorrect2: 'to remind' },
        { german: 'verlieren', correct: 'to lose', incorrect1: 'to win', incorrect2: 'to find' },
        { german: 'wachsen', correct: 'to grow', incorrect1: 'to shrink', incorrect2: 'to remain' },
        { german: 'werfen', correct: 'to throw', incorrect1: 'to catch', incorrect2: 'to hold' },
        { german: 'ziehen', correct: 'to pull', incorrect1: 'to push', incorrect2: 'to drag' },
        { german: 'blasen', correct: 'to blow', incorrect1: 'to suck', incorrect2: 'to breathe' },
        { german: 'braten', correct: 'to roast', incorrect1: 'to boil', incorrect2: 'to steam' },
        { german: 'empfehlen', correct: 'to recommend', incorrect1: 'to advise against', incorrect2: 'to forbid' },
        { german: 'frieren', correct: 'to freeze', incorrect1: 'to melt', incorrect2: 'to warm' },
        { german: 'genießen', correct: 'to enjoy', incorrect1: 'to hate', incorrect2: 'to ignore' },
        { german: 'gießen', correct: 'to pour', incorrect1: 'to drink', incorrect2: 'to spill' },
        { german: 'hängen', correct: 'to hang', incorrect1: 'to drop', incorrect2: 'to place' },
        { german: 'heben', correct: 'to lift', incorrect1: 'to lower', incorrect2: 'to drop' },
        { german: 'klingen', correct: 'to sound', incorrect1: 'to be silent', incorrect2: 'to sing' },
        { german: 'laden', correct: 'to load', incorrect1: 'to unload', incorrect2: 'to carry' },
        { german: 'leiden', correct: 'to suffer', incorrect1: 'to enjoy', incorrect2: 'to heal' },
        { german: 'lügen', correct: 'to lie (not tell the truth)', incorrect1: 'to tell the truth', incorrect2: 'to joke' },
        { german: 'nennen', correct: 'to name', incorrect1: 'to call', incorrect2: 'to forget' },
        { german: 'pfeifen', correct: 'to whistle', incorrect1: 'to shout', incorrect2: 'to sing' },
        { german: 'rennen', correct: 'to run', incorrect1: 'to walk', incorrect2: 'to sit' },
        { german: 'schaffen', correct: 'to create', incorrect1: 'to destroy', incorrect2: 'to make' },
        { german: 'scheinen', correct: 'to shine', incorrect1: 'to dim', incorrect2: 'to flicker' },
        { german: 'schieben', correct: 'to push', incorrect1: 'to pull', incorrect2: 'to drag' },
        { german: 'schießen', correct: 'to shoot', incorrect1: 'to aim', incorrect2: 'to miss' },
        { german: 'schlagen', correct: 'to hit', incorrect1: 'to miss', incorrect2: 'to pat' },
        { german: 'schließen', correct: 'to close', incorrect1: 'to open', incorrect2: 'to lock' },
        { german: 'schneiden', correct: 'to cut', incorrect1: 'to sew', incorrect2: 'to tear' },
        { german: 'schreien', correct: 'to scream', incorrect1: 'to whisper', incorrect2: 'to sing' },
        { german: 'schweigen', correct: 'to be silent', incorrect1: 'to talk', incorrect2: 'to shout' },
        { german: 'senden', correct: 'to send', incorrect1: 'to receive', incorrect2: 'to deliver' },
        { german: 'sinken', correct: 'to sink', incorrect1: 'to float', incorrect2: 'to rise' },
        { german: 'springen', correct: 'to leap', incorrect1: 'to walk', incorrect2: 'to fall' },
        { german: 'steigen', correct: 'to climb', incorrect1: 'to descend', incorrect2: 'to stay' },
        { german: 'stoßen', correct: 'to push', incorrect1: 'to pull', incorrect2: 'to hit' },
        { german: 'streichen', correct: 'to paint', incorrect1: 'to erase', incorrect2: 'to scratch' },
        { german: 'tragen', correct: 'to bear', incorrect1: 'to drop', incorrect2: 'to hold' },
        { german: 'treten', correct: 'to step', incorrect1: 'to jump', incorrect2: 'to stand' },
        { german: 'verbieten', correct: 'to forbid', incorrect1: 'to allow', incorrect2: 'to suggest' },
        { german: 'verzeihen', correct: 'to forgive', incorrect1: 'to accuse', incorrect2: 'to blame' },
        { german: 'wachsen', correct: 'to wax', incorrect1: 'to wane', incorrect2: 'to melt' },
        { german: 'wenden', correct: 'to turn', incorrect1: 'to stay', incorrect2: 'to twist' },
        { german: 'werben', correct: 'to advertise', incorrect1: 'to hide', incorrect2: 'to sell' },
        { german: 'wiegen', correct: 'to weigh', incorrect1: 'to measure', incorrect2: 'to balance' },
        { german: 'werfen', correct: 'to cast', incorrect1: 'to catch', incorrect2: 'to place' },
        { german: 'ziehen', correct: 'to draw', incorrect1: 'to push', incorrect2: 'to sketch' },
        { german: 'zwingen', correct: 'to force', incorrect1: 'to allow', incorrect2: 'to help' },
        { german: 'biegen', correct: 'to bend', incorrect1: 'to straighten', incorrect2: 'to twist' },
        { german: 'bitten', correct: 'to ask', incorrect1: 'to answer', incorrect2: 'to demand' },
        { german: 'brennen', correct: 'to burn', incorrect1: 'to extinguish', incorrect2: 'to melt' },
        { german: 'erschrecken', correct: 'to frighten', incorrect1: 'to comfort', incorrect2: 'to surprise' },
        { german: 'fressen', correct: 'to devour', incorrect1: 'to sip', incorrect2: 'to save' },
        { german: 'gelingen', correct: 'to succeed', incorrect1: 'to fail', incorrect2: 'to try' },
        { german: 'genießen', correct: 'to relish', incorrect1: 'to despise', incorrect2: 'to ignore' }
    
];

let currentVerbIndex = 0;
let shuffledOptions = [];

function startGame() {
    currentVerbIndex = 0;
    showVerb();
}


function showVerb() {
    const verb = verbs[currentVerbIndex];
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
    const verb = verbs[currentVerbIndex];
    const selectedOption = shuffledOptions[optionIndex - 1];
    const feedback = selectedOption === verb.correct ? 'Correct!' : 'Incorrect!';
    
    document.getElementById('feedback').innerText = feedback;
    document.getElementById('next-button').disabled = false;
}

function nextVerb() {
    currentVerbIndex++;
    if (currentVerbIndex < verbs.length) {
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
