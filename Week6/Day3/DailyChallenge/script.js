// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video.The class should be constructed with the following parameters:
// title(a string)
// uploader(a string, the person who uploaded it)
// time(a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
class Video {
    constructor(title, uploader, time) {
        this.title = title; // a string representing title of the video
        this.uploader = uploader; // a string representing the name of the person who uploaded the video
        this.time = time; // a number representing video duration in seconds
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}

// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
//     Bonus: Use an array to store data for five Video instances(ie.title, uploader, time)
const videoData = [
    { title: "Java Script Tutorial", uploader: "Ziv", time: 9999999 },
    { title: "Python Tutorial", uploader: "Yossi", time: 900000 },
    { title: "Exercises XP Tutorial", uploader: "Gabriel", time: 60 },
    { title: "Creating a WebDeveloper CV", uploader: "Lital", time: 6000 },
    { title: "How to make a great Hackathon Project", uploader: "Diana", time: 6000 },
];
// Think of the best data structure to save this information within the array.
//     Bonus: Loop through the array to instantiate those instances.
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => video.watch());