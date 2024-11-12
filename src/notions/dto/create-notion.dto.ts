export enum ILanguageEnum {
  ptBR = 'Portuguese',
  en = 'English',
  es = 'Spanish',
  fr = 'French',
  de = 'German',
  it = 'Italian',
  zhCN = 'Chinese',
  zhTW = 'Chinese',
  default = 'English',
}

export enum IFileTypes {
  ext = 'external',
  file = 'file',
}

interface TextContent {
  text: {
    content: string;
  };
}

interface RichTextProperty {
  rich_text: TextContent[];
}

interface SelectProperty {
  select: {
    name: ILanguageEnum;
  };
}

interface ExternalFile {
  name: string;
  type: IFileTypes;
  external: {
    url: string;
  };
}

interface HostedFile {
  name: string;
  type: IFileTypes;
  file: {
    url: string;
    expiry_time: string;
  };
}

interface FilesProperty {
  files: ExternalFile[] | HostedFile[];
}

interface DateProperty {
  date: {
    start: string;
  };
}

interface TitleProperty {
  title: TextContent[];
}

export class ISendObjectNotion {
  Content?: RichTextProperty;
  Language?: SelectProperty;
  'image content'?: RichTextProperty;
  Image?: FilesProperty;
  Description?: RichTextProperty;
  Campaign?: RichTextProperty;
  Where?: RichTextProperty;
  PlannedDate?: DateProperty;
  Company?: TitleProperty;
}

export class CreateNotionDto {
  Content?: string;
  Language?: string;
  'image content'?: string;
  Image?: {
    name?: string;
    type?: string;
    external?: {
      url?: string;
    };
  };
  Description?: string;
  Campaign?: string;
  Where?: string;
  PlannedDate?: string;
  Company?: string;
}
