import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { IUser, IUserCreate, IUserUpdate } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUser: IUserCreate): Promise<IUserCreate> {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(createUser.password, saltOrRounds);
    return this.usersRepository.save({ ...createUser, password: passwordHash });
  }

  findAll(): Promise<IUser[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<IUser> {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUser: IUserUpdate) {
    const result = this.usersRepository.findOneBy({ id });
    await this.usersRepository.update(id, updateUser);
    return result;
  }

  async remove(id: number): Promise<IUser> {
    const result = this.usersRepository.findOneBy({ id });
    await this.usersRepository.delete(id);
    return result;
  }
}
