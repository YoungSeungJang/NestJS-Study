import { BadRequestException, Controller, Get } from '@nestjs/common';

@Controller('classroom')
export class ClassroomController {
    @Get()
    getClassroom(): string {
        throw new BadRequestException('This is a bad request exception example.');
        return 'classroom';
    }
    
}
