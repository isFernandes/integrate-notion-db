import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';

import {
  CreateNotionDto,
  IFileTypes,
  ILanguageEnum,
  ISendObjectNotion,
} from './dto/create-notion.dto';
import { UpdateNotionDto } from './dto/update-notion.dto';
import { NotionRepository } from './notions.repository';

@Injectable()
export class NotionsService {
  constructor(@Inject() private API: NotionRepository) {}

  private parseObjectToSend(payload: CreateNotionDto): ISendObjectNotion {
    const parsed = {};

    Object.keys(payload).forEach((el) => {
      parsed[el] = this.parseData[el](payload[el]);
    });

    return parsed;
  }

  private parseData = {
    Content: (data: any) => {
      return {
        rich_text: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
    Language: (data: any) => {
      return {
        select: {
          name: ILanguageEnum[data] || data,
        },
      };
    },
    'image content': (data) => {
      return {
        rich_text: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
    Image: (data) => {
      const { name, type, external } = data;
      const files: any = [];

      if (name || type || external) {
        files.push({
          name: name,
          type: IFileTypes[type],
          external: {
            url: external?.url,
          },
        });
      }

      if (files.length > 0) {
        return { files };
      }
    },
    Description: (data) => {
      return {
        rich_text: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
    Campaign: (data) => {
      return {
        rich_text: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
    Where: (data) => {
      return {
        rich_text: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
    PlannedDate: (data) => {
      return {
        date: {
          start: data,
        },
      };
    },
    Company: (data) => {
      return {
        title: [
          {
            text: {
              content: data,
            },
          },
        ],
      };
    },
  };

  async create(createNotionDto: CreateNotionDto) {
    const notionParsed = this.parseObjectToSend(createNotionDto);

    const createdNotion = await this.API.create(notionParsed);
    return createdNotion;
  }

  async findAll() {
    const { results: data } = await this.API.getAll();
    return data;
  }

  async findOne(id: number) {
    if (!(await this.API.validateExistProperty('ID'))) {
      throw new HttpException(
        'ID property not exist on Schema',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const { results: data } = await this.API.getOneById(id);

    return data[0];
  }

  async update(id: number, updateNotionDto: UpdateNotionDto) {
    const foundedNotion = await this.findOne(id);

    if (!foundedNotion) {
      throw new HttpException('Notion item not found', HttpStatus.NOT_FOUND);
    }

    const notionParsed = this.parseObjectToSend(updateNotionDto);

    return await this.API.update(foundedNotion.id, notionParsed);
  }

  async remove(id: number) {
    const notionItem = await this.findOne(id);

    if (!notionItem) {
      throw new HttpException('Notion item not found', HttpStatus.NOT_FOUND);
    }

    return await this.API.delete(notionItem.id);
  }
}
