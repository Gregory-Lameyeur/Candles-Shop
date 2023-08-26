export const isValidPhoneNumber = (value: string) => {
  if (!value) return false;
  if (typeof window === 'undefined') {
    console.error('Not supported SSR yet!');
    return false;
  }
  const { intlTelInputUtils } = window as any;
  if (!intlTelInputUtils) {
    console.error('intlTelInputUtils not ready yet!');
    return false;
  }
  return (
    intlTelInputUtils.isValidNumber(value) &&
    intlTelInputUtils.getNumberType(value) ===
      intlTelInputUtils.numberType.MOBILE
  );
};
