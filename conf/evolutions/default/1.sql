# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table hop (
  id                        bigint not null,
  name                      varchar(255),
  alpha_acid                varchar(255),
  constraint pk_hop primary key (id))
;

create table hop_addition (
  id                        bigint not null,
  quantity                  integer,
  addition_time             integer,
  ibu                       double,
  parent_recipe_id          bigint,
  hop_id                    bigint,
  constraint pk_hop_addition primary key (id))
;

create table recipe (
  id                        bigint not null,
  boil_length               integer,
  mash_length               integer,
  efficiency                integer,
  abv                       double,
  boil_volume               double,
  ibus                      double,
  og                        varchar(255),
  fg                        varchar(255),
  brew_name                 varchar(255),
  style_code                varchar(255),
  constraint pk_recipe primary key (id))
;

create table style (
  code                      varchar(255) not null,
  category                  varchar(255),
  sub_category              varchar(255),
  ibu_min                   double,
  ibu_max                   double,
  srm_min                   double,
  srm_max                   double,
  og_min                    double,
  og_max                    double,
  fg_min                    double,
  fg_max                    double,
  abv_min                   double,
  abv_max                   double,
  constraint pk_style primary key (code))
;

create sequence hop_seq;

create sequence hop_addition_seq;

create sequence recipe_seq;

create sequence style_seq;

alter table hop_addition add constraint fk_hop_addition_parentRecipe_1 foreign key (parent_recipe_id) references recipe (id) on delete restrict on update restrict;
create index ix_hop_addition_parentRecipe_1 on hop_addition (parent_recipe_id);
alter table hop_addition add constraint fk_hop_addition_hop_2 foreign key (hop_id) references hop (id) on delete restrict on update restrict;
create index ix_hop_addition_hop_2 on hop_addition (hop_id);
alter table recipe add constraint fk_recipe_style_3 foreign key (style_code) references style (code) on delete restrict on update restrict;
create index ix_recipe_style_3 on recipe (style_code);



# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists hop;

drop table if exists hop_addition;

drop table if exists recipe;

drop table if exists style;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists hop_seq;

drop sequence if exists hop_addition_seq;

drop sequence if exists recipe_seq;

drop sequence if exists style_seq;

