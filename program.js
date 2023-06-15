import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka.png")

loadSprite("narciarz", "n.png")

loadSound("muzyka","cicha noc.mp3")

add([
    sprite("kartka"), 
    pos(0,0)
])

const narciarz = add(
    [
        sprite("narciarz"),
        pos(100,175),
        scale(1)
    ]
)

let wprawo = true

narciarz.onUpdate(() => {

    if (wprawo && narciarz.pos.x<500)
    narciarz.pos.x += 1

    else if (!wprawo && narciarz.pos.x>50)
    narciarz.pos.x -=1
    else wprawo ^= true
}
)

add([
   ("muzyka")
])

onMouseRelease(()=>play("muzyka"))

