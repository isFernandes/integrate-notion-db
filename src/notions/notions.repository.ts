import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

import { ISendObjectNotion } from './dto/create-notion.dto';

@Injectable()
export class NotionRepository {
  private DATABASE_API: AxiosInstance;
  private PAGE_API: AxiosInstance;

  constructor(private configService: ConfigService) {
    const databaseId = this.configService.get<string>('DATABASE_ID');
    const notionToken = this.configService.get<string>('SECRET_TOKEN');
    const notionVersion =
      this.configService.get<string>('NOTION_DEFAULT_VERSION') ?? '2022-06-28';

    this.DATABASE_API = axios.create({
      baseURL: `https://api.notion.com/v1/databases/${databaseId}`,
      headers: {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': notionVersion,
      },
    });

    this.PAGE_API = axios.create({
      baseURL: `https://api.notion.com/v1/pages`,
      headers: {
        Authorization: `Bearer ${notionToken}`,
        'Notion-Version': notionVersion,
      },
    });
  }

  private async getTableProperties() {
    const { data } = await this.DATABASE_API.get('');

    return data?.properties;
  }

  async validateExistProperty(property: string) {
    const response = await this.getTableProperties();

    const propertiesKey = Object.keys(response);

    return (
      propertiesKey.filter((prop) => {
        return prop.toUpperCase() === property.toUpperCase();
      }).length > 0
    );
  }

  async getOneById(id: number) {
    const { data } = await this.DATABASE_API.post('/query', {
      filter: {
        property: 'ID',
        unique_id: {
          equals: id,
        },
      },
    });

    return data;
  }

  async getAll() {
    const { data } = await this.DATABASE_API.post('/query', {
      sorts: [{ timestamp: 'created_time', direction: 'ascending' }],
    });

    return data;
  }

  async update(id: string, propertyData: ISendObjectNotion) {
    const body = {
      parent: {
        database_id: this.configService.get('DATABASE_ID'),
      },
      properties: propertyData,
    };

    const { data } = await this.PAGE_API.patch(`${id}`, body);
    return data;
  }

  async create(schemaData: ISendObjectNotion) {
    const body = {
      parent: {
        database_id: this.configService.get('DATABASE_ID'),
      },
      properties: schemaData,
    };

    const { data } = await this.PAGE_API.post('', body);

    return data;
  }

  async delete(id: string) {
    const { data } = await this.PAGE_API.patch(`${id}`, {
      in_trash: true,
    });

    return data;
  }
}
