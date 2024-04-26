import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonWorkoutExcercise extends Schema.Component {
  collectionName: 'components_common_workout_excercises';
  info: {
    displayName: 'Workout-Excercise';
    description: '';
  };
  attributes: {
    excercise: Attribute.Relation<
      'common.workout-excercise',
      'oneToOne',
      'api::excercise.excercise'
    >;
    Series: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Attribute.DefaultTo<1>;
    Reps: Attribute.Integer;
  };
}

export interface CommonWorkout extends Schema.Component {
  collectionName: 'components_common_workouts';
  info: {
    displayName: 'Workout';
  };
  attributes: {
    sortId: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    excercises: Attribute.Component<'common.workout-excercise', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.workout-excercise': CommonWorkoutExcercise;
      'common.workout': CommonWorkout;
    }
  }
}
