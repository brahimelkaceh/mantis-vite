import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  mort: Yup.number()
    .typeError('Le nombre de mortalités doit être une valeur positive.')
    .min(0, 'Le nombre de mortalités doit être une valeur positive.'),
  hensEliminated: Yup.number()
    .typeError('Le nombre des sujets éliminés doit être une valeur positive.')
    .min(0, 'Le nombre des sujets éliminés doit être une valeur positive.'),
  poidVif: Yup.number()
    .typeError('Le Poids corporel doit être une valeur positive.')
    .min(0, 'Le Poids corporel doit être une valeur positive.'),
  homog: Yup.number()
    .typeError("L'homogeneité doit être une valeur positive.")
    .min(0, "L'homogeneité doit être une valeur positive.")
    .max(100, "L'homogeneité  doit être inférieure ou égale à 100"),
  alimentDist: Yup.number()
    .typeError('Aliment consommé doit être une valeur positive.')
    .min(0, 'Aliment consommé doit être une valeur positive.'),
  eauDist: Yup.number().typeError('Eau consommée doit être une valeur positive.').min(0, 'Eau consommée doit être une valeur positive.'),
  prod_normal: Yup.number().typeError('Œufs normaux doit être une valeur positive.').min(0, 'Œufs normaux doit être une valeur positive.'),
  prod_dj: Yup.number()
    .typeError('Œufs double jaune doit être une valeur positive.')
    .min(0, 'Œufs double jaune doit être une valeur positive.'),
  prod_feles: Yup.number().typeError('Sale doit être une valeur positive.').min(0, 'Sale doit être une valeur positive.'),
  prod_casse: Yup.number().typeError('Cassé doit être une valeur positive.').min(0, 'Cassé doit être une valeur positive.'),
  prod_blanc: Yup.number().typeError('Œufs blancs doit être une valeur positive.').min(0, 'Œufs blancs doit être une valeur positive.'),
  prod_liquide: Yup.number().typeError('Liquide doit être une valeur positive.').min(0, 'Liquide doit être une valeur positive.'),
  prod_elimne: Yup.number().typeError('Triage doit être une valeur positive.').min(0, 'Triage doit être une valeur positive.'),
  pmo: Yup.number().typeError('PMO doit être une valeur positive.').min(0, 'PMO doit être une valeur positive.'),
  hensReformed: Yup.number()
    .typeError('Sujets normaux doit être une valeur positive.')
    .min(0, 'Sujets normaux doit être une valeur positive.'),
  hensReformedFree: Yup.number()
    .typeError('Sujets gratuits doit être une valeur positive.')
    .min(0, 'Sujets gratuits doit être une valeur positive.'),
  hensReformedTriage: Yup.number()
    .typeError('Sujets triage doit être une valeur positive.')
    .min(0, 'Sujets triage doit être une valeur positive.'),
  price: Yup.number().typeError('Prix unitaire doit être une valeur positive.').min(0, 'Prix unitaire doit être une valeur positive.'),
  temperatureMin: Yup.number()
    .typeError('Température intérieure minimale doit être un nombre.')
    .max(100, 'La température intérieure minimale doit être inférieure ou égale à 100.')
    .min(-100, 'La température intérieure minimale doit être supérieure ou égale à -100.'),
  temperatureMax: Yup.number()
    .typeError('Température intérieure maximale doit être un nombre.')
    .max(100, 'La température intérieure maximale doit être inférieure ou égale à 100.')
    .min(-100, 'La température intérieure maximale doit être supérieure ou égale à -100.'),
  temperatureMinExt: Yup.number()
    .typeError('Température extérieure minimale doit être un nombre.')
    .max(100, 'La température extérieure minimale doit être inférieure ou égale à 100.')
    .min(-100, 'La température extérieure minimale doit être supérieure ou égale à -100.'),
  temperatureMaxExt: Yup.number()
    .typeError('Température extérieure maximale doit être un nombre.')
    .max(100, 'La température extérieure maximale doit être inférieure ou égale à 100.')
    .min(-100, 'La température extérieure maximale doit être supérieure ou égale à -100.')
});
