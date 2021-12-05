export function maskPhone(value: string | undefined): string | undefined {
  let formattedValue = value?.replace(/\D/g, '');
  formattedValue = formattedValue?.replace(/(\d{2})(\d)/, '($1) $2');
  formattedValue = formattedValue?.replace(/(\d{4,5})(\d{4}).*/, '$1-$2');
  return formattedValue;
}
