export function getEndpointWithoutParams(endpoint: string) {
  const endpointWithoutParams = new URL(endpoint);
  endpointWithoutParams.search = '';

  return endpointWithoutParams.href;
}
