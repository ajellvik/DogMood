const moods = [
    "Your dog is feeling on top of the world!",
    "Your dog might be a little apprehensive.",
    "Your dog is in a playful mood.",
    "Your dog seems tranquil and peaceful.",
    "Your dog might be having a grouchy day.",
    "Your dog is looking curious about something.",
    "Your dog looks like they're in deep thought.",
    "Your dog seems like they could use some excitement.",
    "Your dog is bursting with energy!",
    "Your dog is in a daydreaming mode.",
    "Your dog is feeling proud.",
    "Your dog is in a mischievous mood.",
    "Your dog is feeling a bit shy today.",
    "Your dog looks very focused.",
    "Your dog seems to be in a wandering mood.",
    "Your dog is feeling very attentive.",
    "Your dog is in a relaxed posture.",
    "Your dog seems to be searching for something.",
    "Your dog is feeling a tad sleepy.",
    "Your dog looks really comfortable.",
    "Your dog might be feeling protective.",
    "Your dog seems intrigued by something.",
    "Your dog is feeling a bit distracted.",
    "Your dog seems to be in a festive mood.",
    "Your dog looks calm and composed.",
    "Your dog might be feeling overjoyed.",
    "Your dog looks like they're planning some mischief.",
    "Your dog is feeling a bit unsure about something.",
    "Your dog seems ready for an adventure.",
    "Your dog is in a super chill mood.",
    "Your dog looks like they've just had a revelation.",
    "Your dog seems a bit puzzled.",
    "Your dog looks determined.",
    "Your dog might be in a contemplative mood.",
    "Your dog looks like they're up to something.",
    "Your dog is in a whimsical mood.",
    "Your dog seems ready to take on the world.",
    "Your dog is feeling very confident.",
    "Your dog seems to be feeling blissful.",
    "Your dog is in a very alert state.",
    "Your dog looks like they're enjoying the moment.",
    "Your dog seems to be taking things easy.",
    "Your dog is in a very observant mode.",
    "Your dog seems to be in a reflective mood.",
    "Your dog might be feeling a bit restless.",
    "Your dog is in a very attentive state.",
    "Your dog looks very cheerful.",
    "Your dog seems to be in high spirits.",
    "Your dog looks like they're waiting for something.",
    "Your dog is feeling very mellow.",
    "Your dog seems to be pondering deeply.",
    "Your dog looks a bit wary.",
    "Your dog seems to be enjoying the ambiance.",
    "Your dog looks like they're savoring the moment.",
    "Your dog seems a bit startled.",
    "Your dog is feeling frisky.",
    "Your dog is in a very perceptive mood.",
    "Your dog looks quite regal.",
    "Your dog seems to be soaking in the surroundings.",
    "Your dog seems to be lost in thought.",
    "Your dog looks eager and ready.",
    "Your dog might be feeling sentimental.",
    "Your dog seems to be in a very light mood.",
    "Your dog looks like they're full of surprises.",
    "Your dog seems ready for some fun.",
    "Your dog seems to be feeling quite jovial.",
    "Your dog looks really pleased.",
    "Your dog seems to be lost in the moment.",
    "Your dog looks quite noble.",
    "Your dog seems to be in a carefree mood.",
    "Your dog is feeling sprightly.",
    "Your dog looks very poised.",
    "Your dog seems to be basking in joy.",
    "Your dog is feeling quite snazzy.",
    "Your dog looks a bit aloof.",
    "Your dog seems to be in a dandy mood.",
    "Your dog is feeling quite spirited.",
    "Your dog seems to be feeling quite chipper.",
    "Your dog looks a bit reserved.",
    "Your dog is in a frolicsome mood.",
    "Your dog seems to be feeling really buoyant.",
    "Your dog looks quite majestic.",
    "Your dog seems to be full of zest.",
    "Your dog is feeling quite perky.",
    "Your dog looks like they're in a reverie.",
    "Your dog seems to be in a dreamy state.",
    "Your dog looks a bit contemplative.",
    "Your dog is in a whimsical state.",
    "Your dog seems to be feeling quite peppy.",
    "Your dog looks a bit meditative.",
    "Your dog is in a vivacious mood.",
    "Your dog seems to be feeling bubbly.",
    "Your dog looks quite serene.",
    "Your dog seems to be in a lighthearted mood.",
    "Your dog is feeling very lively.",
    "Your dog looks like they're relishing the moment.",
    "Your dog seems to be in a jolly mood.",
    "Your dog looks really radiant.",
    "Your dog is in a very animated state.",
    "Your dog seems to be feeling zippy.",
    "Your dog looks a bit introspective.",
    "Your dog is in a rollicking mood."
];



const loadingMessage = document.getElementById('loadingMessage');
const moodMessage = document.getElementById('moodMessage');
const uploadStatus = document.getElementById('uploadStatus');

document.getElementById('dogImage').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        uploadStatus.textContent = "Photo uploaded successfully!";
    } else {
        uploadStatus.textContent = "";
    }
});

function detectMood() {
    const dogImage = document.getElementById('dogImage');
    const loader = document.getElementById('loader');
    
    if (!dogImage.files.length) {
        alert("Please upload a photo first.");
        return;
    }

    moodMessage.textContent = ""; // Clear the previous mood message
    loadingMessage.textContent = "AI is analyzing your puppy's mood...";
    loader.style.display = 'block';

    setTimeout(() => {
        loadingMessage.textContent = "";
        loader.style.display = 'none';
        const randomMood = moods[Math.floor(Math.random() * moods.length)];
        moodMessage.textContent = randomMood;

        dogImage.value = ''; // Clear the uploaded photo
        uploadStatus.textContent = ""; // Clear the upload status
    }, 3000);
}
