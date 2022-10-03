let sound1 = null;
var id1 = null;
var seek1 = null;

function buttonA() {
  console.log("buttonA waas pressed");
  if (sound1 == null) {
    sound1 = new Howl({
      src: ["./sample.mp3"],
      volume: 1.0,
    });
  }

  if (sound1 == null) {
    return;
  }

  //sound1.volume=0;
  //console.log(seek1)
  // sound1.seek(seek1);
  if (id1 == null) {
    id1 = sound1.play();
    console.log("First play");
  } else {
    sound1.play(id1);
  }
  sound1.fade(0, 1, 1000, id1);
}
function buttonB() {
  console.log("buttonA waas pressed");

  if (sound1 == null) {
    console.log("sound1 is null");
    return;
  }

  sound1.fade(1, 0, 1000, id1);

  sound1.on("fade", () => {
    console.log("fade");

    vol1 = sound1.volume();
    //フェード後に音量が0になっていたら停止
    if (vol1 <= 0.05) {
      sound1.pause();
      console.log("pause");
      seek1 = sound1.seek();
    }
  });
}
