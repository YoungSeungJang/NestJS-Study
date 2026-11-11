import { Controller, Get, Param } from '@nestjs/common';
import { BoardService } from './board.service';

interface Board {
  id: string;
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
    return this.boardService.findOne(id);
  }
}
