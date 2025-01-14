song1 = ""
song2 = ""
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
scoreLeftWrist = 0;
song_1 = 0;
song_2 = 0;
function preload()
{
	song1 = loadSound("music.mp3");
	song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);

    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
	image(video, 0, 0, 600, 500);
    
	fill("#FF0000");
	stroke("#FF0000");
song_1 = song1.isPlaying()
song_2 = song2.isPlaying()

if(scoreLeftWrist > 0.2)
	{
		circle(leftWristX,leftWristY,20);
        song_2.stop();
        if(song_1 = false){
            song_1.play(); 
        } 
}
if(scoreRightWrist > 0.2)
	{
		circle(rightWristX,rightWristY,20);
        song_1.stop();
        if(song_2 = false){
            song_2.play(); 
        } 
}
}

function play()
{
	song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            scoreLeftWrist =  results[0].pose.keypoints[9].score;
            scoreRightWrist =  results[0].pose.keypoints[10].score;
            leftWristX = results[0].pose.leftWrist.x;
          leftWristY = results[0].pose.leftWrist.y;
          console.log("LeftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

          rightWristX = results[0].pose.rightWrist.x;
          rightWristY = results[0].pose.rightWrist.y;
       console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        }
}
