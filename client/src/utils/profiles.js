export const profiles = [
	"👤",
	"👨",
	"😊",
	"😂",
	"😍",
	"😒",
	"😁",
	"😘",
	"🤣",
	"🤦‍♂️",
	"😉",
	"😋",
	"😗",
	"🥰",
	"😘",
	"🙂",
	"😑"
];

export const getRandomProfile = () => {
	return profiles[Math.floor(Math.random() * profiles.length)];
};