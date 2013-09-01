# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table hop_addition (
  id                        bigint not null,
  recipe_id                 bigint not null,
  quantity                  integer,
  addition_time             integer,
  ibu                       double,
  hop_id                    integer,
  constraint pk_hop_addition primary key (id))
;

create table recipe (
  id                        bigint not null,
  brew_name                 varchar(255),
  boil_volume               double,
  boil_length               integer,
  mash_length               integer,
  og                        varchar(255),
  fg                        varchar(255),
  ibus                      double,
  efficiency                integer,
  abv                       double,
  constraint pk_recipe primary key (id))
;

create sequence hop_addition_seq;

create sequence recipe_seq;

alter table hop_addition add constraint fk_hop_addition_recipe_1 foreign key (recipe_id) references recipe (id) on delete restrict on update restrict;
create index ix_hop_addition_recipe_1 on hop_addition (recipe_id);



# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists hop_addition;

drop table if exists recipe;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists hop_addition_seq;

drop sequence if exists recipe_seq;

