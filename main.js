function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qBSFd17CT/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        img1 = document.getElementById('dog');
        img2 = document.getElementById('cat');
        img3 = document.getElementById('lion');
        img4 = document.getElementById('cow');
        img5 = document.getElementById('alien4')

        if (results[0].label == "Bark") {
            img1.src = 'dog.gif';
            img2.src = 'cat.png';
            img3.src = 'lion.png';
            img4.src = 'cow.png';
            img5.src = 'aliens-04.png';
        }
        else if (results[0].label == "Meow") {
            img1.src = 'dog.png';
            img2.src = 'cat.gif';
            img3.src = 'lion.png';
            img4.src = 'cow.png';
            img5.src = 'aliens-04.png';
        }
        else if (results[0].label == "Roar") {
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'lion.gif';
            img4.src = 'cow.png';
            img5.src = 'aliens-04.png';
        }
        else if (results[0].label == "Moo") {
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'lion.png';
            img4.src = 'cow.gif';
            img5.src = 'aliens-04.png';
        }
        else  {
            img1.src = 'dog.png';
            img2.src = 'cat.png';
            img3.src = 'lion.png';
            img4.src = 'cow.png';
            img5.src = 'aliens-04.gif';
        }
    }
}