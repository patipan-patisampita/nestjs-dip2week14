import { Controller, Get, Param, Res,  } from '@nestjs/common';
import { Response } from 'express';

@Controller('department')//http://127.0.0.1:3000/v1/api/department
export class DepartmentController {
    // @Get()
    // index() {
    //     return "Department index";
    // }

    // @Get()
    // findAll(@Req() request: Request): string {
    //   return 'This action returns all profile' + request;
    // }

    @Get()//http://127.0.0.1:3000/v1/api/department
    findAll(@Res() response: Response): Response {
        let department: [ //json
            { id: 1, title: 'IT' },
            { id: 2, title: 'EP' },
        ];
        return response.status(200).json(department);
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return 'id' + id;
    }
}
