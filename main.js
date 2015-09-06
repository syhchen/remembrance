var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var vpHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var canvas = document.getElementById("game-canvas");
canvas.width = vpWidth;
canvas.height = vpHeight;

var game = Game(canvas, "#333333", ['#D1585A', '#E3B168', '#84B1BA', '#343A45'], 20, 10);
