export const REGEXP_TEXT = new RegExp(
  /^[a-zA-Zàáâäçéèêëìíîïñòóôöùúûüÿýæœ'\- ]{2,30}$/i,
);

export const REGEXP_EMAIL = new RegExp(
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
);

export const REGEXP_PASSWORD = new RegExp(/^(?=.*[0-9]).{8,}$/);

export const REGEXP_DIGIT = new RegExp(/^\d+$/);
