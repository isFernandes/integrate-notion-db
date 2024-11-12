import { Test, TestingModule } from '@nestjs/testing';
import { NotionsService } from '../src/notions/notions.service';
import { NotionRepository } from '../src/notions/notions.repository';
import { CreateNotionDto } from '../src/notions/dto/create-notion.dto';
import { UpdateNotionDto } from '../src/notions/dto/update-notion.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('NotionsService', () => {
  let service: NotionsService;
  let notionRepository: NotionRepository;

  const mockNotionRepository = {
    create: jest.fn(),
    getAll: jest.fn(),
    getOneById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    validateExistProperty: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotionsService,
        { provide: NotionRepository, useValue: mockNotionRepository },
      ],
    }).compile();

    service = module.get<NotionsService>(NotionsService);
    notionRepository = module.get<NotionRepository>(NotionRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a new notion and return it', async () => {
      const createNotionDto: CreateNotionDto = {
        Content: 'isf creation',
        Language: 'en',
        'image content': 'Lorem Ipsum',
        Image: {
          name: 'Lorem Ipsum',
          type: 'external',
          external: {
            url: 'https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png',
          },
        },
        Description: 'this is a basic description',
        Campaign: 'Lorem of Ipsum',
        Where: 'basic',
        PlannedDate: '2024-11-12',
        Company: 'isf',
      };

      const createdNotion = {
        object: 'page',
        id: '13c0d303-ccf9-81ac-8dc4-d9fa6f2be93e',
        created_time: '2024-11-12T19:56:00.000Z',
        last_edited_time: '2024-11-12T19:56:00.000Z',
        created_by: {
          object: 'user',
          id: '70e5f2d9-fae0-4bf5-89af-638b06649be6',
        },
        last_edited_by: {
          object: 'user',
          id: '70e5f2d9-fae0-4bf5-89af-638b06649be6',
        },
        cover: null,
        icon: null,
        parent: {
          type: 'database_id',
          database_id: '1290d303-ccf9-808d-8697-f7a3dc42ef3f',
        },
        archived: false,
        in_trash: false,
        properties: {
          Content: {
            id: 'C%60ZU',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'isf creation',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'isf creation',
                href: null,
              },
            ],
          },
          Language: {
            id: 'GjWv',
            type: 'select',
            select: {
              id: 'eVm>',
              name: 'English',
              color: 'purple',
            },
          },
          'image content': {
            id: 'IIiC',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'Lorem Ipsum',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'Lorem Ipsum',
                href: null,
              },
            ],
          },
          Image: {
            id: 'QiyD',
            type: 'files',
            files: [
              {
                name: 'Lorem Ipsum',
                type: 'external',
                external: {
                  url: 'https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png',
                },
              },
            ],
          },
          Description: {
            id: 'V~Ws',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'this is a basic description',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'this is a basic description',
                href: null,
              },
            ],
          },
          Campaign: {
            id: 'cUng',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'Lorem of Ipsum',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'Lorem of Ipsum',
                href: null,
              },
            ],
          },
          Where: {
            id: 'nQhc',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'basic',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'basic',
                href: null,
              },
            ],
          },
          PlannedDate: {
            id: 'v%60V%7C',
            type: 'date',
            date: {
              start: '2024-11-12',
              end: null,
              time_zone: null,
            },
          },
          ID: {
            id: 'x%7DEW',
            type: 'unique_id',
            unique_id: {
              prefix: null,
              number: 306,
            },
          },
          Company: {
            id: 'title',
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content: 'isf',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'isf',
                href: null,
              },
            ],
          },
        },
        url: 'https://www.notion.so/isf-13c0d303ccf981ac8dc4d9fa6f2be93e',
        public_url:
          'https://jolifox.notion.site/isf-13c0d303ccf981ac8dc4d9fa6f2be93e',
        request_id: '2bec82f6-ddc2-4b31-9f74-2e34516981f3',
      };

      jest.spyOn(notionRepository, 'create').mockResolvedValue(createdNotion);

      const result = await service.create(createNotionDto);
      expect(result).toEqual(createdNotion);
    });
  });

  describe('findAll', () => {
    it('should return an array of notions', async () => {
      const notions = [
        /* array de noções simuladas */
      ];
      jest
        .spyOn(notionRepository, 'getAll')
        .mockResolvedValue({ results: notions });

      const result = await service.findAll();
      expect(result).toEqual(notions);
      expect(notionRepository.getAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single notion by id', async () => {
      const id = 306;
      const notion = {
        object: 'page',
        id: '13c0d303-ccf9-81ac-8dc4-d9fa6f2be93e',
        created_time: '2024-11-12T19:56:00.000Z',
        last_edited_time: '2024-11-12T20:43:00.000Z',
        created_by: {
          object: 'user',
          id: '70e5f2d9-fae0-4bf5-89af-638b06649be6',
        },
        last_edited_by: {
          object: 'user',
          id: '70e5f2d9-fae0-4bf5-89af-638b06649be6',
        },
        cover: null,
        icon: null,
        parent: {
          type: 'database_id',
          database_id: '1290d303-ccf9-808d-8697-f7a3dc42ef3f',
        },
        archived: false,
        in_trash: false,
        properties: {
          Content: {
            id: 'C%60ZU',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'isf update',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'isf update',
                href: null,
              },
            ],
          },
          Language: {
            id: 'GjWv',
            type: 'select',
            select: {
              id: 'eVm>',
              name: 'English',
              color: 'purple',
            },
          },
          'image content': {
            id: 'IIiC',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'Lorem Ipsum',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'Lorem Ipsum',
                href: null,
              },
            ],
          },
          Image: {
            id: 'QiyD',
            type: 'files',
            files: [
              {
                name: 'Lorem Ipsum',
                type: 'external',
                external: {
                  url: 'https://assets.justinmind.com/wp-content/uploads/2018/11/Lorem-Ipsum-alternatives-768x492.png',
                },
              },
            ],
          },
          Description: {
            id: 'V~Ws',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'this is a basic description',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'this is a basic description',
                href: null,
              },
            ],
          },
          Campaign: {
            id: 'cUng',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'Lorem of Ipsum',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'Lorem of Ipsum',
                href: null,
              },
            ],
          },
          Where: {
            id: 'nQhc',
            type: 'rich_text',
            rich_text: [
              {
                type: 'text',
                text: {
                  content: 'basic',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'basic',
                href: null,
              },
            ],
          },
          PlannedDate: {
            id: 'v%60V%7C',
            type: 'date',
            date: {
              start: '2024-11-12',
              end: null,
              time_zone: null,
            },
          },
          ID: {
            id: 'x%7DEW',
            type: 'unique_id',
            unique_id: {
              prefix: null,
              number: 306,
            },
          },
          Company: {
            id: 'title',
            type: 'title',
            title: [
              {
                type: 'text',
                text: {
                  content: 'isf',
                  link: null,
                },
                annotations: {
                  bold: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                  code: false,
                  color: 'default',
                },
                plain_text: 'isf',
                href: null,
              },
            ],
          },
        },
        url: 'https://www.notion.so/isf-13c0d303ccf981ac8dc4d9fa6f2be93e',
        public_url:
          'https://jolifox.notion.site/isf-13c0d303ccf981ac8dc4d9fa6f2be93e',
      };

      jest
        .spyOn(notionRepository, 'validateExistProperty')
        .mockResolvedValue(true);
      jest
        .spyOn(notionRepository, 'getOneById')
        .mockResolvedValue({ results: [notion] });

      const result = await service.findOne(id);
      expect(result).toEqual(notion);
      expect(notionRepository.validateExistProperty).toHaveBeenCalledWith('ID');
      expect(notionRepository.getOneById).toHaveBeenCalledWith(id);
    });

    it('should throw an exception if ID property does not exist', async () => {
      const id = 1;
      jest
        .spyOn(notionRepository, 'validateExistProperty')
        .mockResolvedValue(false);

      await expect(service.findOne(id)).rejects.toThrow(HttpException);
      await expect(service.findOne(id)).rejects.toThrow(
        'ID property not exist on Schema',
      );
    });
  });

  describe('update', () => {
    it('should update a notion and return it', async () => {
      const id = 1;
      const updateNotionDto: UpdateNotionDto = {
        Content: 'isf update',
      };
      const existingNotion = { id };

      const parsedNotion = {
        Content: {
          rich_text: [
            {
              text: {
                content: 'isf update',
              },
            },
          ],
        },
      };

      const updatedNotion = {
        Content: {
          rich_text: [
            {
              text: {
                content: 'isf update',
              },
            },
          ],
        },
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(existingNotion);
      jest.spyOn(notionRepository, 'update').mockResolvedValue(updatedNotion);

      const result = await service.update(id, updateNotionDto);
      expect(result).toEqual(updatedNotion);
      expect(service.findOne).toHaveBeenCalledWith(id);
      expect(notionRepository.update).toHaveBeenCalledWith(
        existingNotion.id,
        parsedNotion,
      );
    });

    it('should throw an exception if the notion does not exist', async () => {
      const id = 1;
      const updateNotionDto: UpdateNotionDto = {
        /* preencha com os dados necessários */
      };

      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(service.update(id, updateNotionDto)).rejects.toThrow(
        HttpException,
      );
      await expect(service.update(id, updateNotionDto)).rejects.toThrow(
        'Notion item not found',
      );
    });
  });

  describe('remove', () => {
    it('should remove a notion and return it', async () => {
      const id = 1;
      const notionItem = { id /* outros dados */ };

      jest.spyOn(service, 'findOne').mockResolvedValue(notionItem);
      jest.spyOn(notionRepository, 'delete').mockResolvedValue(notionItem);

      const result = await service.remove(id);
      expect(result).toEqual(notionItem);
      expect(service.findOne).toHaveBeenCalledWith(id);
      expect(notionRepository.delete).toHaveBeenCalledWith(notionItem.id);
    });

    it('should throw an exception if the notion does not exist', async () => {
      const id = 1;

      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(service.remove(id)).rejects.toThrow(HttpException);
      await expect(service.remove(id)).rejects.toThrow('Notion item not found');
    });
  });
});
