interface IAuthenticator {
  authenticate(username: string, password: string): boolean;
}

interface IUserRepository {
  saveAuthenticatedUser(username: string): void;
}

class Authenticator {
  authenticate(username: string, password: string): boolean {
    //Logic auth
  }
}

class GoogleAuthenticator implements IAuthenticator {
  authenticate(username: string, password: string): boolean {
    //Logic auth google
  }
}

class UserRepository implements IUserRepository {
  saveAuthenticatedUser(username: string): void {
    throw new Error("Method not implemented.");
  }
}

class AuthController {
  private authenticator: IAuthenticator;
  private userRepository: IUserRepository;

  constructor(authenticator: IAuthenticator, userRepository: IUserRepository) {
    this.authenticator = authenticator;
    this.userRepository = userRepository;
  }

  login(username: string, password: string) {
    if (this.authenticator(username, password)) {
      this.userRepository.saveAuthenticatedUser(username);
    }
  }
}

const authenticator = new Authenticator();
const googleAuthenticator = new GoogleAuthenticator();

const userRepository = new UserRepository();
const authController = new AuthController(authenticator, userRepository);
