
# --- !Ups

create table hop (
  id                        bigint not null,
  name                      varchar(255),
  alpha_acid                varchar(255),
  constraint pk_hop primary key (id))
;

create table hop_addition (
  id                        bigint not null,
  recipe_id                 bigint not null,
  hop_id                    bigint not null,
  quantity                  integer,
  addition_time             integer,
  ibu                       double,
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
  style                     varchar(255),
  constraint pk_recipe primary key (id))
;

create sequence hop_seq;

create sequence hop_addition_seq;

create sequence recipe_seq;

alter table hop_addition add constraint fk_hop_addition_recipe_1 foreign key (recipe_id) references recipe (id) on delete restrict on update restrict;
create index ix_hop_addition_recipe_1 on hop_addition (recipe_id);

INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Admiral', 10.6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Ahtanum', 5.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Cascade', 6.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Centennial', 9.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Challenger', 6.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Chinook', 11.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Citra', 11.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Cluster', 5.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Columbia', 5.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Columbus', 14.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Cornet', 9.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Crystal', 4.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Amarillo', 8.6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'D Saaz', 5.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'East Kent Golding', 4.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Eroica', 2.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'First Gold', 7.9);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Fuggles', 5.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Galaxy', 13.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Galena', 12.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Galena', 5.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Green Bullet', 13.6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Hallertau Aroma', 8.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Aquila', 6.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Hallertau Mittlefrueh', 6.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Hallertau Tradition', 5.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Herald', 12);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Hersbrucker', 2.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Horizon', 13);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Liberty', 4.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Lublin', 5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Magnum', 12.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Marco Polo', 12);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Millennium', 14.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'B Saaz', 6.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Mt. Hood', 5.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Nelson Sauvin', 12.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Newport', 11);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Northdown', 8.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Northern Brewer', 9.6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Nugget', 8.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Opal', 10);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Orion', 7.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pacific Gem', 13.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pacific Hallertau', 5.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Banner', 10);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pacific Jade', 15.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Palisade', 7.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Perle', 6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Phoenix', 8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pilgrim', 10.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pioneer', 9.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Pride of Ringwood', 8.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Progress', 7.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Saaz', 3.6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Santiam', 6.7);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Boadicea', 7.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Saphire', 4.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Simcoe', 12.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Smaragd', 8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Sorachi', 11.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Southern Cross', 14.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Spalt', 4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Sterling', 7.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Stickebract', 14);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Strisselspalt', 2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Styrian Golding', 4.4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Bramling Cross', 5.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Sun', 14);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Super Alpha', 12);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Super Pride', 13);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Target', 9);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Tarus', 13);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Tettnanger', 4);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Topaz', 16.2);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Tradition', 6);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Ultra', 3.3);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Vanguard', 5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Brewers Gold', 5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Warrior', 15.8);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Willamette', 7.1);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Zeus', 13.5);
INSERT INTO hop (id,name, alpha_acid) VALUES (hop_seq.nextval, 'Bullion', 9.5);

# --- !Downs

SET REFERENTIAL_INTEGRITY FALSE;

drop table if exists hop;

drop table if exists hop_addition;

drop table if exists recipe;

SET REFERENTIAL_INTEGRITY TRUE;

drop sequence if exists hop_seq;

drop sequence if exists hop_addition_seq;

drop sequence if exists recipe_seq;

