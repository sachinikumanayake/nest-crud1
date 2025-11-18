import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nest-crud') 
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  age?: number; }