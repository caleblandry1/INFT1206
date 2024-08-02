// Get references to DOM elements
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Function to get a random value from an array
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Story template with placeholders
var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Arrays of possible values for placeholders
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Generate new story with random values
var newStory = storyText;
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

// Replace placeholders in the story with random values
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

// Replace "Bob" with the custom name if provided
if (customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
}

// Convert to UK units if the UK radio button is checked
if (document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
}

// Display the new story and make it visible
story.textContent = newStory;
story.style.visibility = 'visible';
