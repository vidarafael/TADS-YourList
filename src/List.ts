import { v4 as uuidv4 } from 'uuid'

export class List {
  private id;
  private createdAt;
  private title;
  private description;
  private status
  private tasks = [];

  constructor(title: string, description: string, status: string) {
    this.id = uuidv4()
    this.createdAt = new Date()
    this.title = title
    this.description = description
    this.status = status
  }
}
