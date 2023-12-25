import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class CategoryEntity {
  @Column()
  @PrimaryColumn()
  name: string;
}
