// LEGEND
// 0 - empty
// 1 - t-rex
// 2 - cactus
let gameMap = [0, 2, 0, 0, 1, 0, 2, 0, 2, 0]
        // i = 0, 1, 2, ............      9
let ti = 4
let dir = "left"

function drawMap() {
    m.innerHTML = ``
    for (let i = 0; i < gameMap.length; i++ ) {
        if (gameMap[i] == 0) {
            m.innerHTML += `<div></div>`
        } else if (gameMap[i] == 1) {
            m.innerHTML += `<div class="t-rex ${dir}"></div>`
        } else if (gameMap[i] == 2) {
            m.innerHTML += `<div class="cactus"></div>`
        } 
    }
}

drawMap()

function action() {
    switch(event.key) {
        case "ArrowLeft":  
            gameMap[ti] = 0
            ti--
            gameMap[ti] = 1
            dir = "left"

            if (ti < 0) {
                ti = 9
            }
        break

        case "ArrowRight":
            gameMap[ti] = 0
            ti++
            gameMap[ti] = 1
            dir = "right"

            if (ti > 9) {
                ti = 0
            }
        break
    }
    drawMap()
}