// Narrowing: Instance Of

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User('Jhon');
const kevin = new SuperUser('Kevin');

function checkPrivileges(user: object) {
  if (user instanceof SuperUser) {
    console.log(`${user.name} | You have privileges!`);
  } else if (user instanceof User) {
    console.log(`${user.name} | You are a normal user...`);
  }
}

checkPrivileges(jhon);
checkPrivileges(kevin);
