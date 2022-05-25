import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.getOneUserByUserName(username);
    if (user && user.pass === pass) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { userName: user.userName, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}