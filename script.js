const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
let workHours = document.querySelector('.work h2');
let previousWorkHours = document.querySelector('.work h3');
let playHours = document.querySelector('.play h2');
let previousPlayHours = document.querySelector('.play h3');
let studyHours = document.querySelector('.study h2');
let previousStudyHours = document.querySelector('.study h3');
let exerciseHours = document.querySelector('.exercise h2');
let previousExerciseHours = document.querySelector('.exercise h3');
let socialHours = document.querySelector('.social h2');
let previousSocialHours = document.querySelector('.social h3');
let selfCareHours = document.querySelector('.selfCare h2');
let previousSelfCareHours = document.querySelector('.selfCare h3');


daily.addEventListener('click', function() {
    this.style.color = 'white';
    weekly.style.color = 'hsl(235, 45%, 61%)';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    previousWorkHours.style.marginLeft = '2.7rem'
    workHours.textContent = '5hrs';
    previousWorkHours.textContent = 'Yesterday - 7hrs'
    playHours.textContent = '1hr';
    previousPlayHours.textContent = 'Yesterday - 2hrs'
    studyHours.textContent = '0hrs';
    previousStudyHours.textContent = 'Yesterday - 1hr'
    exerciseHours.textContent = '1hr';
    previousExerciseHours.textContent = 'Yesterday - 1hr'
    socialHours.textContent = '1hr';
    previousSocialHours.textContent = 'Yesterday - 3hr'
    selfCareHours.textContent = '0hrs';
    previousSelfCareHours.textContent = 'Yesterday - 1hr'
})

weekly.addEventListener('click', function() {
    this.style.color = 'white';
    daily.style.color = 'hsl(235, 45%, 61%)';
    monthly.style.color = 'hsl(235, 45%, 61%)';
    workHours.textContent = '32hrs';
    previousWorkHours.textContent = 'Last Week - 36hrs'
    playHours.textContent = '10hrs';
    previousPlayHours.textContent = 'Last Week - 8hrs'
    studyHours.textContent = '4hrs';
    previousStudyHours.textContent = 'Last Week - 7hrs'
    exerciseHours.textContent = '4hrs';
    previousExerciseHours.textContent = 'Last Week - 5hrs'
    socialHours.textContent = '5hrs';
    previousSocialHours.textContent = 'Last Week - 10hrs'
    selfCareHours.textContent = '2hrs';
    previousSelfCareHours.textContent = 'Last Week - 2hrs'
});

monthly.addEventListener('click', function() {
    this.style.color = 'white';
    daily.style.color = 'hsl(235, 45%, 61%)';
    weekly.style.color = 'hsl(235, 45%, 61%)';
    workHours.textContent = '103hrs';
    previousWorkHours.textContent = 'Last Month - 128hrs'
    previousWorkHours.style.marginLeft = '2.7rem'
    playHours.textContent = '23hrs';
    previousPlayHours.textContent = 'Last Month - 29hrs'
    studyHours.textContent = '13hrs';
    previousStudyHours.textContent = 'Last Month - 19hrs'
    exerciseHours.textContent = '11hrs';
    previousExerciseHours.textContent = 'Last Month - 18hrs'
    socialHours.textContent = '21hrs';
    previousSocialHours.textContent = 'Last Month - 23hrs'
    selfCareHours.textContent = '7hrs';
    previousSelfCareHours.textContent = 'Last Month - 11hrs'
})