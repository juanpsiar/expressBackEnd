const faker = require('faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.imageUrl(),
      });
    }
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((person) => person.id === id);
  }
}

module.exports = UserService;
