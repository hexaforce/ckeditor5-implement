const LOCAL_STORAGE_KEY = "CKEDITOR_CS_CONFIG";

function randomString() {
  return Math.floor(Math.random() * Math.pow(2, 52)).toString(32);
}

const users = [
  {
    id: "e1",
    name: "Tom Rowling",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    role: "writer",
  },
  {
    id: "e2",
    name: "Wei Hong",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
    role: "writer",
  },
  {
    id: "e3",
    name: "Rani Patel",
    role: "writer",
  },
  {
    id: "e4",
    name: "Henrik Jensen",
    role: "commentator",
  },
  {
    id: randomString(),
    role: "writer",
  },
  {
    id: randomString(),
    role: "reader",
  },
];

const initialData = `
	<p>
		This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies
		that were conducted almost half a century show that the language you speak has more effects on you than you realize.
	</p>
`;

export { randomString, LOCAL_STORAGE_KEY, users, initialData };
