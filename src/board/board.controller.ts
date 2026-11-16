import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreatePostDto } from './dto/create-post.dto';

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
  @UsePipes(new ValidationPipe()) // 해당 핸들러에 파이프 적용
  create(@Body() data: CreatePostDto) {
    // 이곳에 도달했다면 유효성 검사를 통과한 상태임이 보장됨
    return this.boardService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: any): Board {
    return this.boardService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id',ParseIntPipe) id: number): Board[] {
    return this.boardService.delete(id);
  }
}
