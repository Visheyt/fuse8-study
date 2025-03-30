import './navigation.scss';

const USER_READ_PERMISSIONS = [
  'vacancies',
  'users',
  'candidates',
  'clients',
  'partners',
];

const checkHasUserPermission = (routeName: string) => {
  return USER_READ_PERMISSIONS.includes(routeName);
};

// Со звездочкой проверка прав асинхронная
// const checkHasUserPermission = async (routeName) => {
// 	return USER_READ_PERMISSIONS.includes(routeName)
// }
type Route = {
  name: string;
  pathname: string;
  getLink: () => string;
  text: string;
};
const routes: Record<string, Route> = {
  vacancies: {
    name: 'vacancies',
    pathname: 'vacancies',
    getLink: () => '/vacancies',
    text: 'Вакансии',
  },
  candidates: {
    name: 'candidates',
    pathname: 'candidates',
    getLink: () => '/candidates',
    text: 'Кандидаты',
  },
  events: {
    name: 'events',
    pathname: 'events',
    getLink: () => '/events',
    text: 'События',
  },
  clients: {
    name: 'clients',
    pathname: 'clients',
    getLink: () => '/clients',
    text: 'Клиенты',
  },
  partners: {
    name: 'partners',
    pathname: 'partners',
    getLink: () => '/partners',
    text: 'Партнеры',
  },
};

type NavigationType = {
  name: string;
  text: string;
  children: (NavigationType | Route)[];
};
const navigationList: NavigationType[] = [
  {
    name: 'content',
    text: 'Контент',
    children: [
      {
        name: 'job',
        text: 'Работа',
        children: [routes.vacancies, routes.candidates],
      },
      {
        name: 'news',
        text: 'Новости',
        children: [routes.events],
      },
    ],
  },
  {
    name: 'users',
    text: 'Пользователи',
    children: [
      {
        name: 'inner-users',
        text: 'Внутренние пользователи',
        children: [routes.clients, routes.partners],
      },
    ],
  },
];

// Нужно написать функцию
const generateNavigationListWithPermissions = (
  navigationList: NavigationType[],
  checkPermission: (routeName: string) => boolean
) => {
  return navigationList.map((navEl) => {
    return {
      ...navEl,
      children: navEl.children.map((el) => {
        const element = el as NavigationType;
        const filteredChildren = element.children.filter((i) =>
          checkPermission(i.name)
        );

        return {
          ...element,
          children: filteredChildren,
        };
      }),
    };
  });
};

export const Navigation = () => {
  const navigationListWithPermission = generateNavigationListWithPermissions(
    navigationList,
    checkHasUserPermission
  );

  return (
    <div className="container">
      <div className="navigation">
        {navigationListWithPermission.length > 0 &&
          navigationListWithPermission.map((item) => (
            <div key={item.name} className={'navigation-level-1'}>
              {item.children.length > 0 && (
                <>
                  {item.text}
                  {item.children.map((child) => (
                    <div key={child.name} className="navigation-level-2">
                      {child.children.length > 0 && (
                        <>
                          {child.text}
                          {child.children.map((i) => (
                            <div key={i.name} className="navigation-level-3">
                              {i.text}
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
