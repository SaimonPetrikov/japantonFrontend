
export const createFields = ['Введите наименование (Ru)', 'Введите наименование (En)', 'Код', 'Расположение'];

export const createInitial = {
  // eslint-disable-next-line camelcase
  name_ru: '',
  // eslint-disable-next-line camelcase
  name_en: '',
  // eslint-disable-next-line camelcase
  sticker_fields: '',
  sort: 0
};

export const updateInitialParts = {
  id: 0,
  updateData: createInitial
};

export const partsUpdateKeys = ['name_ru', 'name_en', 'sticker_fields', 'sort'];
