//detectar canvas
const canvas = document.getElementById("myCanvas")

//set uo canvas 2d ctx =  contexto
const ctx = canvas.getContext("2d")

//fillStyle
ctx.fillStyle = "blue"

//fillRect
ctx.fillRect(100,100,200,200)
ctx.clearRect(105,105,190,190)//nos crear un trazo sin bordes sin relleno
ctx.strokeRect(110,110,180,180)

//Path

//BeginPath
ctx.beginPath()//indica que es el inicio del trazo
//linea en el eje x
ctx.moveTo(50,0)
ctx.lineTo(250,0)
ctx.stroke()
//end linea x
//linea en y
ctx.moveTo(250,0)
ctx.lineTo(250,100)
ctx.stroke()

ctx.closePath()// ya no quiero dibujar

//flecha

ctx.beginPath()
ctx.moveTo(75,50)
ctx.lineTo(100,75)
ctx.lineTo(100,25)
ctx.fill()
ctx.closePath()

//arc
ctx.beginPath()
ctx.arc(200,200,65,0, Math.PI *2)
ctx.fillStyle ="red"
ctx.fill()

ctx.beginPath()
ctx.arc(200,200,30,0,Math.PI * 2)
ctx.lineWidth = 20
ctx.strokeStyle = "purple"
ctx.fillStyle = "white"
ctx.fill()
ctx.stroke()
ctx.closePath()


//cancha de basket

//insertar texto
ctx.fillStyle = "green"
ctx.font = "30px Arial"
//texto x,y,maxwidth
ctx.fillText("Este es el texto correcto",400,45,400)

ctx.fillStyle = "peru"
ctx.fillText("perro",400,70)

ctx.strokeStyle ="orange"
ctx.strokeText("H",400,300)

//insertar imagen
//inocar una clase llamada imagen

const img = new Image()
/* img ={
    key:value,
    ..key:value
}*/
//para insertar la imagen accedemos a la propiedad img.src

img.src = "https://img.remediosdigitales.com/feaf8b/bmw-serie3-335d-usa/1366_2000.jpg"

//Utilizar un metodo basico para cargar la imagen en canvas

img.onload = () => {
    //globalalpha para poder ver lo que hay atras
    ctx.globalAlpha = 0.5

    //vamos a dibujar la imagen
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
}

//insertar nueva imagen

const character = new Image()
character.src = "https://formato7.com/wp-content/uploads/2018/07/admin_fotos_2018-07-17_Xalapa_466748.jpg-700x454.jpg"

character.onload = function(){
    ctx.globalAlpha = 1
    ctx.drawImage(character, 400,400)
}