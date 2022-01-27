export interface signupField {
  displayName: string;
  username: string;
  email: string;
  password: string;
}

export interface registerResponse {
  success: boolean;
  token: string;
  user: {
    displayName: string;
    username: string;
    _id: string;
  };
}

export interface loginFieldWithEmail {
  email: string;
  password: string;
}

export interface loginFieldWithUsername {
  username: string;
  password: string;
}

export interface imageFile {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface imageFileList {
  0: Blob | File | imageFile;
  length: number;
}

export interface postField {
  title: string;
  description: string;
  image?: undefined | object | imageFileList;
}
