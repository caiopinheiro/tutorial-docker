'use strict';
let i = 0;

setInterval(() => {
  i++;
  console.log('Worker doing his job: ', i);
  if(i > 5){
      console.log('Caio caiu!');
      process.exit(1);
  }
}, 2000);

//delete image
//docker rmi <image_ID>

//
//docker image ls

//Active containers
//docker container ls

//Stop container
//docker stop <image_name >

//Build Image
// docker build -t <image_name>

//Run attach
// docker run -p 3000:3000 your-app-name
//Run detach
// docker run -d -p 3000:3000 your-app-name

// Attach image in background
//docker exec -it <name_image> bash

//Habilitar o postgres
//docker run --add-host=docker:$(ip route get 1 | grep -Eo 'src \S+' | awk '{ print $2 }') -p 3000:3000 your-app-name

