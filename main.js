// Tengo que:
// 1) Entrar al juego
// 1) Hacer que el usuario ingrese su nombre
// 3) Una vez que se entra al juego, preguntar la cantidad de veces que se va a jugar
// 4) Preguntar si quiere jugar de nuevo
// 5) Preguntar si quiere salir del juego
// 6) Salir del juego


let seguirJugando = true 


while(seguirJugando){   

    let correctas_usuario = 0
    let correctas_maquina = 0
    let empates = 0

    alert("Bienvenido al juego de tirar el dado, por favor ingrese una opcion")
    let opciones = prompt("Ingrese 1 para jugar con su nombre, Ingrese 2 para jugar como anonimo , o Ingrese  'salir' para salir del juego")
        
    if(opciones == 1){
            nombre = prompt("Ingrese su nombre")
            tiradas = prompt("Cuantas veces quiere jugar contra la Pc?")
            for(let i = 0; i < tiradas; i++) {

                let numero_usuario = Math.floor(Math.random() * 6) + 1
                let numero_maquina = Math.floor(Math.random() * 6) + 1
                if(numero_usuario > numero_maquina){
                    correctas_usuario++
                    alert("Felicitaciones vas " + correctas_usuario + " a " + correctas_maquina)
                    continue 
                }
                else if(numero_maquina > numero_usuario){
                    correctas_maquina++
                    alert("Lo siento " + nombre + " ahora van: " + correctas_usuario + " a " + correctas_maquina)
                    continue
                }
                else{
                    empates++
                    alert("Hubo un empate entre " + nombre + " y la Pc, ahora van: " + correctas_usuario + "  a " + correctas_maquina)
                    continue
                }
            }
            alert("El numero de partidas ganadas por " + nombre + " es: " + correctas_usuario + " y el de la Pc es: " + correctas_maquina + " mientras que el numero de partidas empates es de: " + empates)
        
            if(correctas_usuario > correctas_maquina){
                alert("Felicitaciones " + nombre + " sos el ganador")
                seguirJugando = prompt("Quiere seguir jugando?")
                if(seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if(seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false
                    }
                else{
                    alert ("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                    
                }
               
            }
            
            else if(correctas_usuario == correctas_maquina){
                alert("Hubo un empate, volve a jugar!")
                seguirJugando = prompt("Quiere seguir jugando?")
                if (seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if (seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false}
                else{
                    alert ("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                    
                }
            }
            
            else{
                alert("Te gano la maquina!")
                seguirJugando = prompt("Quiere seguir jugando?")
                if(seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if(seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false}
                else{
                    alert("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                    
                }
            }
            
        }


    else if(opciones == 2){
            alert("Usted va a jugar como usuario anonimo")
            tiradas = prompt("Cuantas veces quiere jugar contra la Pc?")
            for(i = 0; i < tiradas; i++){
                let numero_usuario = Math.floor(Math.random() * 6) + 1
                let numero_maquina = Math.floor(Math.random() * 6) + 1
                if(numero_usuario > numero_maquina){
                    correctas_usuario++
                    alert("Felicitaciones usuario Anonimo, ahora vas " + correctas_usuario + " a " + correctas_maquina) 
                }
                else if(numero_maquina > numero_usuario){
                    correctas_maquina++
                    alert("Lo siento usuario Anonimo ahora van: " + correctas_usuario + " a " + correctas_maquina)
                }
                else{
                    empates++
                    alert("Hubo un empate entre el usuario Anonimo  y la Pc, ahora van: " + correctas_usuario + " a " + correctas_maquina)
                }
              
            }
            alert("El numero de partidas ganadas por el usuario Anonimo es: " + correctas_usuario + " y el de la Pc es: " + correctas_maquina + " mientras que el numero de partidas empates es de: " + empates)
            if(correctas_usuario > correctas_maquina){
                alert("Felicitaciones usuario Anonimo, sos el ganador")
                seguirJugando = prompt("Quiere seguir jugando?")
                if (seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if(seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false
                    }
                else {
                    alert("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                    
                }
                
            }
            else if(correctas_usuario == correctas_maquina){
                alert("Hubo un empate, volve a jugar!")
                seguirJugando = prompt("Quiere seguir jugando?")
                if(seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if(seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false
                    }
                else{
                    alert("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                   
                }
            }
            else{
                alert("Te gano la maquina!")
                seguirJugando = prompt("Quiere seguir jugando?")
                if (seguirJugando.toLocaleLowerCase() == 'si'){
                    alert("Ok Volvamos al menu")
                }
                else if (seguirJugando.toLocaleLowerCase() == 'no'){
                    seguirJugando = false
                    }
                else{
                    alert("Ud ha ingresado  una opcion NO valida, volvera al menu inicial")
                    
                }
            }
          
        }
    else if(opciones.toLocaleLowerCase() === 'salir'){
            let salir = confirm("Quiere salir del juego")
            if(salir){
                alert("Gracias por jugar")
                seguirJugando = false
            }
        }
    else{
            alert("Por favor ingrese una opcion correcta")
        }

}
alert("Fin del juego")

