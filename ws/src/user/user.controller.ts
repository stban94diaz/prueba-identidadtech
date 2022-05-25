import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

// DTOS
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {

  constructor (
    private userService: UserService
  ) { }

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return {
      message: 'received',
      data: await this.userService.createUser(dto)
    };
  }

  @Get()
  async getUsers() {
    return {
      message: 'received',
      data: await this.userService.getUsers()
    };
  }

  @Get('/:id')
  async getOneUser(@Param('id') id: string) {
    return {
      message: 'received',
      data: await this.userService.getOneUser(id)
    };
  }

  @Get('/byusername/:username')
  async getOneUserByUserName(@Param('username') userName: string) {
    return {
      message: 'received',
      data: await this.userService.getOneUserByUserName(userName)
    };
  }
}
