import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { ILogin, ILoginResponse } from './interfaces/login.interface';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(user: ILogin): Promise<ILoginResponse> {
    const userResult = await this.usersRepository.findOneBy({
      username: user.username,
    });

    if (userResult === null) {
      throw new UnauthorizedException();
    }

    const isMatch = await bcrypt.compare(user.password, userResult.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: userResult.id, username: userResult.username };

    return {
      username: userResult.username,
      token: await this.jwtService.signAsync(payload),
    };
  }
}
