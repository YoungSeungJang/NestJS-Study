import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BoardService } from './board.service';

interface Board {
  id: number;
  title: string;
  content: string;
}

@Controller('board')
export class BoardController {
  //구문분석
  // constructor(...): 클래스가 생성될 때 실행되는 생성자
  // private : 매개변수로 전달받은 값을 클래스 내부의 private 필드로 자동 선언
  constructor(private readonly boardService: BoardService) {}
  @Get()
  findAll(): Board[] {
    // return 'findAll 호출';
    return this.boardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Board {
    return this.boardService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: any) {
    return this.boardService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any): Board {
    return this.boardService.update(Number(id), data);
  }
}
