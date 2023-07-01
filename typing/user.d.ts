namespace API {
  type BaseEntity = {
    id: string;
  };
  type User = BaseEntity & {
    roles: string[];
    avatar: string;
    name: string;
    phoneNumber: string;
    dateOfBirth: Date;
    jobTitle: string;
  };
  type ReferListItem = BaseEntity & {
    name: string;
    phoneNumber: string;
    gender: boolean;
    avatar: string;
    dateOfBirth: Date;
  };

  type Teacher = User & {
    country: string;
    bio: string;
  }
}
