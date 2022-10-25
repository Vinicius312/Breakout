var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var raquete=createSprite(200,375,120,12.5);
raquete.shapeColor="green";
var bloco1=createSprite(20,100,40,40);
bloco1.shapeColor="blue";
var bloco2=createSprite(60,100,40,40);
bloco2.shapeColor="red";
var bloco3=createSprite(100,100,40,40);
bloco3.shapeColor="blue";
var bloco4=createSprite(140,100,40,40);
bloco4.shapeColor="red";
var bloco5=createSprite(180,100,40,40);
bloco5.shapeColor="blue";
var bloco6=createSprite(220,100,40,40);
bloco6.shapeColor="red";
var bloco7=createSprite(260,100,40,40);
bloco7.shapeColor="blue";
var bloco8=createSprite(300,100,40,40);
bloco8.shapeColor="red";
var bloco9=createSprite(340,100,40,40);
bloco9.shapeColor="blue";
var bloco10=createSprite(380,100,40,40);
bloco10.shapeColor="red";
var bloco11=createSprite(20,140,40,40);
bloco11.shapeColor="red";
var bloco12=createSprite(60,140,40,40);
bloco12.shapeColor="blue";
var bloco13=createSprite(100,140,40,40);
bloco13.shapeColor="red";
var bloco14=createSprite(140,140,40,40);
bloco14.shapeColor="blue";
var bloco15=createSprite(180,140,40,40);
bloco15.shapeColor="red";
var bloco16=createSprite(220,140,40,40);
bloco16.shapeColor="blue";
var bloco17=createSprite(260,140,40,40);
bloco17.shapeColor="red";
var bloco18=createSprite(300,140,40,40);
bloco18.shapeColor="blue";
var bloco19=createSprite(340,140,40,40);
bloco19.shapeColor="red";
var bloco20=createSprite(380,140,40,40);
bloco20.shapeColor="blue";
var bolinha=createSprite(200,250,10,10);
bolinha.shapeColor="black";
var pontuacao = 0;
var gameState = "início";

function draw() {
  background("white");
  stroke("black");
  fill("black");
  textSize(24);
  text("Pontuação: " + pontuacao, 20, 20);
  createEdgeSprites();
  bolinha.bounceOff(raquete);
  bolinha.bounceOff(leftEdge);
  bolinha.bounceOff(rightEdge);
  bolinha.bounceOff(topEdge);
  if(gameState=="início"){
    stroke("black");
    fill("black");
    text("Pressione espaço para iniciar", 80, 200);
    raquete.x=200;
  }
  if(keyDown("space")){
    pontuacao=0;
    gameState="jogando";
    bolinha.x=200;
    bolinha.y=250;
    bolinha.velocityX=randomNumber(-5,5);
    bolinha.velocityY=randomNumber(3,5);
    if(bolinha.velocityX===0){
    bolinha.velocityX=5;
  }
  }
  if(gameState=="jogando"){
    raquete.x=World.mouseX;
  }
  if(bolinha.y>410){
    gameState="perdeu";
  }
  if(gameState=="perdeu"){
    textAlign("Center","Center");
    textSize(24);
    stroke("black");
    fill("black");
    text("Você Perdeu! Pontuação: " + pontuacao,90,200);
    bolinha.setVelocity(0,0);
    raquete.x=200;
  }
  if(pontuacao===20){
    gameState="ganhou";
  }
  if(gameState=="ganhou"){
    textAlign("Center","Center");
    textSize(24);
    stroke("black");
    fill("black");
    text("Parabéns! Você Venceu!",80,200);
    text("Pontuação: 20",130,230);
    bolinha.y=-10;
    bolinha.setVelocity(0,0);
    raquete.x=200;
  }
  if(bolinha.isTouching(bloco1)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco1.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco2)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco2.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco3)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco3.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco4)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco4.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco5)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco5.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco6)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco6.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco7)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco7.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco8)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco8.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco9)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco9.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco10)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco10.destroy();
    pontuacao=pontuacao+1;
  }
   if(bolinha.isTouching(bloco11)){
     playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco11.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco12)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco12.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco13)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco13.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco14)){
   playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco14.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco15)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco15.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco16)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco16.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco17)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco17.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco18)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco18.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco19)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco19.destroy();
    pontuacao=pontuacao+1;
  }
  if(bolinha.isTouching(bloco20)){
    playSound("assets/category_pop/puzzle_game_ui_pop_tiny_03.mp3");
    bloco20.destroy();
    pontuacao=pontuacao+1;
  }
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
