export const userRules = {
  name: {
    min: 1,
    max: 50,
  },
  password: {
    min: 8,
    max: 100,
  },
};

export const boardRules = {
  title: {
    min: 1,
    max: 100,
  },
  description: {
    min: 1,
    max: 500,
  },
};

export const boardSectionRules = {
  title: {
    min: 1,
    max: 100,
  },
};

export const taskRules = {
  title: {
    min: 1,
    max: 100,
  },
  description: {
    min: 1,
    max: 500,
  },
};
