import { strapiClient } from "src/shared/strapi-client";
import { Excercise, MuscleGroup } from "../models/read/excercise";

type StrapiExcercise = {
  id: number;
  attributes: {
    imageUrl: string | null;
    name: string;
    key_name: string | null;
    muscleGroup: MuscleGroup;
  };
};

async function findAll(): Promise<Excercise[]> {
  const url = `excercises?pagination[pageSize]=999`;

  const strapiExcercises = await strapiClient.get<StrapiExcercise[]>(url);
  return strapiExcercises.map(it => _mapStrapiToDomain(it));
}

function _mapStrapiToDomain(strapiObject: StrapiExcercise): Excercise {
  return {
    id: strapiObject.id,
    imageUrl: strapiObject.attributes.imageUrl,
    name: strapiObject.attributes.name,
    keyName: strapiObject.attributes.key_name,
    muscleGroup: strapiObject.attributes.muscleGroup,
  }
}

export const ExcerciseRepository = {
  findAll,
}