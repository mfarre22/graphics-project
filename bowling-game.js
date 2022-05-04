import * as THREE from 'three';
import {OrbitControls} from './examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from './examples/jsm/loaders/GLTFLoader.js';

// global variables for scoring
var count = 0;
var frame = 0;
var throwNum = 0;

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.outputEncoding = THREE.sRGBEncoding;

  let ball;
  let pins = [];
  let ball_v_y = 0;
  let ball_v_x = 0;
  let spin = 0;
  let ball_r = 0;
  let lane;
  let arrow;
  let thrown;
  let bumper1, bumper2;
  let isOver = false;

  const fov = 90;
  const aspect = window.innerWidth/window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 1200;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 0.6;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 0.8;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0.3, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('./models/low_poly_bowling_ball_and_pins/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      // Get lane and resize
      lane = root.getObjectByName("Bowling_Lane_0");

      // Get ball and resize
      ball = root.getObjectByName("Bowling_Ball_3");

      // Get pin objects, resize, move, and rename according to position and store in array
      pins[0] = root.getObjectByName("Bowling_Pin_5"); // Pin 1
      pins[0].name = "Pin_1";
      pins[1] = root.getObjectByName("Bowling_Pin002_6"); // Pin 2
      pins[1].name = "Pin_2";
      pins[2] = root.getObjectByName("Bowling_Pin001_4"); // Pin 3
      pins[2].name = "Pin_3";
      pins[3] = root.getObjectByName("Bowling_Pin005_9"); // Pin 4
      pins[3].name = "Pin_4";
      pins[4] = root.getObjectByName("Bowling_Pin003_7"); // Pin 5
      pins[4].name = "Pin_5";
      pins[5] = root.getObjectByName("Bowling_Pin004_8"); // Pin 6
      pins[5].name = "Pin_6";
      pins[6] = root.getObjectByName("Bowling_Pin007_11"); // Pin 7
      pins[6].name = "Pin_7";
      pins[7] = root.getObjectByName("Bowling_Pin009_13"); // Pin 8
      pins[7].name = "Pin_8";
      pins[8] = root.getObjectByName("Bowling_Pin006_10"); // Pin 9
      pins[8].name = "Pin_9";
      pins[9] = root.getObjectByName("Bowling_Pin008_12"); // Pin 10
      pins[9].name = "Pin_10";

      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();

      console.log(dumpObject(root).join('\n'));

    });

    gltfLoader.load('./models/low_poly_bowling_ball_and_pins/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.position.x += 0.50;
      let temp_ball = root.getObjectByName("Bowling_Ball_3");
      temp_ball.position.y -= 100;
    });
    gltfLoader.load('./models/low_poly_bowling_ball_and_pins/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.position.x -= 0.50;
      let temp_ball = root.getObjectByName("Bowling_Ball_3");
      temp_ball.position.y -= 100;
    });
    gltfLoader.load('./models/low_poly_bowling_ball_and_pins/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.position.x += 1;
      let temp_ball = root.getObjectByName("Bowling_Ball_3");
      temp_ball.position.y -= 100;
    });
    gltfLoader.load('./models/low_poly_bowling_ball_and_pins/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.position.x -= 1;
      let temp_ball = root.getObjectByName("Bowling_Ball_3");
      temp_ball.position.y -= 100;
    });
    gltfLoader.load('./models/jumpboost_arrow/scene.gltf', (gltf) => {
      arrow = gltf.scene;
      scene.add(arrow);
      arrow.scale.set(0.00025, 0.00025, 0.00025);
      arrow.rotation.y = 1.5708;
      arrow.rotation.z = -1.5708;
    });
    gltfLoader.load('./models/gutter/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      let gutter = root.getObjectByName("rainGutterPart1objcleanermaterialmergergles");
      gutter.scale.set(0.017, 0.005, 0.005);
      gutter.rotation.z = 1.5708;
      gutter.position.x -= 1.643;
      gutter.position.y -= 6.25;
      gutter.position.z -= 1.305;
    });
    gltfLoader.load('./models/gutter/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      let gutter = root.getObjectByName("rainGutterPart1objcleanermaterialmergergles");
      gutter.scale.set(0.017, 0.005, 0.005);
      gutter.rotation.z = 1.5708;
      gutter.position.x -= 1.375;
      gutter.position.y -= 6.25;
      gutter.position.z -= 1.305;
    });
    gltfLoader.load('./models/bumper/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      bumper1 = root.getObjectByName("Object_2");
      bumper1.scale.set(0.05, 0.007, 0.3);
      bumper1.rotation.x = -1.5708;
      bumper1.rotation.z = -1.5708;
      bumper1.visible = false;
    });
    gltfLoader.load('./models/bumper/scene.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      bumper2 = root.getObjectByName("Object_2");
      bumper2.scale.set(0.05, 0.007, 0.3);
      bumper2.rotation.x = -1.5708;
      bumper2.rotation.z = -1.5708;
      bumper2.visible = false;
    });
}

  const loader = new THREE.TextureLoader();
  loader.load('./backgrounds/bowling-background1.jpeg' , function(texture) {
    scene.background = texture;  
  });

  document.getElementById("background1").onclick = function(){
    loader.load('./backgrounds/bowling-background1.jpeg' , function(texture) {
      scene.background = texture;  
    });
  };
  document.getElementById("background2").onclick = function(){
    loader.load('./backgrounds/bowling-background2.png' , function(texture) {
      scene.background = texture;  
    });
  };
  document.getElementById("background3").onclick = function(){
    loader.load('./backgrounds/bowling-background3.jpg' , function(texture) {
      scene.background = texture;  
    });
  };

  document.getElementById("bumperson").onclick = function() {
    bumper1.visible = true;
    bumper2.visible = true;
  };
  document.getElementById("bumpersoff").onclick = function() {
    bumper1.visible = false;
    bumper2.visible = false;
  };
  document.getElementById("musicon").onclick = function() {
    songElement.play();
  };
  document.getElementById("musicoff").onclick = function() {
    songElement.pause();
  };

  const listener = new THREE.AudioListener();
  camera.add(listener);

  const soundTrack = new THREE.Audio(listener);
  const songElement = document.getElementById( 'soundTrack' );
  soundTrack.setMediaElementSource( songElement );
  soundTrack.setVolume(0.2);
  songElement.play();

  const pinSound = new THREE.Audio(listener);
  const pinElement = document.getElementById( 'pinSound' );
  pinSound.setMediaElementSource( pinElement );
  
  const clock = new THREE.Clock();
  let delta;

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    time *= 0.002;

    // Add values for ball speed and angle to the display
    document.getElementById("speed_value").innerHTML = document.getElementById("ball_speed").value * 100;
    //document.getElementById("angle_value").innerHTML = document.getElementById("throw_angle").value;
    document.getElementById("spin_value").innerHTML = document.getElementById("throw_spin").value;
    let color = document.getElementById("colorpicker");

    // Add movement to the ball
    if(ball){
      document.getElementById("throw").onclick = function(){
        arrow.visible = false;
        ball_v_y = document.getElementById("ball_speed").value;
        ball_v_x = document.getElementById("throw_angle").value / 5000;
        spin = document.getElementById("throw_spin").value / 5000;
        ball_r = 0.5;

        // increment frame and throw number throughout the game
        if(frame == 0) {
          if(throwNum == 0) {
            throwNum++;
          }
          else {
            throwNum--;
          }
        }
        else if(frame == 1) {
          if(throwNum == 0) {
            throwNum++;
          }
          else {
            throwNum--;
          }
        }
      };
      document.getElementById("left").onclick = function() {
        if(!thrown && ball.position.x > -0.5){
          ball.position.x -= 0.05;
          arrow.position.x -= 0.0095;
        }
      };
      document.getElementById("right").onclick = function() {
        if(!thrown && ball.position.x < 0.5){
            ball.position.x += 0.05;
            arrow.position.x += 0.0095;
        }
      };
      document.getElementById("reset").onclick = function() {
        arrow.visible = true;
        console.log(ball.position.z);
        ball.position.x = 0;
        ball.position.y = 0.202348992228508;
        ball.position.z = 3.579677104949951;
        arrow.position.x = 0;
        ball_v_y = 0;
        ball_v_x = 0;
        spin = 0;
        ball_r = 0;
        thrown = false;

        for(let i = 0; i<10; i++) {
          pins[i].rotation.y = 0;
          pins[i].rotation.z = 0;
        }
      };
      color.addEventListener('input', function(e) {
        let ball_color_hex = this.value;
        let ball_color_rgb = hexToRgb(ball_color_hex);
        ball.children[0].material.color.setRGB(ball_color_rgb.r/255, ball_color_rgb.g/255, ball_color_rgb.b/255);
      });

      // Move ball according to controls
      ball.position.z -= ball_v_y;
      ball.position.x += ball_v_x;
      ball.rotation.z += ball_r;

      // Move arrow with ball
      arrow.position.z = ball.position.z - 2.8;
      arrow.position.y = ball.position.y - 0.15;
      arrow.rotation.y = -document.getElementById("throw_angle").value / 250 + 1.5708;

      // Move bumpers
      bumper1.position.y = -0.7;
      bumper1.position.z = -0.02;
      bumper1.position.x = -0.107;

      bumper2.position.y = -0.7;
      bumper2.position.z = -0.02;
      bumper2.position.x = 0.121;

      // check if ball hits bumpers and bounces off
      if(document.getElementById("bumperson").checked == true) {
        if(((ball.position.x + 0.25) <= bumper1.position.x) || ((ball.position.x - 0.26) >= bumper2.position.x)) {
          ball_v_x *= -1;
        }
      }

      // collision detection for pins
      for(let i = 0; i<10; i++) {
          if((pins[i].position.x + 0.02) >= (ball.position.x - 0.1) && (pins[i].position.x - 0.02) <= (ball.position.x + 0.1)) {
            if(ball.position.z - 0.08 <= pins[i].position.z && ball.position.z + 0.08 >= pins[i].position.z) {
              pinElement.play();
              pins[i].rotation.y = -1.5;
              pins[i].rotation.z = 1.5;
            }
          }
      }

      // Gutter ball logic
      if(ball.position.x >= 0.55) {
        ball.position.x = 0.7;
        ball.position.y = 0.05;
        ball_v_x = 0;
      }
      if(ball.position.x <= -0.55) {
        ball.position.x = -0.7;
        ball.position.y = 0.05;
        ball_v_x = 0;
      }


      if(ball.position.x == 0 && ball_v_x == 0) {
        for(let i = 0; i < 10; i++) {
          if(ball.position.z - 0.08 <= pins[i].position.z && ball.position.z + 0.08 >= pins[i].position.z) {
            pinElement.play();
            pins[i].rotation.y = -1.5;
            pins[i].rotation.z = 1.5;
          }
        }
      }

      if(ball.position.z < -3.5){
        var count = 0;
        ball_v_y = 0;
        ball_v_x = 0;
        spin = 0;

        // detect how many pins are down after ball stops moving
        for(let i = 0; i<10; i++) {
          if(pins[i].rotation.y == -1.5 && pins[i].rotation.z == 1.5) {
            count++;
          }
        }
      }

      // insert score into table
      if(frame == 0 && count != undefined) {
        if(throwNum == 1) {
          document.getElementById("frame1throw1").innerHTML = count;
        }
        else {
          document.getElementById("frame1throw2").innerHTML = count;
          document.getElementById("frame1score").innerHTML = Number(document.getElementById("frame1throw1").innerHTML) + Number(document.getElementById("frame1throw2").innerHTML);
        }
      } 
      else if(frame == 1 && count != undefined) {
        if(throwNum == 0) {
          document.getElementById("frame2throw1").innerHTML = count;
        }
        else {
          document.getElementById("frame2throw2").innerHTML = count;
          frame++;
        }
      } 
    }

    renderer.render(scene, camera);

   requestAnimationFrame(render);
  }

  function calculateScore() {
    
  }

  // Prints the object tree for the scene
  function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
      const isLast = ndx === lastNdx;
      dumpObject(child, lines, isLast, newPrefix);
    });

    return lines;
  }

  function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

  requestAnimationFrame(render);
}

main();