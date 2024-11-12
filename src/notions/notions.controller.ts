import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { NotionsService } from './notions.service';
import { CreateNotionDto } from './dto/create-notion.dto';
import { UpdateNotionDto } from './dto/update-notion.dto';

@Controller('notions')
export class NotionsController {
  constructor(private readonly notionsService: NotionsService) {}

  @Post()
  create(@Body() createNotionDto: CreateNotionDto) {
    return this.notionsService.create(createNotionDto);
  }

  @Get()
  async findAll() {
    return this.notionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() response: Response) {
    try {
      const notion = await this.notionsService.findOne(+id);
      if (!notion) {
        throw new HttpException('Notion not found', HttpStatus.NOT_FOUND);
      }

      return response.status(HttpStatus.OK).json(notion);
    } catch (error) {
      throw new HttpException(error, HttpStatus.NOT_FOUND);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotionDto: UpdateNotionDto) {
    return this.notionsService.update(+id, updateNotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notionsService.remove(+id);
  }
}
