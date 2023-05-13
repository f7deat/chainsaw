namespace API {
  type BaseEntity = {
    id: string;
  };
  type User = BaseEntity & {
    roles: string[];
    avatar: string;
    hoVaTen: string;
  };
  type ReferListItem = BaseEntity & {
    name: string;
    phoneNumber: string;
    gender: boolean;
    avatar: string;
    dateOfBirth: Date;
  };
}
