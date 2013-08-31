# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table recipe (
  id                        bigint not null,
  label                     varchar(255),
  constraint pk_recipe primary key (id))
;

create sequence recipe_seq;




# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists recipe;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists recipe_seq;

