import images from "../assets";

export const mock = [
  {
    name: "Labotatório 1",
    description: "Laboratório 1",
    image: images.lab1,
  },
  {
    name: "Laboratório 2",
    description: "Laboratório 2",
    image: images.lab2,
  },
  {
    name: "Laboratório 3",
    description: "Laboratório 3",
    image: images.lab3,
  },
  {
    name: "Laboratório 4",
    description: "Laboratório 4",
    image: images.lab4,
  },
  {
    name: "Labotatório 1",
    description: "Laboratório 1",
    image: images.lab1,
  },
  {
    name: "Laboratório 2",
    description: "Laboratório 2",
    image: images.lab2,
  },
  {
    name: "Laboratório 3",
    description: "Laboratório 3",
    image: images.lab3,
  },
  {
    name: "Laboratório 4",
    description: "Laboratório 4",
    image: images.lab4,
  },
  {
    name: "Labotatório 1",
    description: "Laboratório 1",
    image: images.lab1,
  },
  {
    name: "Laboratório 2",
    description: "Laboratório 2",
    image: images.lab2,
  },
  {
    name: "Laboratório 3",
    description: "Laboratório 3",
    image: images.lab3,
  },
  {
    name: "Laboratório 4",
    description: "Laboratório 4",
    image: images.lab4,
  },
  {
    name: "Labotatório 1",
    description: "Laboratório 1",
    image: images.lab1,
  },
  {
    name: "Laboratório 2",
    description: "Laboratório 2",
    image: images.lab2,
  },
  {
    name: "Laboratório 3",
    description: "Laboratório 3",
    image: images.lab3,
  },
  {
    name: "Laboratório 4",
    description: "Laboratório 4",
    image: images.lab4,
  },
];

const addMock = (name, description, image) => {
  const lab = {
    name,
    description,
    image,
  };
  mock.push(lab);
};

export default addMock;
