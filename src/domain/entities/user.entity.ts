import { CreateDateColumn, DeleteDateColumn, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Link } from './link.entity';
import { KakaoAccount } from './kakao-account.entity';
import { UserSpecification } from './user-specification.entity';

@Entity({ name: 'user', comment: '사용자' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true, comment: '사용자 PK' })
  readonly id: string;

  @OneToOne(() => KakaoAccount, (e) => e.user, { nullable: true, cascade: true })
  @JoinTable()
  kakaoAccount: KakaoAccount | null;

  @OneToOne(() => UserSpecification, (e) => e.user, { cascade: true })
  @JoinTable()
  specification: UserSpecification;

  @OneToMany(() => Link, (e) => e.user, { cascade: true })
  @JoinTable()
  links: Link[];

  @CreateDateColumn({ comment: '생성일시' })
  readonly createdAt: Date;

  @UpdateDateColumn({ comment: '수정일시' })
  readonly updatedAt: Date;

  @DeleteDateColumn({ comment: '삭제일시' })
  readonly deletedAt: Date | null;
}
