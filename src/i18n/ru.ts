import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

export const ru = {
  ...russianMessages,
  resources: {
    contracts: {
      name: 'Договор |||| Договора',
      fields: {
        num: 'Номер',
        startAt: 'Дата начала',
        endAt: 'Дата окончания',
        createdAt: 'Дата создания',
      },
    },
  },
  ra: {
    ...russianMessages.ra,
    page: {
      create: 'Создать %{name}',
      dashboard: 'Главная',
      edit: '%{name} #%{id}',
      error: 'Что-то пошло не так',
      list: '%{name}',
      loading: 'Загрузка',
      not_found: 'Не найдено',
      show: '%{name} #%{id}',
      empty: 'Нет %{name}.',
      invite: 'Вы хотите добавить еще одну?',
    },
  },
};

export const i18nProvider = polyglotI18nProvider(() => ru, 'ru');
