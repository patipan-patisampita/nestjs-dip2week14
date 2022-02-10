import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('profile')//http://127.0.0.1:3000/v1/api/profile
export class ProfileController {

    @Post()
    @HttpCode(201)
    create(): string {
      return 'This action adds a new profile';
    }
    
    @Get()
    @HttpCode(200)
    findAll(): string {
        return 'This action returns all profile';
    }
}
