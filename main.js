const player = {
	state: "idle",
	x: 0,
	y: 0,
	sprites: {
		movingUp: new Image("Data/Sprites/player_up.png"),
		movingDown: new Image("Data/Sprites/player_down.png"),
		movingLeft: new Image("Data/Sprites/player_left.png"),
		movingRight: new Image("Data/Sprites/player_right.png"),
		idle: new Image("Data/Sprites/player_idle.png")
	}
}

let pad;

while (true) {
	pad = Pads.get();

	switch (true) {
		case Pads.check(pad, Pads.UP):
			player.state = "movingUp"
			player.y -= 10;
			break;
		case Pads.check(pad, Pads.DOWN):
			player.state = "movingDown"
			player.y += 10;
			break;
		case Pads.check(pad, Pads.LEFT):
			player.state = "movingLeft"
			player.x -= 10;
			break;
		case Pads.check(pad, Pads.RIGHT):
			player.state = "movingRight"
			player.x += 10;
			break;
		default:
			player.state = "idle";
			break;
	}

	Screen.clear(Color.new(0, 0, 0));
	player.sprites[player.state].draw(player.x, player.y);
	Screen.flip();
}
