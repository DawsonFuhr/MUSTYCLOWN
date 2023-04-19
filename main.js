noseX=0;
noseY=0;

function preload()
{
musty_nose = loadImage('https://i.postimg.cc/t47xmBr2/pngtree-april-fool-s-day-clown-nose-illustration-image-1384989.jpg');
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function draw()
{
image(video, 0, 0, 500, 500);
image(musty_nose, noseX - 30, noseY - 2, 60, 60);
}

function take_snapshot()
{
    save('myFilerImage.png');
}





